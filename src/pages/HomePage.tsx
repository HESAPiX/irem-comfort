import React from 'react';
import {ArrowRight,Factory,ShieldCheck,Leaf,PackageCheck,MessageCircle,ChevronRight} from 'lucide-react';
import {SitePageShell} from './SitePageShell';
import {useAppImages} from '../context/ImageContext';
import {COLLECTION_ITEMS} from '../constants/data';
import {PremiumProductShowcase} from '../components/ui/PremiumProductShowcase';
import {LogoIC} from '../components/brand/LogoIC';

export const HomePage:React.FC<{onAdminClick?:()=>void;openLegal?:(d:any)=>void}>=({onAdminClick,openLegal})=>{
 const{collectionItems,images}=useAppImages();
 const allItems=collectionItems?.length?collectionItems:COLLECTION_ITEMS;
 const featured=allItems.filter(x=>x.isFeatured);const items=(featured.length?featured:allItems).slice(0,4);
 const hero=images.heroImage||allItems.find(x=>x.image)?.image||'';
 const lead=allItems[0];
 return <SitePageShell title="" activePath="/" showHero={false} onAdminClick={onAdminClick} legal={{open:openLegal!}}>
 <div className="bg-[#faf9f6]">
  <section className="relative overflow-hidden bg-[#f2f0eb]">
   <div className="absolute inset-0 opacity-[.22]" style={{backgroundImage:'radial-gradient(#b9a77e 0.7px,transparent 0.7px)',backgroundSize:'18px 18px'}}/>
   <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
    <div className="grid lg:grid-cols-[.88fr_1.12fr] gap-8 lg:gap-12 items-center min-h-[510px]">
     <div className="py-5 lg:py-8">
      <div className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold tracking-[.24em] uppercase text-[#96712e]"><span className="w-8 h-px bg-[#b8862f]"/>Manisa'dan mağazanıza</div>
      <h1 className="mt-5 max-w-[650px] font-serif-luxury text-[42px] sm:text-6xl xl:text-[72px] leading-[1.02] tracking-[-.035em] font-semibold text-[#10284d]">Her adımda <span className="text-[#9b762e] italic">konfor</span>, her koleksiyonda güven.</h1>
      <p className="mt-6 max-w-xl text-sm sm:text-base leading-7 text-slate-600">Hakiki deri kadın terlik ve sandalet koleksiyonlarımızı Manisa'daki üretim deneyimimizle hazırlıyor, mağazalara doğrudan toptan tedarik sunuyoruz.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a href="/koleksiyonlar" className="inline-flex items-center gap-2 rounded-full bg-[#102f59] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#102f59]/15 hover:bg-[#183d6c]">Koleksiyonları keşfet <ArrowRight className="w-4 h-4"/></a><a href="/toptan-satis" className="inline-flex items-center gap-2 rounded-full border border-[#102f59]/20 bg-white/80 px-6 py-3.5 text-sm font-bold text-[#102f59] hover:border-[#b8862f]"><MessageCircle className="w-4 h-4"/>Toptan iş ortaklığı</a></div>
      <div className="mt-10 flex items-center gap-3"><LogoIC size={38} color="#102f59"/><div><div className="text-xs font-bold tracking-wide text-[#102f59]">İREM COMFORT</div><div className="text-[11px] text-slate-500">Manisa · Üreticiden doğrudan</div></div></div>
     </div>
     <div className="relative min-h-[360px] sm:min-h-[500px] rounded-[28px] overflow-hidden bg-[#e4e0d8] shadow-[0_24px_70px_rgba(25,38,55,.14)]">
      {hero?<img src={hero} alt="İrem Comfort kadın terlik ve sandalet koleksiyonu" className="absolute inset-0 w-full h-full object-cover"/>:<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e8e2d7] to-[#c9c0b2]"><div className="text-center text-[#102f59]"><LogoIC size={110}/><div className="mt-3 font-serif-luxury text-3xl">İrem Comfort</div></div></div>}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 bg-gradient-to-t from-[#081d38]/85 via-[#081d38]/25 to-transparent text-white"><span className="text-[10px] tracking-[.22em] uppercase text-[#f0d08a] font-bold">Yeni sezon seçkisi</span><div className="mt-2 flex items-end justify-between gap-4"><div><div className="font-serif-luxury text-2xl sm:text-3xl">{lead?.category||'Kadın comfort koleksiyonu'}</div><p className="text-xs text-white/75 mt-1">Hakiki deri · Özenli işçilik · Günlük konfor</p></div><a href="/urunler" className="shrink-0 w-11 h-11 rounded-full bg-white text-[#102f59] flex items-center justify-center"><ArrowRight className="w-5 h-5"/></a></div></div>
     </div>
    </div>
   </div>
  </section>
  <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 -mt-1">
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 py-7">
    {[[Factory,'Manisa üretimi','Üreticiden doğrudan iletişim'],[ShieldCheck,'Hakiki deri','Malzeme ve işçilik odağı'],[Leaf,'Konfor odaklı','Günlük kullanıma uygun tasarımlar'],[PackageCheck,'Toptan iş ortaklığı','Mağazalara koleksiyon tedariği']].map(([Icon,title,desc]:any)=><div key={title} className="flex items-center gap-3 rounded-2xl border border-[#e9e5dc] bg-white p-4"><div className="w-10 h-10 rounded-xl bg-[#f4f0e7] flex items-center justify-center"><Icon className="w-5 h-5 text-[#98722e]"/></div><div><div className="text-sm font-bold text-[#102f59]">{title}</div><div className="text-[11px] text-slate-500 mt-0.5">{desc}</div></div></div>)}
   </div>
  </section>
  <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
   <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5"><div><div className="text-[10px] font-extrabold tracking-[.24em] uppercase text-[#98722e]">Sezon seçkisi</div><h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl text-[#10284d]">Mağazanız için öne çıkan modeller</h2><p className="mt-2 text-sm text-slate-500">Renkleri inceleyin, model fotoğraflarını keşfedin.</p></div><a href="/urunler" className="inline-flex items-center gap-2 text-sm font-bold text-[#102f59]">Tüm ürünleri gör <ChevronRight className="w-4 h-4"/></a></div>
   <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">{items.map(item=><article key={item.id} className="min-w-0 rounded-[22px] border border-[#e9e5dc] bg-white p-3 shadow-[0_8px_26px_rgba(25,38,55,.04)] hover:shadow-[0_18px_40px_rgba(25,38,55,.09)] transition-shadow"><PremiumProductShowcase item={item} baseImage={images.collectionImages[item.id]?.image} secondaryImage={images.collectionImages[item.id]?.secondaryImage} compact onOpen={()=>{window.location.href=`/urunler/${encodeURIComponent(item.id)}`;}}/><div className="px-2 pb-2 pt-4"><div className="text-[10px] text-[#98722e] font-extrabold uppercase tracking-wider">{item.category}</div><h3 className="mt-2 font-serif-luxury text-lg leading-snug font-bold text-[#102f59] line-clamp-2">{item.name}</h3><p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.subtitle}</p><a href={`/urunler/${encodeURIComponent(item.id)}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#102f59]">Modeli incele <ArrowRight className="w-3.5 h-3.5"/></a></div></article>)}</div>
  </section>
  <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 pb-14">
   <div className="relative overflow-hidden rounded-[28px] bg-[#102f59] px-7 py-9 sm:px-12 sm:py-12 text-white"><div className="absolute -right-10 -top-16 w-72 h-72 rounded-full border border-white/10"/><div className="absolute -right-2 -top-8 w-52 h-52 rounded-full border border-white/10"/><div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-7"><div><div className="text-[10px] uppercase tracking-[.24em] font-bold text-[#e4c477]">İş ortaklığımız</div><h2 className="mt-3 max-w-2xl font-serif-luxury text-3xl sm:text-4xl leading-tight">Mağazanızın yeni sezon koleksiyonunu birlikte oluşturalım.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/70">Model, renk ve numara seçeneklerini inceleyin; toptan çalışma koşulları için ekibimizle görüşün.</p></div><div className="flex flex-wrap gap-3"><a href="/toptan-satis" className="inline-flex items-center gap-2 rounded-full bg-white text-[#102f59] px-6 py-3.5 text-sm font-bold">Toptan bilgi alın <ArrowRight className="w-4 h-4"/></a><a href="/katalog" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold">Dijital katalog</a></div></div></div>
  </section>
 </div>
 </SitePageShell>;
};