"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/modals/BookingModal";

export function ContactView() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky / Fixed Navigation Bar */}
      <Navbar onBookCleaning={() => setIsBookingOpen(true)} />

      {/* Main Contact Section */}
      <main className="flex-1 pt-[51px] sm:pt-[55px] lg:pt-[57px]">
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="Standard Home Cleaning"
      />
    </div>
  );
}
