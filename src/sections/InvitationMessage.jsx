import React, { useState } from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InvitationMessage = () => {
  const [blessingCount, setBlessingCount] = useState(() => {
    const saved = localStorage.getItem('sreerag_aswathi_blessings');
    return saved ? parseInt(saved, 10) : 108;
  });
  const [hasShowered, setHasShowered] = useState(false);

  const handleShowerBlessings = () => {
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#7C1F3F', '#F4D6DF', '#FAF7F0', '#E5A8BA'],
      shapes: ['circle', 'square'],
      scalar: 1.2,
    });

    const newCount = blessingCount + 1;
    setBlessingCount(newCount);
    localStorage.setItem('sreerag_aswathi_blessings', newCount.toString());
    setHasShowered(true);
    setTimeout(() => setHasShowered(false), 3000);
  };

  return (
    <section id="invitation" className="py-20 sm:py-28 bg-[#FAF7F0] relative overflow-hidden">
      {/* Decorative background flourishes */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-14 md:p-16 rounded-3xl bg-white/90 backdrop-blur-md border border-gold-300/60 shadow-luxury overflow-hidden">
          {/* Subtle Corner Gold Filigree Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-400/50 rounded-tl-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-400/50 rounded-tr-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold-400/50 rounded-bl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-400/50 rounded-br-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Romantic Detail Photograph (Clasped Hands with Bangles & Rings) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-gold-300 via-wine-200 to-gold-400 opacity-40 blur-sm group-hover:opacity-60 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gold-400/50 aspect-[4/3] sm:aspect-square bg-stone-900">
                  <img
                    src="/images/WhatsApp Image 2026-10-03 at 1.54.58 PM.jpeg"
                    alt="Sreerag & Aswathi holding hands with wedding rings"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 inset-x-3 text-center">
                    <span className="font-serif italic text-xs sm:text-sm text-gold-200 tracking-wide drop-shadow-sm">
                      "Two souls, one sacred path ahead"
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Invitation Copy */}
            <div className="md:col-span-7 text-center md:text-left">
              <span className="font-script text-3xl sm:text-4xl text-gold-600 block mb-1">
                With joy in our hearts
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-wine-900 font-semibold leading-snug">
                You are Cordially Invited
              </h2>

              <OrnamentalDivider className="md:justify-start my-4" />

              <div className="space-y-4 text-stone-700 font-serif text-base sm:text-lg leading-relaxed">
                <p>
                  As we take our first steps together toward a lifetime of companionship, love, and shared dreams, your presence and warm blessings will make our special day truly complete.
                </p>
                <p className="text-stone-600 text-sm sm:text-base font-sans font-light">
                  Please join us as we exchange sacred vows in the auspicious divine presence at <span className="font-medium text-stone-900">{WEDDING_DETAILS.venueName}</span>, Kanhirode, Chakkarakkal on <span className="font-semibold text-wine-800">{WEDDING_DETAILS.dateFormatted}</span>.
                </p>
              </div>

              {/* Auspicious Vedic Verse */}
              <div className="mt-6 p-4 rounded-xl bg-gold-50/70 border border-gold-200/80 text-center">
                <p className="font-serif text-xs sm:text-sm text-wine-900 font-medium tracking-wide">
                  ॥ माङ्गल्यं तन्तुनानेन लोकयात्राविधानतः । कण्ठे बध्नामि सुभगे सञ्जीव शरदः शतम् ॥
                </p>
                <p className="font-sans text-[11px] text-stone-500 mt-1 italic">
                  "May our bond be tied with devotion, blessing our journey together for a hundred autumns."
                </p>
              </div>

              {/* Shower Blessings Button & Counter */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleShowerBlessings}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-wine-700 hover:bg-wine-800 text-gold-50 font-serif text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg border border-gold-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Heart className={`w-4 h-4 fill-gold-300 text-gold-300 ${hasShowered ? 'animate-ping' : ''}`} />
                  <span>{hasShowered ? 'Blessings Received!' : 'Shower Your Blessings'}</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs font-sans text-stone-600">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>
                    <strong className="text-wine-800 font-serif text-sm">{blessingCount}</strong> blessings showered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
