import React from 'react';
import {ArrowUpRight,MessageCircle,ChevronRight} from 'lucide-react';
import {Header} from '../components/layout/Header';
import {Footer} from '../components/layout/Footer';
import {FloatingAssistant} from '../components/ui/FloatingAssistant';
import {useAppImages} from '../context/ImageContext';
import {CONTACT_DATA} from '../constants/data';
interface SitePageShellProps{children:React.ReactNode;title:string;eyebrow?:string;intro?:string;activePath?:string;legal?:{open:(doc:any)=>void};onAdminClick?:()=>void;showHero?:boolean;}
export const SitePageShell:React.FC<SitePageShellProps>=({children,title,eyebrow,intro,activePath,legal,onAdminClick,showHero=true})=>{
 const{language}=useAppImages();
 const nav=[['/','Ana Sayfa'],['/koleksiyonlar','Koleksiyonlar'],['/urunler','Ürünler'],['/markamiz','Markamız'],['/musterilerimiz','Müşterilerimiz'],['/toptan-satis','Toptan Satış'],['/atolye','Atölye'],['/iletisim','İletişim']];
 const current=nav.find(x=>x[0]===activePath)?.[1]||'İrem Comfort';
 return <div className="ic-site-page min-h-screen bg-[#f7f6f2] text-[#10294b]" lang={language}>
  <Header scrollY={0} activeSection={activePath||''} onNavigate={path=>{window.history.pushState({},'',path);window.dispatchEvent(new PopStateEvent('popstate'));}}/>
  <main className="pt-[114px] sm:pt-[118px]">
   {showHero&&<section className="relative overflow-hidden bg-[#10294b] text-white"><div className="absolute -right-28 -top-44 w-[34rem] h-[34rem] rounded-full border border-white/[.08]"/><div className="absolute right-12 -bottom-64 w-[30rem] h-[30rem] rounded-full border border-[#d8b56a]/20"/><div className="relative max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-[4.5rem]"><div className="flex items-center gap-2 text-[10px] text-white/45 font-semibold"><a href="/" className="hover:text-white">Ana Sayfa</a><ChevronRight size={12}/><span className="text-[#e0c17a]">{current}</span></div>{eyebrow&&<div className="mt-7 text-[10px] sm:text-[11px] font-extrabold tracking-[.26em] uppercase text-[#d8b56a]">{eyebrow}</div>}<div className="grid lg:grid-cols-[1fr_.5fr] gap-8 items-end mt-3"><div><h1 className="max-w-5xl font-serif-luxury text-4xl sm:text-6xl lg:text-[4.6rem] leading-[1.02] tracking-tight">{title}</h1>{intro&&<p className="max-w-2xl mt-6 text-sm sm:text-base text-white/65 leading-7">{intro}</p>}</div><div className="flex flex-wrap lg:justify-end gap-3"><a href="/toptan-satis" className="inline-flex items-center gap-2 rounded-full bg-[#d8b56a] text-[#10294b] px-5 py-3 text-xs font-extrabold hover:bg-[#e7c982] transition">Toptan iş ortaklığı <ArrowUpRight size={15}/></a><a href={'https://wa.me/'+CONTACT_DATA.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-3 text-xs font-bold hover:bg-white/10 transition"><MessageCircle size={15}/> WhatsApp</a></div></div></div></section>}
   {children}
  </main>
  <Footer onNavigate={path=>{window.history.pushState({},'',path);window.dispatchEvent(new PopStateEvent('popstate'));}} onAdminClick={onAdminClick} onOpenLegalDoc={legal?.open}/>
  <FloatingAssistant/>
 </div>;
};