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
     <div className="mt-7 mx-auto max-w-5xl grid grid-cols-1 gap-4">
      {exportMarkets.map(({flag,country},index)=>{
       const code=['pl','bg','ru','md','es','rs','xk','gr','it'][index];
       return <article key={country} className="group relative isolate min-h-[118px] sm:min-h-[138px] overflow-hidden rounded-2xl border border-[#e7e0d4] bg-white shadow-[0_5px_20px_rgba(16,41,75,.045)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(16,41,75,.12)]">
        <img src={`https://flagcdn.com/w1280/${code}.png`} alt={` ${country} bayrağı`} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/85 to-white/35"/>
        <div className="flex min-h-[118px] sm:min-h-[138px] items-center justify-between gap-4 px-5 sm:px-8 py-5">
         <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-4xl sm:text-5xl drop-shadow-sm" aria-hidden="true">{flag}</span>
          <div><div className="text-[9px] font-extrabold uppercase tracking-[.24em] text-[#a47c36]">İhracat pazarımız</div><h3 className="mt-1 font-serif-luxury text-2xl sm:text-3xl text-[#10294b]">{country}</h3></div>
         </div>
         <span className="hidden sm:inline-flex rounded-full border border-[#10294b]/15 bg-white/65 px-4 py-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#10294b] backdrop-blur-sm">İrem Comfort</span>
        </div>
       </article>;
      })}
     </div>
    </div>
   </section>
   <section className="max-w-[1320px] mx-auto px-5 sm:px-10 py-9 sm:py-12">
    <div className="rounded-2xl bg-[#10294b] text-white px-6 py-7 sm:px-9 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-5"><div><div className="text-[9px] uppercase tracking-[.22em] text-[#d7b875] font-bold">Yeni iş ortaklıkları</div><h2 className="mt-2 font-serif-luxury text-2xl sm:text-3xl">Siz de İrem Comfort ailesine katılın.</h2><p className="mt-2 text-xs text-white/65">Koleksiyon ve toptan çalışma koşulları hakkında ekibimizle görüşün.</p></div><a href="/toptan-basvuru" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d7b875] px-5 py-3 text-xs font-extrabold text-[#10294b]">İş ortaklığı başvurusu <ArrowUpRight size={15}/></a></div>
   </section>
  </main>
 </SitePageShell>
);
