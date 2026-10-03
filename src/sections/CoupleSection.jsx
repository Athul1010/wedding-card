import React from 'react';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleSection = () => {
  return (
    <section id="couple" className="py-20 sm:py-28 bg-[#F7F2EA] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-script text-3xl sm:text-4xl text-gold-600 block mb-1">
            Two Hearts in Harmony
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-wine-900 font-semibold tracking-tight">
            Meet the Couple
          </h2>
          <OrnamentalDivider className="my-4" />
          <p className="font-sans text-stone-600 text-sm sm:text-base">
            United by love, cherished by family, and ready to walk together through every season of life.
          </p>
        </div>

        {/* Editorial Layout: Sreerag, Centerpiece B&W, Aswathi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Groom Editorial Card */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-gold-400/40 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gold-300 bg-stone-900 aspect-[3/4]">
                <img
                  src="/images/WhatsApp Image 2026-10-03 at 1.54.54 PM (1).jpeg"
                  alt="Sreerag - The Groom"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                
                <div className="absolute bottom-4 inset-x-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-sans font-medium block">
                    The Groom
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-gold-100 font-semibold mt-0.5">
                    Sreerag
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-6 max-w-xs text-center">
              <p className="font-serif text-base text-stone-700 italic">
                "In your smile, I see something more beautiful than the stars."
              </p>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-sans uppercase tracking-widest text-gold-600">
                <span>Gentle</span>
                <span>•</span>
                <span>Devoted</span>
                <span>•</span>
                <span>True</span>
              </div>
            </div>
          </div>

          {/* Centerpiece: The High-Key B&W Editorial "Hand in Hand, Heart to Heart" */}
          <div className="lg:col-span-4 flex flex-col items-center my-4 lg:my-0">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              {/* Luxury Double Border */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-b from-gold-300/30 via-wine-200/20 to-gold-400/30 blur-sm pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-wine-800/80 bg-stone-900 aspect-[2/3]">
                <img
                  src="/images/WhatsApp Image 2026-10-03 at 1.54.52 PM.jpeg"
                  alt="Hand in hand, heart to heart - Sreerag and Aswathi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Floating Heart Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur-md border border-gold-400/60 flex items-center justify-center shadow-lg">
                  <Heart className="w-4 h-4 text-gold-400 fill-gold-400/30" />
                </div>
              </div>
            </div>

            <div className="mt-5 text-center px-4">
              <span className="font-script text-2xl sm:text-3xl text-wine-800 block">
                Hand in Hand, Heart to Heart
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans mt-1">
                Aswathi &amp; Sreerag
              </p>
            </div>
          </div>

          {/* Bride Editorial Card */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-gold-400/40 transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gold-300 bg-stone-900 aspect-[3/4]">
                <img
                  src="/images/WhatsApp Image 2026-10-03 at 1.54.56 PM (1).jpeg"
                  alt="Aswathi - The Bride"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                
                <div className="absolute bottom-4 inset-x-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-sans font-medium block">
                    The Bride
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-gold-100 font-semibold mt-0.5">
                    Aswathi
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-6 max-w-xs text-center">
              <p className="font-serif text-base text-stone-700 italic">
                "Together is a wonderful place to be, today and all our tomorrows."
              </p>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-sans uppercase tracking-widest text-gold-600">
                <span>Radiant</span>
                <span>•</span>
                <span>Graceful</span>
                <span>•</span>
                <span>Beloved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
