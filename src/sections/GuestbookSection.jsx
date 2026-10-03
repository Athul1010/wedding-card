import React, { useState, useEffect } from 'react';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { MessageSquareHeart, Send, Heart, Sparkles, User } from 'lucide-react';
import confetti from 'canvas-confetti';

const INITIAL_WISHES = [
  {
    id: 1,
    name: "A Well-Wisher",
    message: "May your sacred union be blessed with lifelong happiness, mutual trust, and prosperity. Wishing Sreerag & Aswathi endless joy!",
    date: "Auspicious Blessing",
    likes: 24,
  },
  {
    id: 2,
    name: "Cherished Family Friend",
    message: "Two wonderful souls finding each other. May your love grow brighter with every sunrise. Heartiest congratulations!",
    date: "Warm Wishes",
    likes: 18,
  },
  {
    id: 3,
    name: "Loving Well-Wishers",
    message: "May the divine blessings of Thalamunda Sree Puthiya Bhagavathi always illuminate your path together. Congratulations to the lovely couple!",
    date: "Sacred Wishes",
    likes: 31,
  },
];

export const GuestbookSection = () => {
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('sreerag_aswathi_guestbook');
    return saved ? JSON.parse(saved) : INITIAL_WISHES;
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');

  const quickWishes = [
    "Wishing you endless happiness and harmony! ✨",
    "May your bond blossom with love & laughter! 🌸",
    "Heartiest congratulations to Sreerag & Aswathi! 💖",
    "Blessed union! Wishing you a lifetime of joy together! 🕊️",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const newWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: "Just now",
      likes: 1,
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('sreerag_aswathi_guestbook', JSON.stringify(updated));

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#7C1F3F', '#F4D6DF'],
    });

    setName('');
    setMessage('');
    setIsSubmitting(false);
    setSubmittedMessage('Thank you! Your heartfelt blessing has been shared.');
    setTimeout(() => setSubmittedMessage(''), 4000);
  };

  const handleLike = (id) => {
    const updated = wishes.map(w => {
      if (w.id === id) {
        return { ...w, likes: (w.likes || 0) + 1 };
      }
      return w;
    });
    setWishes(updated);
    localStorage.setItem('sreerag_aswathi_guestbook', JSON.stringify(updated));
  };

  return (
    <section id="guestbook" className="py-20 sm:py-28 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-gold-600 mb-2">
            <MessageSquareHeart className="w-5 h-5 text-gold-600" />
            <span className="font-serif tracking-[0.25em] text-xs uppercase text-stone-500 font-semibold">
              Words of Love
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-wine-900 font-semibold tracking-tight">
            Shower Your Blessings
          </h2>
          <OrnamentalDivider className="my-4" />
          <p className="font-sans text-stone-600 text-sm sm:text-base">
            Leave a loving message and divine wishes for Sreerag &amp; Aswathi as they step into this beautiful new chapter.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-gold-300/70 shadow-luxury mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="guestName" className="block text-xs uppercase tracking-widest text-stone-600 font-sans font-medium mb-2">
                Your Name
              </label>
              <div className="relative">
                <input
                  id="guestName"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40 text-stone-800 placeholder-stone-400 font-sans text-sm outline-none transition-all"
                />
                <User className="w-4 h-4 text-gold-500 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label htmlFor="guestMessage" className="block text-xs uppercase tracking-widest text-stone-600 font-sans font-medium mb-2">
                Your Blessing / Message
              </label>
              <textarea
                id="guestMessage"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your warm wishes and blessings for the couple..."
                className="w-full p-4 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40 text-stone-800 placeholder-stone-400 font-sans text-sm outline-none transition-all resize-none"
              />
            </div>

            {/* Quick Inspiration Chips */}
            <div>
              <span className="text-[11px] text-stone-500 font-sans uppercase tracking-wider block mb-2">
                Or select a heartfelt blessing:
              </span>
              <div className="flex flex-wrap gap-2">
                {quickWishes.map((quick, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setMessage(quick)}
                    className="px-3 py-1.5 rounded-full bg-gold-50 hover:bg-gold-100 text-stone-700 hover:text-wine-800 border border-gold-200 text-xs font-serif transition-colors text-left"
                  >
                    {quick}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-wine-700 hover:bg-wine-800 text-gold-50 font-serif text-sm tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg border border-gold-400/50 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-gold-300" />
                <span>Send Blessing</span>
              </button>

              {submittedMessage && (
                <div className="flex items-center gap-1.5 text-xs text-wine-700 font-serif animate-fadeIn">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  <span>{submittedMessage}</span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Wishes Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gold-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-wine-100 border border-wine-200 flex items-center justify-center text-wine-800 font-serif font-bold text-xs">
                      {w.name ? w.name.charAt(0).toUpperCase() : 'W'}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-wine-900">
                        {w.name}
                      </h4>
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 font-sans block">
                        {w.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-serif text-stone-700 text-base leading-relaxed italic">
                  "{w.message}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gold-100 flex items-center justify-end">
                <button
                  onClick={() => handleLike(w.id)}
                  className="flex items-center gap-1 text-xs text-stone-500 hover:text-wine-700 transition-colors"
                  title="Bless this message"
                >
                  <Heart className="w-3.5 h-3.5 text-wine-600 fill-wine-600/30" />
                  <span>{w.likes || 0}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
