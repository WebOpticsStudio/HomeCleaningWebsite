"use client";

import React from "react";
import { X, Play, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#151B19] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-700">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 px-5 border-b border-white/10 bg-[#104D32]">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <h3 className="font-bold text-sm">See The CleanHome Standard in Action</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Simulation Container */}
        <div className="relative aspect-video bg-neutral-900 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url('/images/hero_cleaner_hq.jpg')` }}
          />

          <div className="relative z-10 text-center p-6 max-w-md">
            <div className="w-16 h-16 rounded-full bg-[#176B43] text-white flex items-center justify-center mx-auto mb-4 shadow-xl hover:scale-110 transition-transform cursor-pointer border-2 border-white/40">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
            <h4 className="text-white text-base font-bold mb-1">
              Watch Our 50-Point Cleaning Checklist
            </h4>
            <p className="text-white/70 text-xs">
              Take a 90-second tour of how our trained, background-checked cleaners leave every home spotless, fresh, and welcoming.
            </p>
          </div>
        </div>

        {/* Video Highlights bar */}
        <div className="p-4 bg-[#104D32]/80 border-t border-white/10 text-white/90 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
            <span>HEPA Filtration</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
            <span>Hospital-Grade Eco Disinfectant</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
            <span>100% Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
