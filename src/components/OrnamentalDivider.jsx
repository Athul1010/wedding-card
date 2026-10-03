import React from 'react';

export const OrnamentalDivider = ({ className = '', title = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      {/* Left gradient line */}
      <div className="h-[1px] w-16 sm:w-28 md:w-36 bg-gradient-to-r from-transparent via-gold-400 to-gold-600 opacity-60" />
      
      {/* Center Motif */}
      <div className="flex items-center gap-1.5 text-gold-500">
        <span className="text-xs opacity-75">✦</span>
        <svg
          className="w-5 h-5 text-gold-500 transform hover:scale-110 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Stylized Lotus / Kalasam Motif */}
          <path
            d="M12 2C12 2 13.5 7 15 9C16.5 11 19 12 19 12C19 12 16.5 13 15 15C13.5 17 12 22 12 22C12 22 10.5 17 9 15C7.5 13 5 12 5 12C5 12 7.5 11 9 9C10.5 7 12 2 12 2Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
        <span className="text-xs opacity-75">✦</span>
      </div>

      {/* Right gradient line */}
      <div className="h-[1px] w-16 sm:w-28 md:w-36 bg-gradient-to-l from-transparent via-gold-400 to-gold-600 opacity-60" />
      
      {title && (
        <span className="sr-only">{title}</span>
      )}
    </div>
  );
};

export const KasavuBorder = ({ className = '' }) => {
  return (
    <div className={`w-full h-1.5 flex items-center justify-center overflow-hidden ${className}`}>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
    </div>
  );
};

export const NilavilakkuIcon = ({ className = 'w-6 h-6' }) => {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor">
      {/* Sacred Kerala Nilavilakku (Traditional Lamp) Vector */}
      <path d="M24 4C24 4 21 8 21 11C21 12.6569 22.3431 14 24 14C25.6569 14 27 12.6569 27 11C27 8 24 4 24 4Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
      <ellipse cx="24" cy="16" rx="8" ry="3" fill="#D97706" fillOpacity="0.3" stroke="#B45309" strokeWidth="1.5" />
      <path d="M23 16V34H25V16" stroke="#B45309" strokeWidth="2" />
      <ellipse cx="24" cy="34" rx="12" ry="4" fill="#D97706" fillOpacity="0.2" stroke="#B45309" strokeWidth="1.5" />
      <path d="M22 34V42H26V34" stroke="#B45309" strokeWidth="2" />
      <path d="M16 44C16 42 20 42 24 42C28 42 32 42 32 44H16Z" fill="#B45309" stroke="#92400E" strokeWidth="1.5" />
    </svg>
  );
};

export const FloralCorner = ({ className = '', position = 'top-left' }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position] || '';

  return (
    <div className={`pointer-events-none select-none ${rotation} ${className}`}>
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className="text-gold-400 opacity-40">
        <path d="M5 5 H 45 C 45 25 25 45 5 45 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 5 V 60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        <path d="M5 5 H 60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="15" cy="15" r="4" fill="currentColor" fillOpacity="0.3" />
        <circle cx="5" cy="5" r="3" fill="currentColor" />
      </svg>
    </div>
  );
};
