const originals = new WeakMap<Text, string>();
const translatedValue = new WeakMap<Text, string>();
let observer: MutationObserver | null = null;
let currentTarget: "tr" | "en" | "ar" = "tr";
let scanQueued = false;
let translationRun = 0;
const CACHE_PREFIX = "irem_page_translation_v2:";
const ignoredTags = new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","PATH","TEXTAREA","INPUT","OPTION","CODE","PRE"]);
const isTranslatable = (node: Text) => {
  const value = node.nodeValue || "";
  const parent = node.parentElement;
  if (!parent || !value.trim() || value.trim().length < 2 || ignoredTags.has(parent.tagName)) return false;
  if (parent.closest('[translate="no"],[data-no-auto-translate="true"],[contenteditable="true"],.notranslate,[aria-hidden="true"]')) return false;
  if (/^[\d\s.,:%+\-/#()]+$/.test(value.trim())) return false;
  return true;
};
const cacheKey = (target: "en" | "ar", source: string) => CACHE_PREFIX + target + ":" + source;
function readCache(target: "en" | "ar", source: string): string | null {
  try { return localStorage.getItem(cacheKey(target, source)); } catch { return null; }
}
function writeCache(target: "en" | "ar", source: string, translated: string) {
  try { localStorage.setItem(cacheKey(target, source), translated); } catch { /* Storage may be unavailable or full. */ }
}
async function translateBatch(nodes: Text[], target: "en" | "ar", runId: number) {
  const pending: {node:Text;source:string}[] = [];
  nodes.forEach(node => {
    if (!node.isConnected) return;
    const source = originals.get(node) || node.nodeValue || "";
    const cached = readCache(target, source);
    if (cached) {
      translatedValue.set(node, cached);
      node.nodeValue = cached;
    } else pending.push({node,source});
  });
  // The API accepts up to 40 strings. Larger batches reduce the time spent
  // waiting between sequential requests when a page contains many text nodes.
  for (let i = 0; i < pending.length; i += 35) {
    if (runId !== translationRun || currentTarget !== target) return;
    const batch = pending.slice(i, i + 35).filter(item => item.node.isConnected);
    if (!batch.length) continue;
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texts: batch.map(item => item.source), target })
      });
      if (!response.ok) throw new Error(`Translation request failed (${response.status})`);
      const data = await response.json();
      if (runId !== translationRun || currentTarget !== target) return;
      batch.forEach((item, index) => {
        const translated = data.translations?.[index];
        if (item.node.isConnected && typeof translated === "string" && translated.trim()) {
          writeCache(target, item.source, translated);
          translatedValue.set(item.node, translated);
          item.node.nodeValue = translated;
        }
      });
    } catch (error) {
      console.warn("İrem Comfort translation unavailable; original text kept.", error);
      // Continue with later batches; a single provider failure must not stop the page.
    }
  }
}
function collect(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const found: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node as Text;
    if (!isTranslatable(text)) continue;
    if (!originals.has(text)) originals.set(text, text.nodeValue || "");
    found.push(text);
  }
  return found;
}
async function translateNodes(nodes: Text[], target: "en" | "ar") {
  await translateBatch(nodes, target, translationRun);
}
export function installPageTranslation(target: "tr" | "en" | "ar") {
  currentTarget = target;
  translationRun += 1;
  const runId = translationRun;
  if (observer) observer.disconnect();
  observer = null;

  // Turkish is the immutable source language; restore it before applying
  // another language so switching EN <-> AR never translates a translation.
  if (target === "tr") {
    document.documentElement.lang = "tr";
    document.documentElement.dir = "ltr";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const text = node as Text;
      const source = originals.get(text);
      if (source !== undefined) text.nodeValue = source;
      translatedValue.delete(text);
    }
    return () => { translationRun += 1; };
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const all: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node as Text;
    if (!isTranslatable(text)) continue;
    if (!originals.has(text)) originals.set(text, text.nodeValue || "");
    text.nodeValue = originals.get(text) || text.nodeValue || "";
    translatedValue.delete(text);
    all.push(text);
  }
  document.documentElement.lang = target;
  document.documentElement.dir = target === "ar" ? "rtl" : "ltr";
  void translateBatch(all, target, runId);

  observer = new MutationObserver(records => {
    if (scanQueued || currentTarget !== target) return;
    scanQueued = true;
    queueMicrotask(() => {
      scanQueued = false;
      if (currentTarget !== target || runId !== translationRun) return;
      const fresh: Text[] = [];
      records.forEach(record => {
        if (record.type === "characterData" && record.target.nodeType === Node.TEXT_NODE) {
          const text = record.target as Text;
          // Ignore our own translated writes; new CMS/admin text is a fresh Turkish source.
          if (translatedValue.has(text) && text.nodeValue === translatedValue.get(text)) return;
          originals.set(text, text.nodeValue || "");
          translatedValue.delete(text);
          if (isTranslatable(text)) fresh.push(text);
        }
        record.addedNodes.forEach(added => {
          if (added.nodeType === Node.TEXT_NODE) {
            const text = added as Text;
            if (isTranslatable(text)) {
              if (!originals.has(text)) originals.set(text, text.nodeValue || "");
              fresh.push(text);
            }
          } else if (added.nodeType === Node.ELEMENT_NODE) {
            fresh.push(...collect(added));
          }
        });
      });
      if (fresh.length) void translateNodes([...new Set(fresh)], target);
    });
  });
  observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  return () => {
    translationRun += 1;
    if (observer) observer.disconnect();
    observer = null;
  };
}
