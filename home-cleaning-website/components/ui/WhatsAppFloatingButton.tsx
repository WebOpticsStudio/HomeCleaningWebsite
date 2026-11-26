"use client";

import React from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function WhatsAppFloatingButton() {
  const phoneNumber = "917338481383";
  const defaultMessage =
    "Hi! I'm interested in your home cleaning services. I'd like to know more about your services and pricing.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center pointer-events-auto"
    >
      {/* Floating Circular WhatsApp Button in Brand Base Green */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (7338481383)"
        className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#48B900] hover:bg-[#3FA200] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(72,185,0,0.42)] hover:shadow-[0_6px_24px_rgba(72,185,0,0.58)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Subtle glowing ring effect in Brand Base Green */}
        <span
          className="absolute inset-0 rounded-full bg-[#48B900] opacity-30 animate-ping pointer-events-none"
          style={{ animationDuration: "3s" }}
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white relative z-10" />
      </a>
    </aside>
  );
}
