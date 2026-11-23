import React, { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { CollectionItem } from '../../types';
import { PREMIUM_PRODUCT_IMAGE_FALLBACKS } from '../../constants/data';

type Props = {
  item: CollectionItem;
  baseImage?: string;
  secondaryImage?: string;
  compact?: boolean;
  onOpen?: () => void;
};

export const PremiumProductShowcase: React.FC<Props> = ({ item, baseImage, secondaryImage, compact = false, onOpen }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const activeColor = item.colors?.[colorIndex];
  const photos = useMemo(() => {
    const colorPhotos = (activeColor?.images || []).filter(Boolean);
    const unique = Array.from(new Set([
      ...(activeColor?.image ? [activeColor.image] : []),
      ...colorPhotos,
      ...(baseImage || item.image ? [baseImage || item.image] : []),
      ...(secondaryImage || item.secondaryImage ? [secondaryImage || item.secondaryImage] : []),
      ...(!baseImage && !item.image && PREMIUM_PRODUCT_IMAGE_FALLBACKS[item.id] ? [PREMIUM_PRODUCT_IMAGE_FALLBACKS[item.id]] : [])
    ]));
    return unique;
  }, [activeColor, baseImage, item, secondaryImage]);
  const currentPhoto = photos[Math.min(photoIndex, Math.max(photos.length - 1, 0))] || '';

  useEffect(() => {
    setPhotoIndex(0);
  }, [colorIndex]);

  useEffect(() => {
    if (!imageRef.current) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    gsap.killTweensOf(imageRef.current);
    if (reduce) return;
    gsap.fromTo(imageRef.current, { autoAlpha: 0.55, y: 10, scale: 0.985 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: 'power2.out' });
  }, [currentPhoto]);

  const stepPhoto = (direction: number) => {
    setPhotoIndex((current) => (current + direction + photos.length) % photos.length);
  };

  return (
    <div className={compact ? 'group min-w-0' : 'grid lg:grid-cols-[1.05fr_.95fr] gap-8'}>
      <div className="min-w-0">
        <div className={compact ? 'relative overflow-hidden rounded-[1.5rem] bg-[#f7f5f1] aspect-[4/3]' : 'relative overflow-hidden rounded-[2rem] bg-[#f7f5f1] border border-slate-200'}>
          {currentPhoto ? <img ref={imageRef} src={currentPhoto} alt={`${item.name}${activeColor?.name ? ` - ${activeColor.name}` : ''}`} className={compact ? 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]' : 'w-full aspect-square object-cover'} /> : <div className="aspect-square grid place-items-center text-sm text-slate-400">Ürün fotoğrafı henüz eklenmemiş</div>}
          {photos.length > 1 && <div className={compact ? "mt-2 flex gap-1.5 overflow-x-auto pb-1" : "mt-3 flex gap-2 overflow-x-auto pb-1"}>{photos.slice(0, compact ? 4 : photos.length).map((src, index) => <button key={src + index} type="button" onClick={() => setPhotoIndex(index)} aria-label={`${index + 1}. fotoğrafı göster`} aria-pressed={photoIndex === index} className={`${compact ? "w-12 h-12 rounded-lg" : "w-20 h-20 rounded-xl"} shrink-0 overflow-hidden border-2 ${photoIndex === index ? "border-[#b58b42]" : "border-slate-200"}`}><img src={src} alt="" className="w-full h-full object-cover"/></button>)}</div>}
      {item.colors?.length > 0 && <div className={compact ? "mt-3 flex flex-wrap items-center gap-2" : "mt-8"}><span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{compact ? "Renk" : "Renk seçenekleri"}</span><div className="mt-2 flex flex-wrap gap-2">{item.colors.map((color, index) => <button key={color.name + index} type="button" onClick={() => setColorIndex(index)} aria-pressed={colorIndex === index} title={color.name} className={`h-7 w-7 rounded-full border-2 transition ${index === colorIndex ? "border-[#102f59] ring-2 ring-[#b58b42]/40 ring-offset-1" : "border-slate-200"}`} style={{ backgroundColor: color.hex }}/>)}</div>{!compact && <div className="mt-2 text-sm font-semibold text-[#102f59]">{activeColor?.name}</div>}</div>}

      {!compact && <div className="flex flex-col justify-center rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10">
        <div className="text-[11px] uppercase tracking-[.2em] text-[#8b6a2b] font-bold">{item.category}</div>
        <h2 className="mt-3 text-3xl font-serif-luxury font-bold text-[#102f59]">{item.name}</h2>
        <p className="mt-3 text-sm text-slate-500">{item.subtitle}</p>
        {item.colors?.length > 0 && <div className="mt-8"><div className="text-xs font-bold uppercase tracking-wider text-slate-500">Renk seçenekleri</div><div className="mt-3 flex flex-wrap gap-3">{item.colors.map((color, index) => <button key={color.name + index} type="button" onClick={() => setColorIndex(index)} aria-pressed={colorIndex === index} title={color.name} className={`h-9 w-9 rounded-full border-2 transition ${index === colorIndex ? 'border-[#102f59] ring-2 ring-[#b58b42]/40 ring-offset-2' : 'border-slate-200'}`} style={{ backgroundColor: color.hex }}/>)}</div><div className="mt-2 text-sm font-semibold text-[#102f59]">{activeColor?.name}</div></div>}
        <p className="mt-6 text-sm leading-relaxed text-slate-600">{item.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">{item.features.slice(0, 5).map(feature => <span key={feature} className="rounded-full bg-[#f7f5f1] px-3 py-2 text-xs text-slate-700">{feature}</span>)}</div>
        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5"><span className="text-xs font-bold text-slate-500">{item.dimensions}</span><span className="inline-flex items-center gap-1 text-xs font-semibold text-[#8b6a2b]"><Images className="w-4 h-4"/>{photos.length} fotoğraf</span></div>
        <button type="button" onClick={onOpen} className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#102f59] px-6 py-3 text-sm font-bold text-white hover:bg-[#0b2445]">Ürün detayını incele <ArrowUpRight className="w-4 h-4"/></button>
      </div>}
    </div>
  );
};
