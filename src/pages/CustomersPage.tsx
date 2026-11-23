import React from 'react';
import {Globe2,ArrowUpRight,Building2,Handshake,MapPin} from 'lucide-react';
import {SitePageShell} from './SitePageShell';

const exportMarkets = [
  {flag:'🇵🇱',country:'Polonya'},{flag:'🇧🇬',country:'Bulgaristan'},{flag:'🇷🇺',country:'Rusya'},
  {flag:'🇲🇩',country:'Moldova'},{flag:'🇪🇸',country:'İspanya'},{flag:'🇷🇸',country:'Sırbistan'},
  {flag:'🇽🇰',country:'Kosova'},{flag:'🇬🇷',country:'Yunanistan'},{flag:'🇮🇹',country:'İtalya'}
];
const retailNames = ['Hotiç','Çetinkaya','Bambi','TANCA'];
export const CustomersPage:React.FC<{onAdminClick?:()=>void;openLegal?:(d:any)=>void}>=({onAdminClick,openLegal})=>(
 <SitePageShell title="Müşterilerimiz" eyebrow="GÜVENLE BÜYÜYEN İŞ ORTAKLIKLARI" intro="İrem Comfort olarak Manisa'daki üretim deneyimimizi Türkiye'deki mağaza iş ortaklarımız ve uluslararası pazarlarla buluşturuyoruz." activePath="/musterilerimiz" onAdminClick={onAdminClick} legal={{open:openLegal!}}>
  <main className="bg-[#f7f6f2] text-[#10294b]">
   <section className="relative overflow-hidden bg-[#10294b] text-white">
    <div className="absolute -right-24 -top-32 h-[32rem] w-[32rem] rounded-full border border-white/10"/>
    <div className="relative max-w-[1320px] mx-auto px-5 sm:px-10 py-16 sm:py-24">
     <div className="flex items-center gap-2 text-[#d8b56a] text-xs font-bold tracking-[.24em] uppercase"><Handshake size={16}/> Uzun soluklu iş birlikleri</div>
     <h2 className="mt-5 max-w-4xl font-serif-luxury text-4xl sm:text-6xl leading-tight">Üretimden mağazaya,<br/><span className="italic text-[#d8b56a]">güvene dayalı</span> ortaklıklar.</h2>
     <p className="mt-6 max-w-2xl text-sm sm:text-base leading-7 text-white/65">Türkiye içindeki satış ağımız ve ihracat bağlantılarımızla koleksiyonlarımızı farklı pazarlara taşıyoruz.</p>
    </div>
   </section>
   <section className="max-w-[1320px] mx-auto px-5 sm:px-10 py-16 sm:py-20">
    <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-2xl bg-[#10294b] text-[#d8b56a] grid place-items-center"><Building2/></div><div><p className="text-[10px] tracking-[.22em] uppercase font-extrabold text-[#a47c36]">Türkiye</p><h2 className="font-serif-luxury text-3xl sm:text-4xl">Türkiye'deki mağaza iş ortaklarımız</h2></div></div>
    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">İş ortaklığı ve satış kanallarımız kapsamında birlikte çalıştığımız zincir mağaza markaları.</p>
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
     {retailNames.map((name,i)=><div key={name} className="min-h-32 rounded-2xl border border-[#e5e0d7] bg-white shadow-[0_8px_28px_rgba(16,41,75,.04)] flex flex-col items-center justify-center p-6"><span className={`font-black tracking-tight text-2xl sm:text-3xl ${i===3?'text-[#10294b]':'text-slate-800'}`}>{name}</span><span className="mt-3 text-[9px] tracking-[.18em] uppercase text-slate-400">Mağaza iş ortağı</span></div>)}
    </div>
    <p className="mt-4 text-[11px] text-slate-400">Marka adları ilgili sahiplerinin tescilli markalarıdır. Bu alanda metin tabanlı marka gösterimi kullanılmıştır.</p>
   </section>
   <section className="bg-white border-y border-[#e9e4da]">
    <div className="max-w-[1320px] mx-auto px-5 sm:px-10 py-16 sm:py-20">
     <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-2xl bg-[#f4eee2] text-[#a47c36] grid place-items-center"><Globe2/></div><div><p className="text-[10px] tracking-[.22em] uppercase font-extrabold text-[#a47c36]">Uluslararası pazarlar</p><h2 className="font-serif-luxury text-3xl sm:text-4xl">İhracat yaptığımız ülkeler</h2></div></div>
     <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">İrem Comfort koleksiyonlarının ulaştığı ülkeler.</p>
     <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {exportMarkets.map(({flag,country})=><div key={country} className="flex items-center gap-4 rounded-2xl border border-[#e9e4da] bg-[#faf9f6] p-5 hover:border-[#d8b56a] hover:shadow-md transition"><span className="text-3xl" aria-hidden="true">{flag}</span><span className="font-semibold text-sm">{country}</span></div>)}
     </div>
    </div>
   </section>
   <section className="max-w-[1320px] mx-auto px-5 sm:px-10 py-16">
    <div className="rounded-[28px] bg-[#10294b] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6"><div><div className="text-[10px] uppercase tracking-[.24em] text-[#d7b875] font-bold">Yeni iş ortaklıkları</div><h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl">Siz de İrem Comfort ailesine katılın.</h2><p className="mt-3 text-sm text-white/65">Koleksiyon ve toptan çalışma koşulları hakkında ekibimizle görüşün.</p></div><a href="/toptan-basvuru" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d7b875] px-6 py-3.5 text-sm font-extrabold text-[#10294b]">İş ortaklığı başvurusu <ArrowUpRight size={16}/></a></div>
   </section>
  </main>
 </SitePageShell>
);
