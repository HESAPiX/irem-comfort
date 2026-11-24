import React from 'react';

interface LogoICProps {
  className?: string;
  size?: number | string;
  color?: string;
}

/** Exact official IC symbol SVG supplied for İrem Comfort. */
export const LogoIC: React.FC<LogoICProps> = ({ className = '', size = 48 }) => (
  <img
    src="/brand/irem-comfort-ic-sembol.svg"
    alt="İrem Comfort amblemi"
    width={size}
    height={size}
    className={`inline-block shrink-0 object-contain select-none ${className}`}
    draggable={false}
  />
);
