import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { OrnamentalDivider, NilavilakkuIcon } from '../components/OrnamentalDivider';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';

export const VenueSection = () => {
  return (
    <section id="venue" className="py-20 sm:py-28 bg-[#F7F2EA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-gold-600 mb-2">
            <Compass className="w-5 h-5 text-gold-600 animate-spin-very-slow" />
            <span className="font-serif tracking-[0.25em] text-xs uppercase text-stone-500 font-semibold">
              Sacred Destination
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-wine-900 font-semibold tracking-tight">
            The Venue &amp; Location
          </h2>
          <OrnamentalDivider className="my-4" />
          <p className="font-sans text-stone-600 text-sm sm:text-base">
            Join us under the divine blessings of Thalamunda Sree Puthiya Bhagavathi Temple.
          </p>
        </div>

        {/* Venue Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Venue Story & Details Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-gold-300/70 shadow-luxury flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-xs font-serif tracking-wider text-wine-800 mb-6">
                <NilavilakkuIcon className="w-4 h-4 text-gold-600" />
                <span>Temple Matrimony</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-wine-900 font-bold leading-tight">
                {WEDDING_DETAILS.venueName}
              </h3>

              <div className="flex items-center gap-2 text-gold-700 font-serif text-lg mt-3">
                <MapPin className="w-5 h-5 text-wine-700 shrink-0" />
                <span>{WEDDING_DETAILS.venueLocation}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-gold-200/80 space-y-4 text-stone-600 font-serif text-base leading-relaxed">
                <p>
                  Imbued with peaceful spiritual sanctity and historic Kerala temple heritage, Thalamunda Sree Puthiya Bhagavathi Temple serves as the divine sanctuary where Sreerag and Aswathi will begin their sacred marital journey.
                </p>
                <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gold-200 text-stone-700 text-sm font-sans space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-600 font-bold text-base mt-[-2px]">❖</span>
                    <div>
                      <strong className="text-stone-900 block font-serif">Locality</strong>
                      <span>Kanhirode, Chakkarakkal, Kannur District, Kerala</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-600 font-bold text-base mt-[-2px]">❖</span>
                    <div>
                      <strong className="text-stone-900 block font-serif">Auspicious Muhurtham</strong>
                      <span>10:30 AM – 11:15 AM on Sunday, 08 November 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-gold-200/80">
              <a
                href={WEDDING_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-wine-700 hover:bg-wine-800 text-gold-50 font-serif text-sm tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg border border-gold-400/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-gold-300" />
                <span>View Location on Google Maps</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>
            </div>
          </div>

          {/* Right: Architectural Map Visualization Frame */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-luxury border-2 border-gold-300/80 bg-stone-900 flex flex-col min-h-[380px] lg:min-h-full">
            {/* Embedded Responsive Google Map Search */}
            <iframe
              title="Thalamunda Sree Puthiya Bhagavathi Temple Location"
              src={`https://maps.google.com/maps?q=Thalamunda+Sree+Puthiya+Bhagavathi+Temple+Kanhirode+Chakkarakkal&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full min-h-[350px] border-0 filter contrast-[1.02]"
              loading="lazy"
              allowFullScreen
            />

            {/* Overlaid Floating Location Card at bottom */}
            <div className="absolute bottom-4 inset-x-4">
              <div className="p-4 rounded-2xl bg-stone-950/85 backdrop-blur-md border border-gold-400/40 text-white flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-wine-800 border border-gold-400/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base text-gold-100 font-medium">
                      Thalamunda Sree Puthiya Bhagavathi Temple
                    </h4>
                    <p className="text-xs text-stone-300 font-sans">
                      Kanhirode, Chakkarakkal
                    </p>
                  </div>
                </div>

                <a
                  href={WEDDING_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500 hover:bg-gold-400 text-stone-950 text-xs font-serif font-semibold tracking-wider transition-colors shrink-0"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
