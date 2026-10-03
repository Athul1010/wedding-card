import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Share2, Sparkles } from 'lucide-react';

export const LightboxModal = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Sreerag & Aswathi Wedding - ${currentImage.title}`,
          text: currentImage.caption || 'A memorable moment from Sreerag & Aswathi wedding invitation',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Website link copied to clipboard!');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-xl transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header bar */}
      <div
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-stone-300 z-10 bg-gradient-to-b from-stone-950/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-serif tracking-widest text-xs uppercase text-gold-400">
            {currentIndex + 1} / {images.length}
          </span>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <span className="font-serif text-sm tracking-wide text-stone-200 hidden sm:inline">
            {currentImage.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-gold-300 border border-stone-800 transition-colors"
            title="Share"
            aria-label="Share this photo"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors"
            title="Close"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full p-4 flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative group max-h-[75vh] flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl border border-gold-400/20 transition-all duration-300"
          />

          {/* Previous Button */}
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white hover:text-gold-300 border border-gold-500/20 backdrop-blur-md transition-all shadow-xl"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white hover:text-gold-300 border border-gold-500/20 backdrop-blur-md transition-all shadow-xl"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption below image */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h4 className="font-serif text-lg text-gold-200 tracking-wide font-normal">
            {currentImage.title}
          </h4>
          {currentImage.caption && (
            <p className="text-stone-400 text-xs sm:text-sm font-sans mt-1">
              {currentImage.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
