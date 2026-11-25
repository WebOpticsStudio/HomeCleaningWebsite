"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      title: "1. Book Online",
      description: "Choose your service and preferred time.",
      iconSrc: "/images/step_icon_1.png",
    },
    {
      title: "2. We Clean",
      description: "Our trusted team gets to work.",
      iconSrc: "/images/step_icon_2.png",
    },
    {
      title: "3. Enjoy Your Space",
      description: "Come home to a cleaner, fresher home.",
      iconSrc: "/images/step_icon_3.png",
    },
    {
      title: "4. Repeat",
      description: "Book again and keep the freshness going.",
      iconSrc: "/images/step_icon_4.png",
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-18 lg:py-22 bg-white border-b border-[#F0F4F1] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-10 xl:gap-12">
          {/* Left Column: Heading & 4 Steps */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            {/* Section Eyebrow with Subtle Divider */}
            <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-3.5">
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.16em] text-[#2E9A00]">
                HOW IT WORKS
              </span>
              <div className="h-[1.5px] w-14 sm:w-20 bg-[#2E9A00]/30 rounded-full" />
            </div>

            {/* Main Headline */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[42px] font-extrabold text-[#102B4E] leading-[1.15] tracking-tight mb-8 sm:mb-10 lg:mb-12">
              <span className="block">A Sparkling Home in</span>
              <span className="text-[#2E9A00] inline-flex items-center">
                4 Simple Steps
                {/* Dual four-point green outline sparkles */}
                <span className="inline-flex items-center gap-0.5 ml-2.5 sm:ml-3 select-none pointer-events-none" aria-hidden="true">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#2E9A00]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                  </svg>
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E9A00] -mt-1.5 -ml-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                  </svg>
                </span>
              </span>
            </h2>

            {/* Four Steps: Responsive Grid with Centered Content & Enlarged Connector Arrows */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-0 gap-x-4 sm:gap-x-1 lg:gap-x-2 w-full items-start">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center px-1">
                  {/* Icon Row with prominent connector arrow */}
                  <div className="relative flex items-center justify-center w-full mb-3.5">
                    {/* Step Icon from Reference */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 transition-transform duration-200 hover:scale-105">
                      <Image
                        src={step.iconSrc}
                        alt={step.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Enlarged Right Arrow centered between this icon and the next icon */}
                    {idx < steps.length - 1 && (
                      <div className="hidden sm:flex absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10">
                        <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-[#A0D49C] stroke-[2.75]" />
                      </div>
                    )}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-bold text-[14.5px] sm:text-[15px] text-[#102B4E] leading-snug mb-1">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[12px] sm:text-[12.5px] lg:text-[13px] text-[#556476] leading-snug max-w-[145px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Compact, High-Quality Cleaning Image with Organic Accent */}
          <div className="lg:col-span-5 xl:col-span-4 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[410px] flex items-center justify-center">
              {/* Organic pale-green background shape inspired by reference */}
              <div 
                className="absolute -top-7 -right-7 w-64 sm:w-72 h-56 sm:h-64 bg-[#EAF7E8]/75 rounded-[44px] pointer-events-none -z-10" 
                aria-hidden="true" 
              />

              {/* Three subtle green energy accent rays in top-left */}
              <div className="absolute -top-3.5 -left-3.5 z-20 pointer-events-none select-none text-[#2E9A00]" aria-hidden="true">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="20" y1="4" x2="14" y2="10" />
                  <line x1="19" y1="14" x2="10" y2="15" />
                  <line x1="14" y1="21" x2="7" y2="18" />
                </svg>
              </div>

              {/* High-Resolution Cleaning Image Container */}
              <div className="relative w-full aspect-[1.5/1] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#E5EAE5] bg-white">
                <Image
                  src="/images/how_it_works_clean_room.jpg"
                  alt="Spotless bright living room with coffee table, green plants and cleaning equipment"
                  fill
                  priority={false}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 410px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
