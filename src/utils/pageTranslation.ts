const originals = new WeakMap<Text, string>();
const translatedValue = new WeakMap<Text, string>();
let observer: MutationObserver | null = null;
let currentTarget: "tr" | "en" | "ar" = "tr";
let scanQueued = false;
let translationRun = 0;
const ignoredTags = new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","PATH","TEXTAREA","INPUT","OPTION","CODE","PRE"]);
const isTranslatable = (node: Text) => {
  const value = node.nodeValue || "";
  const parent = node.parentElement;
  if (!parent || !value.trim() || value.trim().length < 2 || ignoredTags.has(parent.tagName)) return false;
  if (parent.closest('[translate="no"],[data-no-auto-translate="true"],[contenteditable="true"],.notranslate,[aria-hidden="true"]')) return false;
  if (/^[\d\s.,:%+\-/#()]+$/.test(value.trim())) return false;
  return true;
};
async function translateBatch(nodes: Text[], target: "en" | "ar", runId: number) {
  for (let i = 0; i < nodes.length; i += 5) {
    if (runId !== translationRun || currentTarget !== target) return;
    const batch = nodes.slice(i, i + 5).filter(n => n.isConnected);
    if (!batch.length) continue;
    const sources = batch.map(n => originals.get(n) || n.nodeValue || "");
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texts: sources, target })
      });
      if (!response.ok) throw new Error(`Translation request failed (${response.status})`);
      const data = await response.json();
      if (runId !== translationRun || currentTarget !== target) return;
      batch.forEach((node, index) => {
        const translated = data.translations?.[index];
        if (node.isConnected && typeof translated === "string" && translated.trim()) {
          translatedValue.set(node, translated);
          node.nodeValue = translated;
        }
      });
    } catch (error) {
      console.warn("İrem Comfort translation unavailable; original text kept.", error);
      // Keep processing later batches; one failed request must not stop the whole page.
    }
  }
}
function collect(root: Node, includeKnown = false) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const found: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node as Text;
    if (!isTranslatable(text)) continue;
    if (!originals.has(text)) originals.set(text, text.nodeValue || "");
    if (includeKnown || !translatedValue.has(text)) found.push(text);
  }
  return found;
}
async function translateNodes(nodes: Text[], target: "en" | "ar") {
  const runId = translationRun;
  await translateBatch(nodes, target, runId);
}
export function installPageTranslation(target: "tr" | "en" | "ar") {
  currentTarget = target;
  translationRun += 1;
  const runId = translationRun;
  if (observer) observer.disconnect();
  observer = null;

  // Always restore the immutable Turkish source first. Re-translate every
  // connected text node, including nodes translated during a previous language.
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
          // Ignore our own translated writes; external edits become new source text.
          if (translatedValue.has(text) && text.nodeValue === translatedValue.get(text)) return;
          if (!translatedValue.has(text)) {
            originals.set(text, text.nodeValue || "");
            fresh.push(text);
          }
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
