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

/**
 * Displays the complete supplied horizontal logo as one SVG image.
 * Set an explicit aspect-ratio-based width so global image rules or flex
 * sizing cannot squeeze/crop the "irem" wordmark between the symbol and comfort.
 */
export const LogoFull: React.FC<LogoFullProps> = ({
  className = '',
  iconSize = 40,
  showText = true
}) => {
  if (!showText) {
    return <LogoIC size={iconSize} className={className} />;
  }

  const height = iconSize;
  const width = height * (1391 / 261);

  return (
    <img
      src="/brand/irem-comfort-logo.svg"
      alt="İrem Comfort"
      width={Math.round(width)}
      height={height}
      className={`inline-block shrink-0 object-contain select-none ${className}`}
      style={{ display: 'block', height, width, maxWidth: 'none', flex: '0 0 auto' }}
      draggable={false}
    />
  );
};
