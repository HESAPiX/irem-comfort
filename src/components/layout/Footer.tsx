import React from 'react';
import {ArrowUp,Instagram,Mail,MapPin,MessageCircle,Phone,ArrowUpRight} from 'lucide-react';
import {LogoFull} from '../brand/LogoFull';
import {CONTACT_DATA,BRAND_NAME} from '../../constants/data';
import {LegalDocType} from '../ui/LegalModal';
import {useAppImages} from '../../context/ImageContext';

interface FooterProps{onNavigate:(path:string)=>void;onAdminClick?:()=>void;onOpenLegalDoc?:(docType:LegalDocType)=>void;}
const siteLinks=[['/koleksiyonlar','Koleksiyonlar'],['/urunler','Ürünler'],['/markamiz','Markamız'],['/musterilerimiz','Müşterilerimiz'],['/toptan-satis','Toptan Satış'],['/atolye','Atölye'],['/katalog','Katalog'],['/randevu','Randevu'],['/toptan-basvuru','B2B Başvuru'],['/toptan-sepet','Teklif Sepeti'],['/iletisim','İletişim']];
const markets=[['🇵🇱','Polonya'],['🇧🇬','Bulgaristan'],['🇷🇺','Rusya'],['🇲🇩','Moldova'],['🇪🇸','İspanya'],['🇷🇸','Sırbistan'],['🇽🇰','Kosova'],['🇬🇷','Yunanistan'],['🇮🇹','İtalya']];
export const Footer:React.FC<FooterProps>=({onNavigate,onAdminClick,onOpenLegalDoc})=>{
 const{contactData:liveContact}=useAppImages();const contact=liveContact||CONTACT_DATA;
 const go=(p:string)=>{if(window.location.pathname!==p)window.history.pushState({},'',p);onNavigate(p);window.scrollTo({top:0,behavior:'smooth'});};
 return <footer className="relative overflow-hidden bg-[#0b203b] text-white">
  <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-9 sm:pt-11 pb-5">
   <div className="grid lg:grid-cols-[1.05fr_.75fr_1.2fr] gap-7 lg:gap-12 pb-7 border-b border-white/10">
    <div className="max-w-md"><button onClick={()=>go('/')} aria-label="Ana sayfa"><LogoFull iconSize={38} color="#FFFFFF" showText/></button><p className="mt-3 max-w-sm text-[12px] leading-6 text-slate-300/80">Kadın comfort terlik ve sandalet koleksiyonlarını Manisa’daki üretim deneyimimizle mağazalara ulaştırıyoruz.</p><div className="mt-4 flex gap-2"><a aria-label="WhatsApp" href={`https://wa.me/${contact.whatsapp}`} className="w-9 h-9 rounded-full border border-white/10 bg-white/[.07] flex items-center justify-center hover:bg-[#c49a4a] hover:text-[#0b203b] transition"><MessageCircle size={15}/></a><a aria-label="Instagram" href={contact.instagramUrl||'#'} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/10 bg-white/[.07] flex items-center justify-center hover:bg-[#c49a4a] hover:text-[#0b203b] transition"><Instagram size={15}/></a><a aria-label="E-posta" href={`mailto:${contact.email}`} className="w-9 h-9 rounded-full border border-white/10 bg-white/[.07] flex items-center justify-center hover:bg-[#c49a4a] hover:text-[#0b203b] transition"><Mail size={15}/></a></div></div>
    <div><div className="text-[9px] uppercase tracking-[.22em] text-[#d6b46a] font-extrabold">Site</div><div className="mt-3 grid gap-2">{siteLinks.map(([p,l])=><button key={p} onClick={()=>go(p)} className="group flex items-center justify-between max-w-[180px] text-left text-[12px] text-slate-300/85 hover:text-white transition">{l}<ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-[#d6b46a]"/></button>)}</div></div>
    <div className="grid sm:grid-cols-2 gap-6">
     <div><div className="text-[9px] uppercase tracking-[.22em] text-[#d6b46a] font-extrabold">İhracat pazarları</div><div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">{markets.map(([flag,country])=><div key={country} className="flex items-center gap-2 text-[11px] text-slate-300/85"><span>{flag}</span><span>{country}</span></div>)}</div><button onClick={()=>go('/musterilerimiz')} className="mt-3 text-[10px] font-bold text-[#d6b46a] hover:text-white">Tüm iş ortaklarımız <ArrowUpRight size={12} className="inline"/></button></div>
     <div><div className="text-[9px] uppercase tracking-[.22em] text-[#d6b46a] font-extrabold">Manisa · İletişim</div><div className="mt-3 space-y-3 text-[11px] leading-5 text-slate-300/85"><div className="flex gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-[#d6b46a]"/><span>{contact.address}</span></div><a href={`tel:${contact.phone}`} className="flex gap-2 hover:text-white"><Phone size={14} className="text-[#d6b46a]"/>{contact.phoneDisplay}</a><a href={`mailto:${contact.email}`} className="flex gap-2 hover:text-white"><Mail size={14} className="text-[#d6b46a]"/>{contact.email}</a></div></div>
    </div>
   </div>
   <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-400"><div>© {new Date().getFullYear()} {BRAND_NAME}. Tüm hakları saklıdır.</div><div className="flex flex-wrap items-center justify-center gap-4"><button onClick={()=>onOpenLegalDoc?.('privacy')} className="hover:text-white">Gizlilik</button><button onClick={()=>onOpenLegalDoc?.('kvkk')} className="hover:text-white">KVKK</button><button onClick={()=>onOpenLegalDoc?.('cookies')} className="hover:text-white">Çerezler</button>{onAdminClick&&<button onClick={onAdminClick} className="hover:text-white">Yönetici</button>}<button aria-label="Sayfa başına dön" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c49a4a] hover:text-[#0b203b] flex items-center justify-center transition"><ArrowUp size={15}/></button></div></div>
  </div>
 </footer>;
};
