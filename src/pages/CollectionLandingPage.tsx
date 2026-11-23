import React,{useMemo} from 'react';
import {ArrowRight,ArrowUpRight,Layers3} from 'lucide-react';
import {SitePageShell} from './SitePageShell';
import {useAppImages} from '../context/ImageContext';
import {COLLECTION_ITEMS} from '../constants/data';
import {FaqSection} from '../components/sections/FaqSection';

const inferGroup=(p:any)=>p.collectionGroup?.trim()||(p.category?.toLowerCase().includes('sandalet')?'Sandalet Koleksiyonu':p.category?.toLowerCase().includes('sabo')?'Sabo Koleksiyonu':'Terlik Koleksiyonu');
const inferSub=(p:any)=>p.subCollection?.trim()||p.category||'Sezon Seçkisi';
export const CollectionLandingPage:React.FC<{onAdminClick?:()=>void;openLegal?:(d:any)=>void}>=({onAdminClick,openLegal})=>{
 const{collectionItems,images}=useAppImages();const items=collectionItems?.length?collectionItems:COLLECTION_ITEMS;
 const groups=useMemo(()=>{const map=new Map<string,Map<string,typeof items>>();items.forEach(p=>{const g=inferGroup(p),sub=inferSub(p);if(!map.has(g))map.set(g,new Map());const subs=map.get(g)!;if(!subs.has(sub))subs.set(sub,[]);subs.get(sub)!.push(p)});return Array.from(map.entries()).map(([name,subs])=>({name,subs:Array.from(subs.entries()).map(([title,products])=>({title,products}))}))},[items]);
 const go=(g:string,sub?:string)=>'/urunler?koleksiyon='+encodeURIComponent(g)+(sub?'&alt='+encodeURIComponent(sub):'');
 return <SitePageShell title="Koleksiyonlar" eyebrow="İREM COMFORT SEÇKİLERİ" intro="Her tasarım anlayışı için ayrı bir dünya. Önce koleksiyonunuzu seçin, ardından o koleksiyonun alt seçkilerini keşfedin." activePath="/koleksiyonlar" onAdminClick={onAdminClick} legal={{open:openLegal!}}>
 <main className="bg-[#f7f6f2] text-[#10294b]">
  <section className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-10 lg:py-12 space-y-12">
   {groups.map((group,index)=><section key={group.name} id={'group-'+index}>
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d9d5cb] pb-6"><div><div className="flex items-center gap-2 text-[10px] uppercase tracking-[.23em] text-[#a47c36] font-extrabold"><Layers3 size={14}/> Koleksiyon 0{index+1}</div><h2 className="mt-3 font-serif-luxury text-4xl sm:text-5xl">{group.name}</h2><p className="mt-3 text-sm text-slate-500">{group.subs.length} alt seçki · {group.subs.reduce((n,s)=>n+s.products.length,0)} model</p></div><a href={go(group.name)} className="inline-flex items-center gap-2 text-sm font-bold">Bu koleksiyondaki tüm ürünler <ArrowRight size={16}/></a></div>
    <div className="mt-7 grid md:grid-cols-2 xl:grid-cols-3 gap-5">{group.subs.map((sub,subIndex)=>{const cover=sub.products.find(p=>p.image)?.image||images.collectionImages[sub.products[0]?.id]?.image||'';return <a key={sub.title} href={go(group.name,sub.title)} className="group relative min-h-[260px] overflow-hidden rounded-[24px] bg-[#e7e2d9] border border-[#e3ded4]"><div className="absolute inset-0">{cover?<img src={cover} alt={sub.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105"/>:<div className="w-full h-full bg-gradient-to-br from-[#d8d0c3] to-[#f2eee7]"/>}</div><div className="absolute inset-0 bg-gradient-to-t from-[#0b203b]/90 via-[#0b203b]/15 to-transparent"/><div className="absolute top-5 left-5 rounded-full bg-white/90 text-[#10294b] px-3 py-1.5 text-[10px] font-bold">{sub.products.length} MODEL</div><div className="absolute bottom-0 p-6 sm:p-7 text-white"><div className="text-[9px] tracking-[.22em] uppercase text-[#e2c47e] font-bold">Alt koleksiyon 0{subIndex+1}</div><h3 className="mt-2 font-serif-luxury text-3xl">{sub.title}</h3><div className="mt-4 inline-flex items-center gap-2 text-xs font-bold">Seçkiyi keşfet <ArrowUpRight size={15}/></div></div></a>})}</div>
   </section>)}
   {groups.length===0&&<div className="rounded-3xl bg-white p-10 text-center">Henüz koleksiyon eklenmemiş.</div>}
   <div className="mb-2"><FaqSection/></div>
   <div className="rounded-[28px] bg-[#10294b] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6"><div><div className="text-[10px] uppercase tracking-[.24em] text-[#d7b875] font-bold">İş ortaklığı</div><h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl">Mağazanıza uygun seçkiyi birlikte oluşturalım.</h2></div><a href="/toptan-satis" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d7b875] px-6 py-3.5 text-sm font-extrabold text-[#10294b]">Toptan bilgi alın <ArrowRight size={16}/></a></div>
  </section>
 </main></SitePageShell>;
};