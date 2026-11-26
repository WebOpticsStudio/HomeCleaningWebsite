"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/modals/BookingModal";
import { VideoModal } from "@/components/modals/VideoModal";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (service?: string) => {
    setSelectedService(service || "Standard Home Cleaning");
    setIsBookingOpen(true);
  };

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky / Fixed Navigation Bar */}
      <Navbar onBookCleaning={() => handleOpenBooking("Standard Home Cleaning")} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with integrated navbar on the dark navy background */}
        <HeroSection
          onBookCleaning={() => handleOpenBooking("Standard Home Cleaning")}
          onWatchVideo={handleOpenVideo}
        />

        {/* 4. Services Section (Exactly 5 Cards on Desktop + View All Expand) */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* 5. About Us Section (Two Column: Dog & Family Photo + 2x2 Benefits) */}
        <AboutSection onLearnMore={() => handleOpenBooking("Deep Cleaning")} />

        {/* 6. How It Works Section (4 Steps + Calmer Mind Visual) */}
        <HowItWorksSection />

        {/* 7. Customer Reviews Section (3 Testimonial Cards + 5 Stars) */}
        <ReviewsSection />

        {/* 9. Full-Width CTA Banner */}
        <CtaBanner onBookCleaning={() => handleOpenBooking("Standard Home Cleaning")} />

        {/* 10. Contact Us Section */}
        <ContactSection />
      </main>

      {/* 10. Clean 4-Column Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      {/* Interactive Video Lightbox Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
