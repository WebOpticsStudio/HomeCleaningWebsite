"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";

interface AnnouncementBarProps {
  onOpenQuote?: () => void;
}

export function AnnouncementBar({ onOpenQuote }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#104D32] text-white py-1.5 px-4 text-xs font-medium transition-all duration-300 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Empty left placeholder for balance on desktop */}
        <div className="hidden sm:block w-6" />

        {/* Center message & CTA */}
        <div className="flex-1 flex items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-1.5 opacity-95">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>For a cleaner home, contact us today.</span>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-1 bg-white text-[#104D32] hover:bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide transition-colors shadow-sm cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/70 hover:text-white p-0.5 rounded transition-colors"
          aria-label="Close announcement bar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
