import React,{useState} from 'react';
import {motion,AnimatePresence} from 'motion/react';
import {LogoFull} from '../brand/LogoFull';
import {Menu,X,PhoneCall,ChevronRight,Globe,ArrowUpRight} from 'lucide-react';
import {CONTACT_DATA} from '../../constants/data';
import {AnnouncementTicker} from './AnnouncementTicker';
import {FairInvitationStrip} from './FairInvitationStrip';
import {useAppImages} from '../../context/ImageContext';
import {Language} from '../../types';

interface HeaderProps{scrollY:number;activeSection:string;onNavigate:(path:string)=>void;onOpenFairModal?:()=>void;}
const links=[['/','Ana Sayfa'],['/koleksiyonlar','Koleksiyonlar'],['/urunler','Ürünler'],['/markamiz','Markamız'],['/toptan-satis','Toptan Satış'],['/atolye','Atölye'],['/katalog','Katalog'],['/randevu','Randevu'],['/toptan-basvuru','B2B Başvuru'],['/toptan-sepet','Teklif Sepeti'],['/iletisim','İletişim']] as const;
const languageNames:Record<Language,string>={tr:'Türkçe',en:'English',ar:'العربية'};
export const Header:React.FC<HeaderProps>=({activeSection,onNavigate,onOpenFairModal})=>{
 const{language,setLanguage}=useAppImages();const[open,setOpen]=useState(false);
 const cycleLanguage=()=>{const next:Record<Language,Language>={tr:'en',en:'ar',ar:'tr'};setLanguage(next[language]);};
 const go=(path:string)=>{setOpen(false);if(path!==window.location.pathname)window.history.pushState({},'',path);onNavigate(path);window.scrollTo({top:0,behavior:'smooth'});};
 return <>
 <motion.header initial={{y:-70,opacity:0}} animate={{y:0,opacity:1}} className="fixed top-0 left-0 right-0 z-40">
  <div className="bg-white/95 backdrop-blur-xl border-b border-[#102f59]/10 shadow-[0_5px_24px_rgba(16,47,89,.07)]">
   <div className="max-w-[1440px] mx-auto px-4 sm:px-7 h-[68px] flex items-center justify-between gap-4">
    <button onClick={()=>go('/')} className="shrink-0" aria-label="İrem Comfort ana sayfa"><LogoFull iconSize={40} color="#102f59" showText/></button>
    <div className="flex items-center gap-2 sm:gap-3">
     <button onClick={cycleLanguage} data-no-auto-translate="true" translate="no" aria-label="Dil seçimi" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold text-[#102f59] hover:border-[#b8862f]"><Globe className="w-3.5 h-3.5"/><span translate="no">{language.toUpperCase()}</span></button>
     <button onClick={()=>go('/toptan-satis')} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#102f59] text-white px-4 py-2.5 text-[11px] font-extrabold shadow-sm hover:bg-[#183e6d]">Toptan Teklif <ArrowUpRight className="w-4 h-4"/></button>
     <button onClick={()=>setOpen(!open)} className="lg:hidden p-2.5 rounded-xl bg-[#102f59]/5 text-[#102f59]" aria-label="Menüyü aç/kapat">{open?<X/>:<Menu/>}</button>
    </div>
   </div>
   <nav className="hidden lg:flex max-w-[1440px] mx-auto px-4 xl:px-7 h-[46px] items-center justify-center gap-0.5 border-t border-slate-100">
    {links.map(([path,label])=><button key={path} onClick={()=>go(path)} className={`whitespace-nowrap px-2.5 xl:px-3 py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-[.055em] rounded-md transition-colors ${activeSection===path?'text-[#102f59] bg-[#102f59]/[.07]':'text-slate-600 hover:text-[#102f59] hover:bg-slate-50'}`}>{label}</button>)}
   </nav>
  </div>
  <AnnouncementTicker onContactClick={()=>go('/iletisim')}/>
  {onOpenFairModal&&<FairInvitationStrip onOpenFairModal={onOpenFairModal}/>}
 </motion.header>
 <AnimatePresence>{open&&<motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="fixed top-[68px] inset-x-0 z-30 bg-white border-b border-slate-200 shadow-xl lg:hidden max-h-[78vh] overflow-y-auto"><div className="p-4 grid grid-cols-2 gap-2">{links.map(([path,label])=><button key={path} onClick={()=>go(path)} className={`flex items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-bold ${activeSection===path?'bg-[#102f59] text-white':'bg-slate-50 text-[#102f59]'}`}>{label}<ChevronRight className="w-4 h-4"/></button>)}</div><div className="px-4 pb-4 grid grid-cols-2 gap-2"><button onClick={cycleLanguage} className="rounded-xl px-3 py-3 bg-[#f7f5f1] text-left text-sm font-bold text-[#102f59]">{languageNames[language]}</button><a href={`tel:${CONTACT_DATA.phone}`} className="rounded-xl px-3 py-3 bg-[#102f59] text-white text-sm font-bold flex items-center gap-2"><PhoneCall className="w-4 h-4"/>{CONTACT_DATA.phoneDisplay}</a></div></motion.div>}</AnimatePresence>
 </>;
};