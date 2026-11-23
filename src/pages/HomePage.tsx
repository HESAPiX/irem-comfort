import React from 'react';
import { ArrowRight, CheckCircle2, Factory, PackageCheck, ShieldCheck } from 'lucide-react';
import { SitePageShell } from './SitePageShell';
import { useAppImages } from '../context/ImageContext';
import { COLLECTION_ITEMS, PREMIUM_PRODUCT_IMAGE_FALLBACKS } from '../constants/data';
import { PremiumProductShowcase } from '../components/ui/PremiumProductShowcase';

export const HomePage: React.FC<{onAdminClick?:()=>void;openLegal?:(d:any)=>void}> = ({onAdminClick,openLegal}) => {
  const {collectionItems,images}=useAppImages();
  const allItems=collectionItems?.length?collectionItems:COLLECTION_ITEMS;
  const featuredItems=allItems.filter(item=>item.isFeatured);
  const items=(featuredItems.length>0?featuredItems:allItems).slice(0,4);
  const hero=images.heroImage||allItems[0]?.image||PREMIUM_PRODUCT_IMAGE_FALLBACKS[allItems[0]?.id||''];
  return <SitePageShell title="Konforu mağazanıza taşıyoruz." eyebrow="2026 / 2027 YENİ SEZON" intro="İrem Comfort, kadın comfort ayakkabısında hakiki deri, konforlu taban ve üretim disipliniyle mağazalara toptan koleksiyon sunar." activePath="/" onAdminClick={onAdminClick} legal={{open:openLegal!}}>
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-12">
      <div className="grid lg:grid-cols-[.82fr_1.18fr] gap-6">
        <div className="rounded-[2rem] bg-[#102f59] text-white p-8 sm:p-12 flex flex-col justify-end min-h-[540px]">
          <div className="text-[11px] uppercase tracking-[.22em] text-[#d6b46a] font-bold">İREM COMFORT · MANİSA</div>
          <h2 className="mt-4 text-4xl sm:text-6xl font-serif-luxury font-semibold leading-[1.02]">Mağazanızın comfort koleksiyonu.</h2>
          <p className="mt-6 text-white/75 leading-relaxed max-w-xl">Yeni sezon kadın terlik ve sandalet modellerimizi üreticiden, mağaza odaklı çalışma modeliyle inceleyin.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="/koleksiyonlar" className="rounded-full bg-white text-[#102f59] px-5 py-3 font-bold text-sm inline-flex items-center gap-2">Koleksiyonları incele <ArrowRight className="w-4 h-4"/></a><a href="/toptan-satis" className="rounded-full border border-white/25 px-5 py-3 font-bold text-sm">Toptan bilgi</a></div>
        </div>
        <div className="rounded-[2rem] overflow-hidden min-h-[540px] bg-slate-100"><img src={hero} className="w-full h-full object-cover" alt="İrem Comfort yeni sezon koleksiyonu"/></div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">{[[Factory,'Üreticiden','Manisa merkezli üretim'],[ShieldCheck,'Hakiki deri','Konfor odaklı malzeme seçimi'],[PackageCheck,'Düzenli tedarik','Mağaza odaklı sevkiyat planı']].map(([I,t,d]:any)=><div key={t} className="bg-white border border-slate-200 rounded-3xl p-6 flex gap-4"><I className="w-7 h-7 text-[#8b6a2b] shrink-0"/><div><div className="font-bold text-[#102f59]">{t}</div><p className="text-sm text-slate-500 mt-1">{d}</p></div></div>)}</div>
      <div className="mt-14 flex items-end justify-between"><div><div className="text-[11px] uppercase tracking-[.2em] text-[#8b6a2b] font-bold">SEZON SEÇKİSİ</div><h2 className="mt-2 text-3xl sm:text-4xl font-serif-luxury font-bold text-[#102f59]">Mağazanız için öne çıkanlar</h2><p className="mt-2 text-sm text-slate-500">Renkleri seçin, her modelin fotoğraflarını keşfedin.</p></div><a href="/urunler" className="text-sm font-bold text-[#102f59]">Tüm ürünler →</a></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">{items.map(item=><article key={item.id} className="min-w-0 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"><PremiumProductShowcase item={item} baseImage={images.collectionImages[item.id]?.image} secondaryImage={images.collectionImages[item.id]?.secondaryImage} compact onOpen={()=>{window.location.href=`/urunler/${encodeURIComponent(item.id)}`;}}/><div className="px-2 pb-2 pt-4"><div className="text-[10px] text-[#8b6a2b] font-bold uppercase tracking-wider">{item.category}</div><h3 className="mt-2 font-serif-luxury font-bold text-[#102f59] line-clamp-2">{item.name}</h3><p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.subtitle}</p><a href={`/urunler/${encodeURIComponent(item.id)}`} className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#102f59]">Modeli incele <ArrowRight className="w-3 h-3"/></a></div></article>)}</div>
      <div className="mt-12 rounded-[2rem] bg-white border border-slate-200 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"><div><div className="text-[11px] uppercase tracking-[.2em] text-[#8b6a2b] font-bold">DİJİTAL KATALOG</div><h2 className="mt-2 text-3xl font-serif-luxury font-bold text-[#102f59]">Yeni sezonu tek dosyada inceleyin.</h2></div><a href="/katalog" className="rounded-full bg-[#102f59] text-white px-6 py-3 font-bold text-sm inline-flex items-center gap-2">Kataloğa git <ArrowRight className="w-4 h-4"/></a></div>
    </section>
  </SitePageShell>;
};
