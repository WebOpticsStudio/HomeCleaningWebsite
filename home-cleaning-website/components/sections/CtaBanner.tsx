"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Calendar, Smile } from "lucide-react";

interface CtaBannerProps {
  onBookCleaning?: () => void;
}

export function CtaBanner({ onBookCleaning }: CtaBannerProps) {
  return (
    <section id="cta-banner" className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden bg-white border border-[#E2EBE2] shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Column: Cleaning Supplies Photo with Organic Curved Seam */}
          <div className="relative w-full lg:w-[320px] xl:w-[350px] shrink-0 h-[220px] sm:h-[260px] lg:h-auto min-h-[200px] overflow-hidden">
            <Image
              src="/images/cta_cleaning_supplies.jpg"
              alt="Clean home with spray bottle, fresh folded green towels and lush potted plant on marble table"
              fill
              priority={true}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 350px"
            />

            {/* Organic Pale-Green Accent Curve Layer along the transition on Desktop */}
            <div className="hidden lg:block absolute inset-y-0 -right-2.5 w-16 pointer-events-none overflow-hidden z-10" aria-hidden="true">
              <svg
                viewBox="0 0 64 260"
                preserveAspectRatio="none"
                className="w-full h-full text-[#EAF7E8] fill-current"
              >
                <path d="M 64 0 L 14 0 C 38 45, 0 100, -2 140 C -4 180, 32 225, 14 260 L 64 260 Z" />
              </svg>
            </div>

            {/* Organic Pure-White Curved Cut on Desktop */}
            <div className="hidden lg:block absolute inset-y-0 -right-0.5 w-12 pointer-events-none overflow-hidden z-20" aria-hidden="true">
              <svg
                viewBox="0 0 48 260"
                preserveAspectRatio="none"
                className="w-full h-full text-white fill-current"
              >
                <path d="M 48 0 L 12 0 C 34 45, 0 100, -2 140 C -4 180, 28 225, 12 260 L 48 260 Z" />
              </svg>
            </div>
          </div>

          {/* Right Column: Headline, Supporting Copy, CTA Button & 3 Trust Points */}
          <div className="relative flex-1 py-7 sm:py-8 lg:py-8 xl:py-9 px-6 sm:px-8 lg:px-9 xl:px-11 flex flex-col justify-center z-10 overflow-hidden">
            {/* Smooth organic pale-green curve shape on the right edge matching reference exactly (no square/box shape) */}
            <div className="absolute top-0 right-0 bottom-0 w-44 sm:w-60 lg:w-72 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
              <svg viewBox="0 0 180 220" preserveAspectRatio="none" className="w-full h-full fill-[#EAF7E8]/90">
                <path d="M 180 35 C 145 60, 48 120, 38 220 L 180 220 Z" />
              </svg>
            </div>

            {/* Main Headline */}
            <h2 className="text-[22px] sm:text-[27px] lg:text-[30px] xl:text-[32px] font-extrabold text-[#102B4E] tracking-tight leading-[1.25] sm:leading-[1.2] mb-2 sm:mb-2.5">
              Ready for a Cleaner,{" "}
              <span className="text-[#2E9A00]">
                Happier Home
                <span className="relative inline-block">
                  ?
                  {/* Three small green accent lines cleanly positioned at top-right of question mark without overlapping any text */}
                  <span
                    className="absolute top-0 left-full -mt-1 sm:-mt-1.5 ml-0.5 sm:ml-1 select-none pointer-events-none text-[#2E9A00]"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      {/* Ray 1 (steep upper ray) */}
                      <line x1="5" y1="2" x2="3" y2="8" />
                      {/* Ray 2 (middle 45-degree ray) */}
                      <line x1="10" y1="10" x2="18" y2="4" />
                      {/* Ray 3 (lower horizontal ray) */}
                      <line x1="13" y1="16" x2="21" y2="16" />
                    </svg>
                  </span>
                </span>
              </span>
            </h2>

            {/* Supporting Subtitle */}
            <p className="text-[14.5px] sm:text-[15.5px] lg:text-[16px] text-[#2C4663] font-medium leading-relaxed mb-6 sm:mb-7">
              Get your home sparkling clean with professionals you can trust.
            </p>

            {/* Bottom Row: CTA Button + Divider + 3 Trust Points */}
            <div className="flex flex-wrap items-center gap-y-4 gap-x-5 sm:gap-x-6">
              {/* Green CTA Pill Button */}
              <button
                onClick={onBookCleaning}
                className="group inline-flex items-center gap-2 bg-[#2E9A00] hover:bg-[#278600] text-white text-[14.5px] sm:text-[15px] font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_4px_14px_rgba(46,154,0,0.28)] hover:shadow-[0_6px_20px_rgba(46,154,0,0.38)] transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Book Your Cleaning</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-8 w-[1.5px] bg-[#E2E8F0] shrink-0" aria-hidden="true" />

              {/* Three Trust Points */}
              <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 lg:gap-x-7 gap-y-3">
                {/* 1. Trusted Professionals */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EBF7E9] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#2E9A00]" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col leading-[1.25]">
                    <span className="text-[12px] sm:text-[12.5px] font-bold text-[#102B4E]">Trusted</span>
                    <span className="text-[11.5px] sm:text-[12px] font-medium text-[#4A5D73]">Professionals</span>
                  </div>
                </div>

                {/* 2. Flexible Scheduling */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EBF7E9] flex items-center justify-center shrink-0">
                    <Calendar className="w-4.5 h-4.5 text-[#2E9A00]" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col leading-[1.25]">
                    <span className="text-[12px] sm:text-[12.5px] font-bold text-[#102B4E]">Flexible</span>
                    <span className="text-[11.5px] sm:text-[12px] font-medium text-[#4A5D73]">Scheduling</span>
                  </div>
                </div>

                {/* 3. Satisfaction Guaranteed */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EBF7E9] flex items-center justify-center shrink-0">
                    <Smile className="w-4.5 h-4.5 text-[#2E9A00]" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col leading-[1.25]">
                    <span className="text-[12px] sm:text-[12.5px] font-bold text-[#102B4E]">Satisfaction</span>
                    <span className="text-[11.5px] sm:text-[12px] font-medium text-[#4A5D73]">Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
