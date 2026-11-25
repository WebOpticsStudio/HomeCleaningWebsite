"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Leaf, Calendar, Smile } from "lucide-react";

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export function AboutSection({ onLearnMore }: AboutSectionProps) {
  const benefits = [
    {
      title: "Trusted Cleaners",
      description: "Trained & vetted professionals",
      icon: <ShieldCheck className="w-4 h-4 text-[#2E9A00]" strokeWidth={2} />,
    },
    {
      title: "Safe Products",
      description: "Family & pet-friendly",
      icon: <Leaf className="w-4 h-4 text-[#2E9A00]" strokeWidth={2} />,
    },
    {
      title: "Flexible Scheduling",
      description: "Book at your convenience",
      icon: <Calendar className="w-4 h-4 text-[#2E9A00]" strokeWidth={2} />,
    },
    {
      title: "100% Satisfaction",
      description: "Your happiness comes first",
      icon: <Smile className="w-4 h-4 text-[#2E9A00]" strokeWidth={2} />,
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-18 lg:py-22 bg-white border-b border-[#F0F4F1] relative overflow-hidden">
      {/* Subtle organic corner curve accent */}
      <div 
        className="absolute -bottom-24 -right-24 w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-tl from-[#EDF8EC]/60 via-[#F3FAF2]/30 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Balanced 50/50 Image and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12 xl:gap-14">
          {/* Left Column: Exactly 50% Layout (6 columns of 12) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
            <div className="relative w-full aspect-square max-w-[480px] lg:max-w-none mx-auto lg:ml-0 rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E5EAE5]">
              <Image
                src="/images/why_choose_family_dog.jpg"
                alt="Golden retriever resting comfortably with happy family in a sparkling clean home"
                fill
                priority={false}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>

          {/* Right Column: Exactly 50% Layout (6 columns of 12) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Eyebrow with Subtle Thin Divider */}
            <div className="flex items-center gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
              <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#2E9A00]">
                WHY CHOOSE CLEANHOME
              </span>
              <div className="h-[1.5px] w-14 sm:w-20 bg-[#2E9A00]/30 rounded-full" />
            </div>

            {/* Main Headline */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] xl:text-[40px] font-extrabold text-[#102B4E] leading-[1.16] tracking-tight mb-3.5">
              <span className="block">Trusted by Families,</span>
              <span className="text-[#2E9A00] inline-flex items-center">
                Loved for Results.
                {/* Refined dual four-point green sparkles */}
                <span className="inline-flex items-center gap-0.5 ml-2 sm:ml-2.5 select-none pointer-events-none" aria-hidden="true">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E9A00]"
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
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2E9A00] -mt-1.5 -ml-0.5"
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

            {/* Supporting Body Text: Enhanced Readability */}
            <p className="text-[15px] sm:text-[15.5px] text-[#475569] leading-relaxed mb-8 max-w-xl font-normal">
              We&apos;re more than just a cleaning service — we&apos;re your partner in creating a cleaner, healthier and happier home.
            </p>

            {/* Four Benefits in an Equally Spaced 2x2 Grid with Smaller, Consistent Icon Backgrounds */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-6 sm:gap-y-7 mb-9 w-full">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 w-full">
                  {/* Smaller, consistent circular green icon background */}
                  <div className="w-[32px] h-[32px] sm:w-[34px] sm:h-[34px] rounded-full bg-[#EBF7E9] border border-[#D5EED1] flex items-center justify-center shrink-0 mt-0.5">
                    {benefit.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[14.5px] sm:text-[15px] text-[#102B4E] leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-[#556476] font-normal leading-normal mt-0.5">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button: Aligned Directly Beneath the Benefits */}
            <div className="flex items-center justify-start">
              <button
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2.5 bg-[#2E9A00] hover:bg-[#278600] text-white text-[14px] sm:text-[14.5px] font-bold px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
