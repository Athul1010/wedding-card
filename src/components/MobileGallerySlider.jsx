import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Play, Pause, Sparkles } from 'lucide-react';

export const MobileGallerySlider = ({
  images = [],
  allImages = [],
  onOpenLightbox,
  categories = [],
  activeCategory = 'all',
  onSelectCategory,
}) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragDistanceRef = useRef(0);

  const thumbnailContainerRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const categoryContainerRef = useRef(null);

  const total = images.length;
  const imageIndex = total > 0 ? ((page % total) + total) % total : 0;
  const currentImage = images[imageIndex];

  // Navigate slides
  const paginate = useCallback(
    (newDirection) => {
      if (total <= 1) return;
      setDirection(newDirection);
      setPage((prev) => prev + newDirection);
      setProgress(0);
    },
    [total]
  );

  const goToSlide = useCallback(
    (targetIndex) => {
      if (total <= 1 || targetIndex === imageIndex) return;
      const diff = targetIndex - imageIndex;
      setDirection(diff > 0 ? 1 : -1);
      setPage((prev) => prev + diff);
      setProgress(0);
    },
    [imageIndex, total]
  );

  // Auto-play slideshow timer (5 seconds duration)
  const SLIDE_DURATION = 5000;
  const STEP_INTERVAL = 50;

  useEffect(() => {
    if (!isPlaying || isDragging || total <= 1) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (STEP_INTERVAL / SLIDE_DURATION) * 100;
        if (next >= 100) {
          paginate(1);
          return 0;
        }
        return next;
      });
    }, STEP_INTERVAL);

    return () => clearInterval(timer);
  }, [isPlaying, isDragging, total, paginate]);

  // Keep active thumbnail centered in filmstrip
  useEffect(() => {
    const activeThumb = thumbnailRefs.current[imageIndex];
    if (activeThumb && thumbnailContainerRef.current) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [imageIndex]);

  const handleOpenFull = () => {
    if (!currentImage) return;
    const originalIndex = allImages.findIndex((img) => img.id === currentImage.id);
    onOpenLightbox(originalIndex >= 0 ? originalIndex : 0);
  };

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : dir < 0 ? '-100%' : 0,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.35, ease: 'easeOut' },
        scale: { duration: 0.4, ease: 'easeOut' },
      },
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.94,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.28, ease: 'easeIn' },
        scale: { duration: 0.3 },
      },
    }),
  };

  if (!currentImage) {
    return (
      <div className="py-12 text-center text-stone-500 font-serif">
        No photographs available in this collection.
      </div>
    );
  }

  // Dots calculation: show window of dots if total > 7
  const maxDots = 7;
  let dotIndices = [];
  if (total <= maxDots) {
    dotIndices = Array.from({ length: total }, (_, i) => i);
  } else {
    const half = Math.floor(maxDots / 2);
    let start = imageIndex - half;
    let end = imageIndex + half;
    if (start < 0) {
      start = 0;
      end = maxDots - 1;
    } else if (end >= total) {
      end = total - 1;
      start = total - maxDots;
    }
    for (let i = start; i <= end; i++) {
      dotIndices.push(i);
    }
  }

  return (
    <div className="w-full relative">
      {/* Category Pills (Mobile horizontal scroll) */}
      {categories.length > 0 && (
        <div
          ref={categoryContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 pt-1 px-1 -mx-1 mb-4 select-none"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif uppercase tracking-wider whitespace-nowrap transition-all duration-300 border shrink-0 ${
                  isActive
                    ? 'bg-wine-700 text-gold-100 border-gold-400 shadow-md scale-[1.02]'
                    : 'bg-white/80 hover:bg-gold-50 text-stone-700 border-gold-200/80 shadow-2xs'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1 opacity-60 text-[10px]">({cat.count})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Cinematic Card Canvas */}
      <div className="relative w-full max-w-md mx-auto">
        <div
          className="relative h-[480px] sm:h-[530px] rounded-3xl overflow-hidden shadow-luxury border border-gold-300/60 bg-stone-950 touch-pan-y"
          style={{ touchAction: 'pan-y' }}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag={total > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.22}
              onDragStart={() => {
                setIsDragging(true);
                dragDistanceRef.current = 0;
              }}
              onDrag={(_, info) => {
                dragDistanceRef.current = Math.abs(info.offset.x);
              }}
              onDragEnd={(_, { offset, velocity }) => {
                setIsDragging(false);
                const swipeThreshold = 40;
                if (offset.x < -swipeThreshold || velocity.x < -280) {
                  paginate(1);
                } else if (offset.x > swipeThreshold || velocity.x > 280) {
                  paginate(-1);
                }
              }}
              onClick={() => {
                // Only open fullscreen if user clicked without dragging
                if (dragDistanceRef.current < 8) {
                  handleOpenFull();
                }
              }}
              className="absolute inset-0 w-full h-full cursor-pointer select-none overflow-hidden"
            >
              {/* Ambient Blurred Backdrop for soft cinematic lighting */}
              <img
                src={currentImage.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-40 brightness-75 select-none pointer-events-none"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-stone-950/70 pointer-events-none z-10" />

              {/* Main Foreground Image with gentle Ken Burns slow zoom */}
              <div className="relative z-0 w-full h-full flex items-center justify-center p-2">
                <motion.div
                  key={`kenburns-${currentImage.id}-${page}`}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.045 }}
                  transition={{ duration: 6, ease: 'easeOut' }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    loading="lazy"
                    className={`w-full h-full rounded-2xl select-none ${
                      currentImage.orientation === 'landscape'
                        ? 'object-contain drop-shadow-2xl'
                        : 'object-cover'
                    }`}
                    draggable={false}
                  />
                </motion.div>
              </div>

              {/* Top Meta Bar */}
              <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/70 backdrop-blur-md border border-gold-400/40 text-gold-300 text-[11px] font-serif tracking-widest uppercase shadow-md">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  <span>{currentImage.category}</span>
                </div>

                <div className="px-3 py-1 rounded-full bg-stone-950/70 backdrop-blur-md border border-gold-400/40 text-xs font-serif shadow-md">
                  <span className="text-gold-300 font-semibold">
                    {String(imageIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-stone-400 mx-1">/</span>
                  <span className="text-stone-400">
                    {String(total).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Bottom Cinematic Legend & Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex flex-col justify-end pointer-events-none">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-wide drop-shadow-md">
                  {currentImage.title}
                </h3>
                {currentImage.caption && (
                  <p className="font-sans text-xs sm:text-sm text-stone-200/90 font-light mt-1 line-clamp-2 leading-relaxed drop-shadow-sm">
                    {currentImage.caption}
                  </p>
                )}

                <div className="mt-3 flex items-center justify-between pointer-events-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenFull();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-200 text-xs font-serif tracking-wider border border-gold-400/40 backdrop-blur-md transition-all active:scale-95 shadow-sm"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-gold-300" />
                    <span>View High-Res</span>
                  </button>

                  <span className="text-[11px] font-sans text-stone-400 tracking-wider">
                    Swipe ↔ or Tap
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating Left Chevron */}
          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              aria-label="Previous photograph"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-stone-950/60 hover:bg-stone-950/90 active:scale-90 text-gold-300 border border-gold-400/30 flex items-center justify-center backdrop-blur-md shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Floating Right Chevron */}
          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
              aria-label="Next photograph"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-stone-950/60 hover:bg-stone-950/90 active:scale-90 text-gold-300 border border-gold-400/30 flex items-center justify-center backdrop-blur-md shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Slideshow Progress Bar */}
        {total > 1 && (
          <div className="mt-3 px-1">
            <div className="w-full h-1 bg-gold-200/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold-500 via-gold-400 to-wine-600 transition-all ease-linear"
                style={{
                  width: isPlaying ? `${progress}%` : '0%',
                  transitionDuration: `${STEP_INTERVAL}ms`,
                }}
              />
            </div>
          </div>
        )}

        {/* Minimal Indicators & Controls Bar */}
        {total > 1 && (
          <div className="mt-2.5 px-2 flex items-center justify-between">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 hover:bg-white text-stone-700 hover:text-wine-800 border border-gold-300/60 text-xs font-serif tracking-wider shadow-2xs transition-all active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-gold-600" />
                  <span className="text-[11px]">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-gold-600 fill-gold-600" />
                  <span className="text-[11px]">Play</span>
                </>
              )}
            </button>

            {/* Dynamic Minimal Dot Indicators */}
            <div className="flex items-center gap-1.5">
              {dotIndices.map((idx) => {
                const isActive = idx === imageIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? 'w-6 h-1.5 bg-gradient-to-r from-wine-700 to-gold-500 shadow-sm'
                        : 'w-1.5 h-1.5 bg-stone-300 hover:bg-gold-400'
                    }`}
                  />
                );
              })}
            </div>

            {/* Tap indicator label */}
            <span className="text-[11px] font-serif text-stone-500 tracking-wider">
              {imageIndex + 1} of {total}
            </span>
          </div>
        )}

        {/* Visual Thumbnail Filmstrip for fast scrubbing */}
        {total > 1 && (
          <div className="mt-4">
            <div
              ref={thumbnailContainerRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 select-none"
            >
              {images.map((img, idx) => {
                const isActive = idx === imageIndex;
                return (
                  <button
                    key={img.id}
                    ref={(el) => (thumbnailRefs.current[idx] = el)}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Thumbnail ${img.title}`}
                    className={`relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 ${
                      isActive
                        ? 'ring-2 ring-wine-600 border-gold-400 shadow-md scale-105 opacity-100'
                        : 'border-gold-200/80 opacity-50 hover:opacity-80 scale-95'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover select-none"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
