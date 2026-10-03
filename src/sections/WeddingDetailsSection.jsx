import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { OrnamentalDivider, NilavilakkuIcon } from '../components/OrnamentalDivider';
import { Calendar, Clock, MapPin, Download, ExternalLink, Sparkles } from 'lucide-react';

export const WeddingDetailsSection = () => {
  // Generate .ics file for calendar export
  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sreerag & Aswathi Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-sreerag-aswathi-2026@wedding.local',
      'DTSTAMP:20261003T000000Z',
      'DTSTART:20261108T050000Z', // 10:30 AM IST = 05:00 UTC
      'DTEND:20261108T054500Z',   // 11:15 AM IST = 05:45 UTC
      'SUMMARY:Wedding of Sreerag & Aswathi',
      `DESCRIPTION:Auspicious Muhurtham of Sreerag & Aswathi (10:30 AM – 11:15 AM) at ${WEDDING_DETAILS.fullVenue}.`,
      `LOCATION:${WEDDING_DETAILS.fullVenue}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding-sreerag-and-aswathi.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="wedding" className="py-20 sm:py-28 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-gold-600 mb-2">
            <NilavilakkuIcon className="w-5 h-5 text-gold-600" />
            <span className="font-serif tracking-[0.25em] text-xs uppercase text-stone-500 font-semibold">
              Sacred Ceremonial Details
            </span>
            <NilavilakkuIcon className="w-5 h-5 text-gold-600" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-wine-900 font-semibold tracking-tight">
            The Wedding Ceremony
          </h2>
          <OrnamentalDivider className="my-4" />
          <p className="font-sans text-stone-600 text-sm sm:text-base">
            We cordially request your cherished presence and divine blessings on this auspicious occasion.
          </p>
        </div>

        {/* 3 Luxury Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Date */}
          <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-gold-300/60 shadow-luxury hover:shadow-luxury-hover hover:border-gold-400 transition-all duration-300 flex flex-col items-center text-center">
            {/* Top Ornamental Tab */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-300 flex items-center justify-center text-wine-700 shadow-xs mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-7 h-7 text-wine-700" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-sans font-medium mb-1">
              The Auspicious Date
            </span>
            <h3 className="font-serif text-2xl font-semibold text-wine-900 mb-2">
              Sunday
            </h3>
            <div className="py-2 px-4 rounded-xl bg-gold-50/80 border border-gold-200/60 mb-3">
              <span className="font-display text-2xl font-bold text-wine-800">
                08 November 2026
              </span>
            </div>
            <p className="text-stone-500 text-xs font-sans mt-auto">
              Please mark your calendar and join us to bless our beginning.
            </p>
          </div>

          {/* Card 2: Muhurtham (Prominently Highlighted) */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white via-wine-50/20 to-white backdrop-blur-md border-2 border-gold-400/80 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col items-center text-center">
            {/* Auspicious Badge */}
            <div className="absolute -top-3.5 px-4 py-1 rounded-full bg-wine-700 text-gold-200 border border-gold-400 text-[10px] font-serif tracking-[0.2em] uppercase shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-gold-300" />
              <span>Divine Moment</span>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-wine-100 to-gold-100 border border-gold-300 flex items-center justify-center text-wine-800 shadow-xs mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-wine-700" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-sans font-medium mb-1">
              Auspicious Muhurtham
            </span>
            <h3 className="font-serif text-2xl font-semibold text-wine-900 mb-2">
              10:30 AM – 11:15 AM
            </h3>
            <div className="py-2 px-4 rounded-xl bg-wine-100/60 border border-wine-200/60 mb-3">
              <span className="font-serif text-sm font-semibold text-wine-900">
                Indian Standard Time (IST)
              </span>
            </div>
            <p className="text-stone-500 text-xs font-sans mt-auto">
              The sacred moments of exchanging the garlands and wedding vows.
            </p>
          </div>

          {/* Card 3: Venue */}
          <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-gold-300/60 shadow-luxury hover:shadow-luxury-hover hover:border-gold-400 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-300 flex items-center justify-center text-wine-700 shadow-xs mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-wine-700" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-sans font-medium mb-1">
              Sacred Venue
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-wine-900 mb-2 leading-snug">
              {WEDDING_DETAILS.venueName}
            </h3>
            <div className="py-2 px-4 rounded-xl bg-gold-50/80 border border-gold-200/60 mb-3">
              <span className="font-serif text-sm font-medium text-stone-800">
                {WEDDING_DETAILS.venueLocation}
              </span>
            </div>
            <p className="text-stone-500 text-xs font-sans mt-auto">
              Chakkarakkal, Kannur District, Kerala.
            </p>
          </div>
        </div>

        {/* Calendar Save CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={downloadIcsFile}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gold-50 text-stone-800 hover:text-wine-800 text-xs sm:text-sm font-serif tracking-widest uppercase transition-all duration-300 border border-gold-300 shadow-sm hover:shadow"
          >
            <Download className="w-4 h-4 text-gold-600" />
            <span>Download Calendar Event (.ics)</span>
          </button>

          <a
            href={WEDDING_DETAILS.googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wine-700 hover:bg-wine-800 text-gold-50 text-xs sm:text-sm font-serif tracking-widest uppercase transition-all duration-300 border border-gold-400/40 shadow-sm hover:shadow"
          >
            <Calendar className="w-4 h-4 text-gold-300" />
            <span>Add to Google Calendar</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};
