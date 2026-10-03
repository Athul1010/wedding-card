import React, { useState, useEffect } from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { Calendar, Clock, Sparkles } from 'lucide-react';

const calculateTimeRemaining = (targetISO) => {
  const targetTime = new Date(targetISO).getTime();
  const now = new Date().getTime();
  const difference = targetTime - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isComplete: false };
};

export const CountdownTimer = ({ variant = 'default' }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeRemaining(WEDDING_DETAILS.targetDateISO));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(WEDDING_DETAILS.targetDateISO));
    }, 1000);

  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  if (timeLeft.isComplete) {
    return (
      <div className="py-6 px-8 rounded-2xl bg-gradient-to-r from-wine-900/90 via-stone-900/90 to-wine-900/90 border border-gold-400/40 text-center shadow-luxury">
        <div className="flex items-center justify-center gap-2 text-gold-400 mb-2">
          <Sparkles className="w-5 h-5 animate-spin-very-slow" />
          <span className="font-serif uppercase tracking-widest text-sm text-gold-300">Today Is The Day</span>
          <Sparkles className="w-5 h-5 animate-spin-very-slow" />
        </div>
        <p className="font-display text-2xl sm:text-3xl text-gold-200">
          The Auspicious Muhurtham Has Arrived!
        </p>
        <p className="text-stone-300 text-sm mt-1 font-serif italic">
          Celebrating the eternal union of Sreerag & Aswathi
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-gold-500" />
        <span className="text-xs uppercase tracking-[0.25em] text-stone-600 font-medium">
          Counting Down to the Sacred Union
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/75 backdrop-blur-md border border-gold-300/40 shadow-sm hover:shadow-md hover:border-gold-400/70 transition-all duration-300"
          >
            {/* Corner metallic glow */}
            <div className="absolute top-0 right-0 w-2 h-2 rounded-tr-xl border-t border-r border-gold-400/60 opacity-60" />
            <div className="absolute bottom-0 left-0 w-2 h-2 rounded-bl-xl border-b border-l border-gold-400/60 opacity-60" />

            {/* Number Display */}
            <span className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold text-wine-800 tracking-tight transition-transform group-hover:scale-105 duration-300">
              {String(unit.value).padStart(2, '0')}
            </span>

            {/* Label */}
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] text-stone-500 mt-1 font-medium">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
