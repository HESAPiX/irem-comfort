import React from 'react';
import {Globe2,ArrowUpRight,Building2,Handshake} from 'lucide-react';
import {SitePageShell} from './SitePageShell';

const exportMarkets=[
 {flag:'🇵🇱',country:'Polonya'},{flag:'🇧🇬',country:'Bulgaristan'},{flag:'🇷🇺',country:'Rusya'},
 {flag:'🇲🇩',country:'Moldova'},{flag:'🇪🇸',country:'İspanya'},{flag:'🇷🇸',country:'Sırbistan'},
 {flag:'🇽🇰',country:'Kosova'},{flag:'🇬🇷',country:'Yunanistan'},{flag:'🇮🇹',country:'İtalya'}
];
const retailPartners=[
 {name:'Hotiç',style:'font-serif font-black tracking-tight text-[27px] text-[#252525]'},
 {name:'Çetinkaya',style:'font-black tracking-[-.06em] text-[22px] text-[#bd2632]'},
 {name:'Bambi',style:'font-serif italic font-black tracking-tight text-[30px] text-[#171717]'},
 {name:'TANCA',style:'font-black tracking-[.12em] text-[25px] text-[#1b3150]'}
];
export const CustomersPage:React.FC<{onAdminClick?:()=>void;openLegal?:(d:any)=>void}>=({onAdminClick,openLegal})=>(
 <SitePageShell title="Müşterilerimiz" eyebrow="GÜVENLE BÜYÜYEN İŞ ORTAKLIKLARI" intro="Manisa'daki üretim deneyimimizi Türkiye'deki mağaza iş ortaklarımız ve uluslararası pazarlara taşıyoruz." activePath="/musterilerimiz" onAdminClick={onAdminClick} legal={{open:openLegal!}} showHero={false}>
  <main className="bg-[#fff] text-[#10294b]">
   <section className="border-b border-[#ece8df] bg-white">
    <div className="max-w-[1320px] mx-auto px-5 sm:px-10 py-9 sm:py-12">
     <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
      <div><div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#a47c36]"><Handshake size={15}/> Türkiye · Perakende iş ortakları</div><h2 className="mt-2 font-serif-luxury text-2xl sm:text-3xl">Türkiye’de birlikte çalıştığımız markalar</h2></div>
      <p className="max-w-md text-xs leading-6 text-slate-500">Üretim ve tedarik iş birliklerimizle mağaza raflarına ulaşan koleksiyonlar.</p>
     </div>
     <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {retailPartners.map((partner,i)=><div key={partner.name} className="group relative min-h-[112px] sm:min-h-[126px] overflow-hidden rounded-2xl border border-[#e9e5dd] bg-[#fbfaf8] flex flex-col items-center justify-center px-4 py-5 transition hover:-translate-y-1 hover:border-[#d8b56a] hover:shadow-[0_12px_28px_rgba(16,41,75,.08)]">
       <div className="absolute inset-0 opacity-[.035]" style={{backgroundImage:'linear-gradient(135deg,#10294b 1px,transparent 1px),linear-gradient(45deg,#b8862f 1px,transparent 1px)',backgroundSize:'18px 18px'}}/>
       <span className={`relative ${partner.style}`}>{partner.name}</span><span className="relative mt-2 text-[8px] uppercase tracking-[.2em] text-slate-400">İş ortaklığı</span>
      </div>)}
     </div>
     <p className="mt-3 text-[10px] leading-5 text-slate-400">Marka adları ilgili hak sahiplerine aittir. Görsel kimlikler yerine sade tipografik marka gösterimi kullanılmıştır.</p>
    </div>
   </section>
   <section className="bg-[#f8f7f4]">
    <div className="max-w-[1320px] mx-auto px-5 sm:px-10 py-9 sm:py-12">
     <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
      <div><div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#a47c36]"><Globe2 size={15}/> Uluslararası pazarlar</div><h2 className="mt-2 font-serif-luxury text-2xl sm:text-3xl">İhracat yaptığımız ülkeler</h2></div>
      <p className="max-w-md text-xs leading-6 text-slate-500">İrem Comfort koleksiyonlarının ulaştığı pazarlar.</p>
     </div>
     <div className="mt-6 mx-auto max-w-3xl grid grid-cols-1 gap-2.5">
      {exportMarkets.map(({flag,country})=><div key={country} className="group flex min-h-[64px] items-center gap-4 rounded-xl border border-[#e8e3d9] bg-white px-4 py-3 shadow-[0_2px_10px_rgba(16,41,75,.025)] transition hover:-translate-y-0.5 hover:border-[#d8b56a] hover:shadow-[0_8px_20px_rgba(16,41,75,.07)]"><span className="flex h-10 w-14 shrink-0 items-center justify-center rounded-lg bg-[#f8f7f4] text-[30px] leading-none shadow-inner" aria-hidden="true">{flag}</span><span className="flex-1 text-sm font-semibold">{country}</span><span className="text-[9px] font-extrabold uppercase tracking-[.2em] text-[#a47c36]">İhracat pazarı</span></div>)}
     </div>
    </div>
   </section>
   <section className="max-w-[1320px] mx-auto px-5 sm:px-10 py-9 sm:py-12">
    <div className="rounded-2xl bg-[#10294b] text-white px-6 py-7 sm:px-9 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-5"><div><div className="text-[9px] uppercase tracking-[.22em] text-[#d7b875] font-bold">Yeni iş ortaklıkları</div><h2 className="mt-2 font-serif-luxury text-2xl sm:text-3xl">Siz de İrem Comfort ailesine katılın.</h2><p className="mt-2 text-xs text-white/65">Koleksiyon ve toptan çalışma koşulları hakkında ekibimizle görüşün.</p></div><a href="/toptan-basvuru" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d7b875] px-5 py-3 text-xs font-extrabold text-[#10294b]">İş ortaklığı başvurusu <ArrowUpRight size={15}/></a></div>
   </section>
  </main>
 </SitePageShell>
);
