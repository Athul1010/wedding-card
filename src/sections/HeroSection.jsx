import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { OrnamentalDivider, NilavilakkuIcon } from '../components/OrnamentalDivider';
import { CountdownTimer } from '../components/CountdownTimer';
import { Calendar, MapPin, Clock, ChevronDown, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 sm:py-28 flex flex-col items-center justify-center overflow-hidden bg-linen-pattern"
    >
      {/* Subtle traditional aura lights in background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-gold-100/60 via-wine-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-wine-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-gold-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Auspicious Invocation Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-gold-300/40 shadow-xs mb-3">
            <span className="text-gold-600 text-xs">॥</span>
            <span className="font-serif tracking-[0.25em] text-xs sm:text-sm text-wine-900 uppercase font-medium">
              Om Shree Ganeshayanamaha
            </span>
            <span className="text-gold-600 text-xs">॥</span>
          </div>

          <p className="font-script text-2xl sm:text-3xl text-gold-600 mt-1">
            Together with their families
          </p>
          <p className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase text-stone-500 mt-1">
            Request the honour of your presence to celebrate the wedding of
          </p>
        </div>

        {/* Hero Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Names, Date, Muhurtham, and Invitation Text */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="relative w-full">
              {/* Couple's Names - High Visual Prominence */}
              <h1 className="flex flex-col gap-1 tracking-normal">
                <span className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-wine-900 tracking-tight leading-[1.05]">
                  Sreerag
                </span>
                <span className="font-script text-3xl sm:text-5xl text-gold-500 my-0 sm:-my-2">
                  &amp;
                </span>
                <span className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-wine-900 tracking-tight leading-[1.05]">
                  Aswathi
                </span>
              </h1>

              <OrnamentalDivider className="lg:justify-start my-6" />

              {/* Date & Muhurtham Badges */}
              <div className="space-y-3.5 w-full max-w-md">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-gold-300/50 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-300/60 flex items-center justify-center shrink-0 text-wine-700">
                    <Calendar className="w-5 h-5 text-wine-700" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-stone-500 font-sans">
                      The Wedding Date
                    </span>
                    <span className="font-serif text-base sm:text-lg font-semibold text-stone-900">
                      {WEDDING_DETAILS.dateFormatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-gold-300/50 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-300/60 flex items-center justify-center shrink-0 text-wine-700">
                    <Clock className="w-5 h-5 text-wine-700" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-stone-500 font-sans">
                      Auspicious Muhurtham
                    </span>
                    <span className="font-serif text-base sm:text-lg font-semibold text-wine-800">
                      {WEDDING_DETAILS.muhurtham}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-gold-300/50 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-300/60 flex items-center justify-center shrink-0 text-wine-700">
                    <MapPin className="w-5 h-5 text-wine-700" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-stone-500 font-sans">
                      Ceremony Venue
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                      {WEDDING_DETAILS.venueName}
                    </span>
                    <span className="text-xs text-stone-600 font-sans">
                      {WEDDING_DETAILS.venueLocation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
                <a
                  href="#wedding"
                  className="px-6 py-3 rounded-full bg-wine-700 hover:bg-wine-800 text-gold-50 text-sm font-serif tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg border border-gold-400/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  View Details
                </a>
                <a
                  href={WEDDING_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/90 hover:bg-gold-50 text-stone-800 hover:text-wine-800 text-sm font-serif tracking-widest uppercase transition-all duration-300 border border-gold-300 shadow-xs hover:shadow"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Wedding Photograph in Luxury Arched Frame */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative golden halo & filigree */}
              <div className="absolute -inset-3 rounded-t-[140px] rounded-b-2xl border-2 border-dashed border-gold-400/40 pointer-events-none" />
              <div className="absolute -inset-1 rounded-t-[136px] rounded-b-2xl border border-gold-500/50 pointer-events-none" />

              {/* Corner Traditional Accents */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FAF7F0] px-3 py-0.5 rounded-full border border-gold-400 text-gold-600 text-xs font-serif tracking-widest shadow-xs z-10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold-500" />
                <span>SACRED UNION</span>
                <Sparkles className="w-3 h-3 text-gold-500" />
              </div>

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-t-[130px] rounded-b-xl shadow-2xl bg-stone-900 border-2 border-gold-300/80 group">
                <img
                  src="/images/WhatsApp Image 2026-10-03 at 1.54.51 PM.jpeg"
                  alt="Sreerag & Aswathi Wedding Portrait"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette and bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20 pointer-events-none" />

                {/* Overlaid Image Caption Pill */}
                <div className="absolute bottom-4 inset-x-4 text-center">
                  <div className="inline-block px-4 py-2 rounded-xl bg-stone-900/80 backdrop-blur-md border border-gold-400/40 shadow-lg text-gold-100">
                    <p className="font-serif text-sm tracking-wide">
                      Sreerag &amp; Aswathi
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-sans">
                      Sunday, 08 November 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Countdown Section */}
        <div className="mt-16 sm:mt-20">
          <CountdownTimer />
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center mt-12 text-stone-400 hover:text-wine-700 transition-colors">
          <a
            href="#invitation"
            className="flex flex-col items-center gap-1 text-xs tracking-widest uppercase font-serif"
            aria-label="Scroll to invitation message"
          >
            <span>Scroll to Invitation</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
