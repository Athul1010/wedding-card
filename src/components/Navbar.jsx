import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerBlessingConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#CBA745', '#7C1F3F', '#F4D6DF', '#E8D59C', '#FAF7F0'],
      shapes: ['circle', 'square'],
      scalar: 1.1,
    });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'The Couple', href: '#couple' },
    { name: 'Wedding Details', href: '#wedding' },
    { name: 'Our Journey', href: '#journey' },
    { name: 'Venue', href: '#venue' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blessings', href: '#guestbook' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF7F0]/90 backdrop-blur-md shadow-sm border-b border-gold-400/20 py-3'
            : 'bg-gradient-to-b from-[#FAF7F0]/80 via-[#FAF7F0]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Couple Monogram / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-400/50 flex items-center justify-center shadow-sm group-hover:border-gold-500 transition-colors">
              <span className="font-display text-sm font-bold text-wine-800 tracking-wider">
                S&A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-medium text-stone-900 tracking-wide group-hover:text-wine-800 transition-colors">
                Sreerag & Aswathi
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600 font-sans font-medium">
                08 November 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-stone-600 hover:text-wine-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Shower Blessings Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={triggerBlessingConfetti}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-wine-700 hover:bg-wine-800 text-gold-100 text-xs font-serif tracking-wider shadow-sm hover:shadow transition-all duration-300 border border-gold-400/40 hover:scale-[1.02] active:scale-[0.98]"
              title="Shower flower petals and blessings"
            >
              <Heart className="w-3.5 h-3.5 text-gold-300 fill-gold-300/30 animate-pulse" />
              <span>Shower Blessings</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-wine-800 hover:bg-gold-100/50 transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-[#FAF7F0] shadow-2xl p-6 pt-24 flex flex-col justify-between border-l border-gold-300/40 animate-slideInRight">
            <div className="flex flex-col gap-5">
              <div className="pb-4 border-b border-gold-200">
                <span className="font-serif text-xl text-wine-900 block font-medium">
                  Sreerag & Aswathi
                </span>
                <span className="text-xs uppercase tracking-widest text-gold-600 block mt-1 font-sans">
                  08 November 2026
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-lg text-stone-700 hover:text-wine-800 transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-gold-400 text-xs">✦</span>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-gold-200">
              <button
                onClick={() => {
                  triggerBlessingConfetti();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-full bg-wine-700 text-gold-100 text-sm font-serif tracking-wider flex items-center justify-center gap-2 shadow-md border border-gold-400/40"
              >
                <Heart className="w-4 h-4 fill-gold-300 text-gold-300" />
                <span>Shower Blessings</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
