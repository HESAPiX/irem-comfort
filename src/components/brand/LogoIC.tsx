import React from 'react';
interface LogoICProps{className?:string;size?:number|string;color?:string;}
/** İrem Comfort circular IC brand mark, drawn as a crisp scalable vector. */
export const LogoIC:React.FC<LogoICProps>=({className='',size=48,color='#0A2D6F'})=><svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`inline-block shrink-0 transition-transform duration-300 ${className}`} role="img" aria-label="İrem Comfort IC amblemi">
 <path d="M168 68 A76 76 0 1 0 138 34" stroke={color} strokeWidth="13" strokeLinecap="butt" fill="none"/>
 <circle cx="69" cy="68" r="10" fill={color}/>
 <path d="M61 88H77V151H61V88Z" fill={color}/>
 <path d="M133 96 A29 29 0 1 0 133 132" stroke={color} strokeWidth="17" strokeLinecap="butt" fill="none"/>
</svg>;
