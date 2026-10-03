import React from 'react';
import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { HeroSection } from './sections/HeroSection';
import { InvitationMessage } from './sections/InvitationMessage';
import { CoupleSection } from './sections/CoupleSection';
import { WeddingDetailsSection } from './sections/WeddingDetailsSection';
import { OurStorySection } from './sections/OurStorySection';
import { VenueSection } from './sections/VenueSection';
import { PhotoGallerySection } from './sections/PhotoGallerySection';
import { GuestbookSection } from './sections/GuestbookSection';
import { ClosingSection } from './sections/ClosingSection';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-stone-900 selection:bg-wine-100 selection:text-wine-900 font-sans relative">
      {/* Top Floating Glass Navigation */}
      <Navbar />

      {/* Main Wedding Invitation Sections */}
      <main>
        {/* 1. Hero / Opening Experience with Live Countdown */}
        <HeroSection />

        {/* 2. Sacred Invitation Message & Auspicious Verse */}
        <InvitationMessage />

        {/* 3. The Couple (Sreerag & Aswathi Editorial Profile) */}
        <CoupleSection />

        {/* 4. Wedding Details, Muhurtham & Calendar Integration */}
        <WeddingDetailsSection />

        {/* 5. Our Journey / Poetic Visual Chapters */}
        <OurStorySection />

        {/* 6. Venue & Google Maps Navigation */}
        <VenueSection />

        {/* 7. Curated Photo Gallery with Lightbox */}
        <PhotoGallerySection />

        {/* 8. Blessings & Wishes Guestbook */}
        <GuestbookSection />

        {/* 9. Final Closing & Gratitude Section */}
        <ClosingSection />
      </main>

      {/* Ambient Wedding Flute / Shehnai Audio Player */}
      <AudioPlayer />
    </div>
  );
}

export default App;
