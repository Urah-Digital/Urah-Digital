import React from 'react';

interface LogoProps {
  variant?: 'full' | 'emblem' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

/**
 * URAH DIGITAL Logo Component
 * Uses the user's authentic geometric emblem logo (trimmed of excess padding for maximum clarity).
 * Renders with vivid contrast against dark backgrounds with high-resolution vector typography.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'sm',
  className = '',
  showText = true,
}) => {
  // Height classes that maintain bold, crisp proportions across mobile and desktop
  const emblemHeightClass =
    size === 'sm'
      ? 'h-9 sm:h-10'
      : size === 'md'
      ? 'h-11 sm:h-12'
      : size === 'lg'
      ? 'h-14 sm:h-16'
      : 'h-18 sm:h-20';

  const textScale =
    size === 'sm'
      ? { title: 'text-base sm:text-lg', sub: 'text-[9px] sm:text-[10px]' }
      : size === 'md'
      ? { title: 'text-lg sm:text-xl', sub: 'text-[10px] sm:text-[11px]' }
      : size === 'lg'
      ? { title: 'text-2xl sm:text-3xl', sub: 'text-xs sm:text-sm' }
      : { title: 'text-3xl sm:text-4xl', sub: 'text-sm sm:text-base' };

  // Pure emblem mark
  if (variant === 'emblem' || !showText) {
    return (
      <img
        src="/logoV.svg"
        alt="URAH DIGITAL Emblem"
        className={`w-auto object-contain select-none drop-shadow-[0_2px_12px_rgba(198,155,60,0.35)] ${emblemHeightClass} ${className}`}
        loading="eager"
      />
    );
  }

  // Pure wordmark
  if (variant === 'wordmark') {
    return (
      <div className={`flex flex-col select-none ${className}`}>
        <div className={`font-bold tracking-[0.15em] text-[#F8FAFC] font-sans uppercase leading-none ${textScale.title}`}>
          <span>URAH </span>
          <span className="text-[#C69B3C]">DIGITAL</span>
        </div>
        <span className={`tracking-[0.24em] text-[#94A3B8] uppercase font-mono mt-1 leading-none ${textScale.sub}`}>
          Web Studio
        </span>
      </div>
    );
  }

  // Full lockup: user's geometric emblem + razor-sharp typography
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      <img
        src="/logoV.svg"
        alt="URAH DIGITAL Emblem"
        className={`w-auto object-contain select-none transition-transform duration-200 drop-shadow-[0_2px_12px_rgba(198,155,60,0.35)] ${emblemHeightClass}`}
        loading="eager"
      />
      <div className="flex flex-col text-left">
        <div className={`font-bold tracking-[0.14em] text-[#F8FAFC] uppercase leading-none font-sans ${textScale.title}`}>
          <span>URAH </span>
          <span className="text-[#C69B3C]">DIGITAL</span>
        </div>
        <span className={`tracking-[0.22em] text-[#94A3B8] uppercase font-mono mt-1 leading-none ${textScale.sub}`}>
          Web Studio
        </span>
      </div>
    </div>
  );
};

export default Logo;
