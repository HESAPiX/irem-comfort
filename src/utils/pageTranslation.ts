const originals = new Map<Text, string>();
const translated = new Map<Text, string>();
let observer: MutationObserver | null = null;
let currentTarget = "tr";
let scheduled = false;
const ignoredTags = new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","PATH","TEXTAREA","INPUT","OPTION","CODE","PRE"]);
const isTranslatable = (node: Text) => {
  const value = node.nodeValue || "";
  const parent = node.parentElement;
  if (!parent || !value.trim() || value.trim().length < 2 || ignoredTags.has(parent.tagName)) return false;
  if (parent.closest('[translate="no"],[contenteditable="true"],.notranslate,[aria-hidden="true"]')) return false;
  if (/^[\d\s.,:%+\-/#()]+$/.test(value.trim())) return false;
  return true;
};
async function translateBatch(nodes: Text[], target: string) {
  for (let i=0; i<nodes.length; i+=35) {
    const batch=nodes.slice(i,i+35);
    const sources=batch.map(n=>originals.get(n)||n.nodeValue||"");
    try {
      const response=await fetch("/api/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texts:sources,target})});
      if(!response.ok) throw new Error("Translation request failed");
      const data=await response.json();
      batch.forEach((node,index)=>{
        if(node.isConnected && typeof data.translations?.[index]==="string") {
          translated.set(node,data.translations[index]);
          node.nodeValue=data.translations[index];
        }
      });
    } catch(error) {
      console.warn("İrem Comfort translation unavailable; original text kept.",error);
      return;
    }
  }
}
function scan(root: Node) {
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const found:Text[]=[];let node:Node|null;
  while((node=walker.nextNode())) {
    const text=node as Text;
    if(!originals.has(text) && isTranslatable(text)) {
      originals.set(text,text.nodeValue||"");
      found.push(text);
    }
  }
  return found;
}
export function installPageTranslation(target: "tr"|"en"|"ar") {
  currentTarget=target;
  if(observer){observer.disconnect();observer=null;}
  // Restore all known text before translating into the newly selected language.
  originals.forEach((source,node)=>{if(node.isConnected)node.nodeValue=source;});
  translated.clear();
  if(target==="tr") return ()=>{};
  const run=async(nodes:Text[])=>{if(nodes.length)await translateBatch(nodes,target);};
  void run(scan(document.body));
  observer=new MutationObserver(records=>{
    if(scheduled)return;
    scheduled=true;
    queueMicrotask(()=>{
      scheduled=false;
      if(currentTarget!==target)return;
      const fresh:Text[]=[];
      records.forEach(record=>{
        record.addedNodes.forEach(n=>{
          if(n.nodeType===Node.TEXT_NODE){
            const t=n as Text;
            if(!originals.has(t)&&isTranslatable(t)){originals.set(t,t.nodeValue||"");fresh.push(t);}
          } else if(n.nodeType===Node.ELEMENT_NODE) fresh.push(...scan(n));
        });
      });
      void run(fresh);
    });
  });
  observer.observe(document.body,{childList:true,subtree:true});
  return ()=>{if(observer){observer.disconnect();observer=null;}};
}
