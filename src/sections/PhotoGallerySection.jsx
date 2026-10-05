import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/images';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { LightboxModal } from '../components/LightboxModal';
import { MobileGallerySlider } from '../components/MobileGallerySlider';
import { Camera, Maximize2 } from 'lucide-react';

export const PhotoGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos', count: GALLERY_IMAGES.length },
    { id: 'candid', label: 'Candid Love', count: GALLERY_IMAGES.filter(img => img.category === 'candid').length },
    { id: 'celebration', label: 'Celebration & Rituals', count: GALLERY_IMAGES.filter(img => img.category === 'celebration').length },
    { id: 'portraits', label: 'Portraits', count: GALLERY_IMAGES.filter(img => img.category === 'portraits').length },
    { id: 'details', label: 'Details', count: GALLERY_IMAGES.filter(img => img.category === 'details' || img.category === 'editorial').length },
  ];

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : activeCategory === 'details'
      ? GALLERY_IMAGES.filter(img => img.category === 'details' || img.category === 'editorial')
      : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const handleOpenLightbox = (indexInFiltered) => {
    const selectedItem = filteredImages[indexInFiltered];
    const originalIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedItem.id);
    setLightboxIndex(originalIndex >= 0 ? originalIndex : 0);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F7F2EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-gold-600 mb-2">
            <Camera className="w-5 h-5 text-gold-600" />
            <span className="font-serif tracking-[0.25em] text-xs uppercase text-stone-500 font-semibold">
              Treasured Memories
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-wine-900 font-semibold tracking-tight">
            Moments in Time
          </h2>
          <OrnamentalDivider className="my-4" />
          <p className="font-sans text-stone-600 text-sm sm:text-base">
            Every glance, every laughter, and every sacred ritual preserved in timeless frames.
          </p>
        </div>

        {/* Mobile View: Premium Cinematic Slider / Carousel */}
        <div className="block md:hidden">
          <MobileGallerySlider
            key={activeCategory}
            images={filteredImages}
            allImages={GALLERY_IMAGES}
            onOpenLightbox={(origIdx) => setLightboxIndex(origIdx)}
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Desktop View: Editorial Masonry Grid */}
        <div className="hidden md:block">
          {/* Category Filter Pills for Desktop */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-serif uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-wine-700 text-gold-100 border-gold-400 shadow-md scale-105'
                    : 'bg-white/80 hover:bg-gold-50 text-stone-700 border-gold-200/80 shadow-2xs hover:border-gold-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Masonry / Editorial Dynamic Grid */}
          <div className="columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gold-300/50 bg-stone-900 cursor-pointer transition-all duration-500 hover:-translate-y-1"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="self-end">
                    <div className="w-8 h-8 rounded-full bg-stone-900/80 backdrop-blur-md border border-gold-400/60 flex items-center justify-center text-gold-300 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-widest text-gold-400 font-sans font-medium block">
                      {image.category}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                      {image.title}
                    </h4>
                    {image.caption && (
                      <p className="text-stone-300 text-xs font-sans mt-0.5 line-clamp-2">
                        {image.caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subtle metallic edge shimmer on hover */}
                <div className="absolute inset-0 border border-gold-400/0 group-hover:border-gold-400/40 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex || 0}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
};
