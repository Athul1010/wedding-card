import React from 'react';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { Sparkles, Heart } from 'lucide-react';

export const OurStorySection = () => {
  const chapters = [
    {
      title: "Serenade of Smiles",
      subtitle: "Finding Joy in the Simple Moments",
      verse: "In the quiet rustle of leaves and shared smiles, two paths gently intertwined into a singular journey of harmony.",
      image: "/images/WhatsApp Image 2026-10-03 at 1.54.56 PM (1).jpeg",
      alt: "Sreerag & Aswathi on garden swing",
      aspectRatio: "aspect-[3/4]",
    },
    {
      title: "A Tender Promise",
      subtitle: "The Warmth of True Devotion",
      verse: "A gentle touch, a steady gaze, and an unspoken vow to stand together through every tomorrow.",
      image: "/images/WhatsApp Image 2026-10-03 at 1.55.04 PM.jpeg",
      alt: "Sreerag gently kissing Aswathi's forehead",
      aspectRatio: "aspect-[3/4]",
      reverse: true,
    },
    {
      title: "Sealed with Auspicious Rings",
      subtitle: "The Sacred Beginning",
      verse: "With elders nodding in blessings and loved ones cheering with delight, the ring of eternity sealed our commitment.",
      image: "/images/WhatsApp Image 2026-10-03 at 1.55.06 PM.jpeg",
      alt: "Ring exchange ceremony on stage",
      aspectRatio: "aspect-[3/4]",
    },
    {
      title: "Shared Laughter & Celebration",
      subtitle: "A Future Filled with Sweetness",
      verse: "Every shared laugh is a reminder that the sweetest memories are the ones we create side by side.",
      image: "/images/WhatsApp Image 2026-10-03 at 1.55.06 PM (1) - Copy.jpeg",
      alt: "Sreerag & Aswathi cutting the engagement cake",
      aspectRatio: "aspect-[3/4]",
      reverse: true,
    },
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="font-script text-3xl sm:text-4xl text-gold-600 block mb-1">
            Moments That Define Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-wine-900 font-semibold tracking-tight">
            Our Journey
          </h2>
          <OrnamentalDivider className="my-4" />
          <p className="font-sans text-stone-600 text-sm sm:text-base">
            Glimpses into the unspoken bonds, quiet warmth, and shared joy that brought us to this sacred threshold.
          </p>
        </div>

        {/* Timeline Chapters with Asymmetric Editorial Layout */}
        <div className="space-y-20 sm:space-y-28">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${
                chapter.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 flex justify-center ${
                  chapter.reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative group w-full max-w-md">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-300/30 via-wine-100/30 to-gold-400/30 blur-sm pointer-events-none" />
                  <div className="relative rounded-2xl overflow-hidden shadow-luxury border-2 border-gold-300/70 bg-stone-900 group">
                    <img
                      src={chapter.image}
                      alt={chapter.alt}
                      className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Chapter Number Pill */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-gold-400/50 text-[11px] font-serif uppercase tracking-widest text-gold-300 shadow-md">
                      Chapter {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 text-center lg:text-left ${
                  chapter.reverse ? 'lg:order-1 lg:text-right' : 'lg:order-2'
                }`}
              >
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className={`flex items-center gap-2 mb-2 justify-center ${chapter.reverse ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <span className="font-serif text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
                      {chapter.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-wine-900 font-semibold leading-snug">
                    {chapter.title}
                  </h3>

                  <div className={`my-4 flex justify-center ${chapter.reverse ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-gold-400 to-wine-600 rounded-full" />
                  </div>

                  <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed italic">
                    "{chapter.verse}"
                  </p>

                  <div className={`mt-6 flex items-center gap-3 justify-center ${chapter.reverse ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="w-8 h-8 rounded-full bg-gold-50 border border-gold-300/80 flex items-center justify-center text-wine-700 shadow-xs">
                      <Heart className="w-4 h-4 text-wine-700 fill-wine-700/20" />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-widest text-stone-500 font-medium">
                      Sreerag &amp; Aswathi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
