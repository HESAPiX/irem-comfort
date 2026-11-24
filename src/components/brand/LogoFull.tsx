import React from 'react';
import { LogoIC } from './LogoIC';

interface LogoFullProps {
  className?: string;
  iconSize?: number;
  color?: string;
  iremColor?: string;
  comfortColor?: string;
  showText?: boolean;
}

/** Uses the exact official İrem Comfort SVG artwork supplied for the brand. */
export const LogoFull: React.FC<LogoFullProps> = ({
  className = '',
  iconSize = 40,
  showText = true
}) => {
  if (!showText) {
    return <LogoIC size={iconSize} className={className} />;
  }

  return (
    <img
      src="/brand/irem-comfort-logo.svg"
      alt="İrem Comfort"
      className={`inline-block h-auto max-w-full object-contain select-none ${className}`}
      style={{ height: iconSize, width: 'auto' }}
      draggable={false}
    />
  );
};
