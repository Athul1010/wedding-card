import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { OrnamentalDivider, NilavilakkuIcon } from '../components/OrnamentalDivider';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

export const ClosingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-stone-950 text-stone-200 py-24 sm:py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/90 to-stone-950 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-wine-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Sacred Lamp & Auspicious Seal */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <NilavilakkuIcon className="w-8 h-8 text-gold-400" />
        </div>

        <p className="font-script text-3xl sm:text-4xl text-gold-400 mb-2">
          With Love &amp; Gratitude
        </p>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
          Sreerag &amp; Aswathi
        </h2>

        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <span className="text-gold-400 font-serif text-sm tracking-widest uppercase">
            08 • 11 • 2026
          </span>
          <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent via-gold-500 to-transparent" />
        </div>

        {/* Featured Closing Photograph in Regal Arched Frame */}
        <div className="my-10 flex justify-center">
          <div className="relative group w-full max-w-sm sm:max-w-md">
            <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-r from-gold-500/20 via-wine-500/30 to-gold-500/20 blur-md pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/60 bg-stone-900">
              <img
                src="/images/WhatsApp Image 2026-10-03 at 1.55.11 PM - Copy.jpeg"
                alt="Sreerag and Aswathi on the auspicious stage"
                className="w-full h-[420px] sm:h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />
              <div className="absolute bottom-4 inset-x-4 text-center">
                <p className="font-serif italic text-gold-200 text-sm drop-shadow-md">
                  "May the light of our sacred lamp guide us through eternity."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Warm Message */}
        <p className="font-serif text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed italic mb-8">
          "We eagerly await your presence to grace our celebration and bestow your loving blessings upon our sacred union."
        </p>

        {/* Venue Reminder */}
        <div className="inline-block p-4 rounded-2xl bg-stone-900/90 border border-gold-500/30 text-stone-300 text-xs sm:text-sm font-sans mb-12 shadow-lg">
          <p className="font-serif font-semibold text-gold-300 text-base mb-1">
            {WEDDING_DETAILS.venueName}
          </p>
          <p className="text-stone-400">
            {WEDDING_DETAILS.venueLocation} • {WEDDING_DETAILS.muhurtham}
          </p>
        </div>

        {/* Back to Top */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col items-center justify-center gap-3">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-stone-900 hover:bg-stone-800 text-gold-400 hover:text-gold-300 border border-gold-500/30 transition-all duration-300 shadow-md group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <span className="text-[11px] uppercase tracking-widest text-stone-500 font-sans">
            Sreerag &amp; Aswathi • 08 November 2026
          </span>
        </div>
      </div>
    </footer>
  );
};
