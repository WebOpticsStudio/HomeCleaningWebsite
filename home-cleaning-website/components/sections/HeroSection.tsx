"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Leaf,
  Star,
  Home,
  ArrowRight,
} from "lucide-react";
import {
  WhatsAppIcon,
  OnTimeClockIcon,
  HouseSparklesIcon,
  HouseHeartIcon,
} from "@/components/ui/Icons";

interface HeroSectionProps {
  onBookCleaning?: () => void;
  onWatchVideo?: () => void;
}

export function HeroSection({ onBookCleaning }: HeroSectionProps) {

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white border-b border-[#E8EDE9] lg:h-[100dvh] lg:max-h-[100dvh] lg:min-h-0"
    >
      {/* 
        Responsive Hero Container:
        - Mobile/Tablet: min-h-[560px] sm:min-h-[600px]
        - Laptop/Desktop: h-full (fits 100% of laptop viewport without requiring scrolling)
        - Overflow hidden to prevent any bleed into next section
      */}
      <div className="relative w-full h-full min-h-[560px] sm:min-h-[600px] lg:min-h-0 flex flex-col justify-between overflow-hidden">

        {/* Background Image (Full Clean Photo with Organic Curve) */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
          <Image
            src="/images/hero_cleaning_1080p.jpg"
            alt="Professional home cleaning service with happy cleaner mopping floor in bright living room"
            fill
            priority
            unoptimized
            className="object-cover object-[right_20%] lg:object-[right_20%]"
            sizes="100vw"
          />

          {/* Softened white gradient overlay for a seamless, natural photographic blend into the living room */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[56%] lg:w-[52%] bg-gradient-to-r from-white from-15% via-white/40 via-55% to-transparent pointer-events-none" />

          {/* 
            Sparkles Layer matching reference image:
            1. Sparkle along the organic curve edge (middle height)
            2. Radiant starburst shine on the glossy floor reflection
            3. Subtle clean glimmers around the equipment
          */}
          <div className="hidden md:block absolute inset-0 z-10 pointer-events-none select-none">
            {/* 1. Sparkle on the organic curved boundary (as in ref image: ~x:50%, y:55%) */}
            <div className="absolute left-[47%] lg:left-[49%] top-[53%] -translate-x-1/2 -translate-y-1/2">
              <svg
                className="w-4.5 h-4.5 lg:w-5 lg:h-5 text-white animate-pulse"
                style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.9))", animationDelay: "900ms" }}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 1C12 8.5 15.5 12 23 12C15.5 12 12 15.5 12 23C12 15.5 8.5 12 1 12C8.5 12 12 8.5 12 1Z" />
                <circle cx="12" cy="12" r="1.8" fill="white" />
              </svg>
            </div>

            {/* 2. Radiant Floor Shine Starburst (as in ref image: ~x:87.5%, y:90%) */}
            <div className="absolute right-[11%] lg:right-[12.5%] bottom-[8%] sm:bottom-[9%] lg:bottom-[10%] -translate-x-1/2">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white animate-pulse"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.95)) drop-shadow(0 0 16px rgba(255,255,255,0.6))",
                  animationDuration: "3s",
                }}
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                {/* Primary 4-point elongated star flare */}
                <path
                  d="M32 0C32 22 32 32 64 32C32 32 32 42 32 64C32 42 32 32 0 32C32 32 32 22 32 0Z"
                  fill="white"
                />
                {/* Secondary diagonal flare */}
                <path
                  d="M32 16C32 27 32 32 44 32C32 32 32 37 32 48C32 37 32 32 20 32C32 32 32 27 32 16Z"
                  fill="white"
                  opacity="0.65"
                  transform="rotate(45 32 32)"
                />
                {/* Radiant central core */}
                <circle cx="32" cy="32" r="4" fill="white" />
              </svg>
            </div>

            {/* 3. Subtle equipment sparkle on bucket */}
            <svg
              className="absolute right-[28.5%] top-[61.5%] w-[13px] h-[13px] text-white/90 animate-pulse"
              style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.9))", animationDelay: "1200ms" }}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 1C12 8.5 15.5 12 23 12C15.5 12 12 15.5 12 23C12 15.5 8.5 12 1 12C8.5 12 12 8.5 12 1Z" />
              <circle cx="12" cy="12" r="1.6" fill="white" />
            </svg>

            {/* 4. Subtle equipment sparkle on spray bottle */}
            <svg
              className="absolute right-[32.5%] top-[41.5%] w-[12px] h-[12px] text-white/90 animate-pulse"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.9))", animationDelay: "400ms" }}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 1C12 8.5 15.5 12 23 12C15.5 12 12 15.5 12 23C12 15.5 8.5 12 1 12C8.5 12 12 8.5 12 1Z" />
              <circle cx="12" cy="12" r="1.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* 
          1. SPACER FOR STICKY / FIXED NAVBAR OVER HERO
          - Matches exact navbar height (51px / 55px / 57px) to preserve hero layout and 100dvh fit
        */}
        <div className="w-full h-[51px] sm:h-[55px] lg:h-[57px] shrink-0" aria-hidden="true" />

        {/* 
          2. HERO CONTENT (Overlaid on clean white background with organic curve)
        */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-2 sm:py-3 lg:py-1 xl:py-2">
          <div className="max-w-2xl lg:max-w-[760px] xl:max-w-[820px]">

            {/* 1. Eyebrow pill badge with clean modern outline house icon */}
            <div className="inline-flex items-center gap-2 bg-[#EAF4FE] border border-[#CDE3FD] px-3.5 py-1 sm:py-1 rounded-full text-[11px] sm:text-[11.5px] font-bold text-[#102B4E] mb-2 sm:mb-2.5 lg:mb-2.5 xl:mb-3 shadow-xs">
              <Home className="w-3.5 h-3.5 text-[#102B4E] stroke-[2] shrink-0" />
              <span>Professional Home Cleaning Services in Bangalore</span>
            </div>

            {/* 2. Main Headline: Bold, heavy, modern sans-serif font */}
            <div className="relative mb-4 sm:mb-5 lg:mb-5 xl:mb-6">
              <h1 className="text-[48px] sm:text-[60px] md:text-[68px] lg:text-[71px] xl:text-[79px] 2xl:text-[85px] font-black leading-[1.03] tracking-[-0.035em]">
                <span className="text-[#102B4E] block whitespace-nowrap">A Cleaner Home,</span>
                <span className="text-[#48B900] relative inline-block mt-0.5 sm:mt-1 whitespace-nowrap">
                  A Healthier You
                  {/* Thin curved green underline beneath the headline */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-2.5 lg:-bottom-2.5 xl:-bottom-3 left-0 w-full h-3 sm:h-3.5 xl:h-4 text-[#48B900]"
                    viewBox="0 0 360 14"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 9C90 2 270 2 357 8"
                      stroke="currentColor"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Sparkles Cluster to the right of headline (as shown in ref image) */}
                  <span className="absolute left-[calc(100%+14px)] sm:left-[calc(100%+20px)] lg:left-[calc(100%+26px)] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden sm:inline-block w-20 h-20">
                    {/* Top-right large 4-point sparkle */}
                    <svg
                      className="absolute -top-4 sm:-top-6 lg:-top-8 left-6 sm:left-8 lg:left-9 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white animate-pulse"
                      style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(255,255,255,0.5))" }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 1C12 8.5 15.5 12 23 12C15.5 12 12 15.5 12 23C12 15.5 8.5 12 1 12C8.5 12 12 8.5 12 1Z" />
                      <circle cx="12" cy="12" r="1.8" fill="white" />
                    </svg>

                    {/* Middle medium 4-point sparkle */}
                    <svg
                      className="absolute top-1 sm:top-1.5 left-1 sm:left-2 w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-white/95 animate-pulse"
                      style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.9))", animationDelay: "600ms" }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 1C12 8.5 15.5 12 23 12C15.5 12 12 15.5 12 23C12 15.5 8.5 12 1 12C8.5 12 12 8.5 12 1Z" />
                      <circle cx="12" cy="12" r="1.5" fill="white" />
                    </svg>

                    {/* Lower small 4-point sparkle */}
                    <svg
                      className="absolute top-6 sm:top-8 left-7 sm:left-9 w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80"
                      style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.75))" }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 1C12 8.5 15.5 12 23 12C15.5 12 12 15.5 12 23C12 15.5 8.5 12 1 12C8.5 12 12 8.5 12 1Z" />
                    </svg>
                  </span>
                </span>
              </h1>
            </div>

            {/* 3. Supporting text: Refined smaller green separator dots with comfortable spacing */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-4 xl:gap-5 text-[15px] sm:text-[17px] lg:text-[16px] xl:text-[18px] font-bold text-[#1B2E4B] tracking-tight mb-2.5 sm:mb-3 lg:mb-3 xl:mb-4">
              <span>Reliable</span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#48B900] shrink-0 select-none" aria-hidden="true" />
              <span>Affordable</span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#48B900] shrink-0 select-none" aria-hidden="true" />
              <span>Professional</span>
            </div>

            {/* 4. Service Benefits Row: Compact, 540-560px max width, 20-22px icons, 11-12px text, 8px gap */}
            <div className="flex items-center justify-between w-full max-w-[540px] sm:max-w-[550px] lg:max-w-[560px] py-1 mb-3 sm:mb-3.5 lg:mb-3.5 xl:mb-4.5">
              {/* Shield icon – Trained Professionals */}
              <div className="flex-1 min-w-0 flex flex-col items-center text-center px-1">
                <ShieldCheck className="w-[21px] h-[21px] sm:w-[22px] sm:h-[22px] text-[#102B4E] stroke-[2] mb-[8px] shrink-0" />
                <span className="text-[13px] sm:text-[14px] font-bold text-[#102B4E] leading-[1.25] tracking-tight">
                  Trained<br />Professionals
                </span>
              </div>

              <div className="h-6 sm:h-7 w-[1px] bg-[#E2E8F0]/40 shrink-0" />

              {/* Leaf icon – Eco-Friendly Products */}
              <div className="flex-1 min-w-0 flex flex-col items-center text-center px-1">
                <Leaf className="w-[21px] h-[21px] sm:w-[22px] sm:h-[22px] text-[#102B4E] stroke-[2] fill-none mb-[8px] shrink-0" />
                <span className="text-[13px] sm:text-[14px] font-bold text-[#102B4E] leading-[1.25] tracking-tight">
                  Eco-Friendly<br />Products
                </span>
              </div>

              <div className="h-6 sm:h-7 w-[1px] bg-[#E2E8F0]/40 shrink-0" />

              {/* Clock icon – On-Time Service */}
              <div className="flex-1 min-w-0 flex flex-col items-center text-center px-1">
                <OnTimeClockIcon className="w-[21px] h-[21px] sm:w-[22px] sm:h-[22px] text-[#102B4E] stroke-[2] mb-[8px] shrink-0" />
                <span className="text-[13px] sm:text-[14px] font-bold text-[#102B4E] leading-[1.25] tracking-tight">
                  On-Time<br />Service
                </span>
              </div>

              <div className="h-6 sm:h-7 w-[1px] bg-[#E2E8F0]/40 shrink-0" />

              {/* House icon – Spotless Results */}
              <div className="flex-1 min-w-0 flex flex-col items-center text-center px-1">
                <HouseSparklesIcon className="w-[21px] h-[21px] sm:w-[22px] sm:h-[22px] text-[#102B4E] stroke-[2] mb-[8px] shrink-0" />
                <span className="text-[13px] sm:text-[14px] font-bold text-[#102B4E] leading-[1.25] tracking-tight">
                  Spotless<br />Results
                </span>
              </div>
            </div>

            {/* 5. CTAs: Book a Cleaning + Explore Our Services */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-3 sm:mb-3.5 lg:mb-3.5 xl:mb-4.5">
              <button
                onClick={onBookCleaning}
                className="inline-flex items-center gap-2.5 bg-[#48B900] hover:bg-[#3FA200] text-white text-[14px] sm:text-[15px] xl:text-[16px] font-bold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Book a Cleaning</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white stroke-[2.5] shrink-0" />
              </button>

              <a
                href="#services"
                onClick={(e) => {
                  const el = document.getElementById("services");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.pushState(null, "", "#services");
                  }
                }}
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#102B4E] hover:text-[#48B900] border border-[#CBD5E1] hover:border-[#48B900]/40 text-[13.5px] sm:text-[14.5px] xl:text-[15px] font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xs hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* 6. Social Proof Rating Strip: Refined 2-column mobile layout with zero overflow */}
            <div className="flex items-center gap-2.5 sm:gap-6 lg:gap-8 pt-1.5 max-w-full">
              {/* Left: 5 Stars & 4.8/5 Customer Rating */}
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                <div className="flex items-center gap-0.5 sm:gap-1 text-[#F59E0B] shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] fill-current" />
                  ))}
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[18px] sm:text-[20px] lg:text-[21px] font-black text-[#0B2847] leading-none tracking-tight">
                    4.8/5
                  </span>
                  <span className="text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] font-bold text-[#64748B] leading-tight mt-1">
                    Customer Rating
                  </span>
                </div>
              </div>

              {/* Centered subtle vertical separator */}
              <div className="h-8 sm:h-9 lg:h-10 w-[1.5px] bg-[#CBD5E1]/80 shrink-0" aria-hidden="true" />

              {/* Right: 1000+ Happy Homes with perfectly centered house icon */}
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                <div className="shrink-0 flex items-center justify-center">
                  <HouseHeartIcon className="w-[21px] h-[21px] sm:w-[24px] sm:h-[24px] lg:w-[26px] lg:h-[26px] text-[#0B2847]" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[18px] sm:text-[20px] lg:text-[21px] font-black text-[#0B2847] leading-none tracking-tight">
                    1000+
                  </span>
                  <span className="text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] font-bold text-[#64748B] leading-tight mt-1">
                    Happy Homes
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
