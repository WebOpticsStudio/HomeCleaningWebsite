"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Home } from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services: ServiceItem[] = [
    {
      id: "basic-cleaning",
      title: "Basic Home Cleaning",
      description: "Keep your home fresh and tidy with everyday dusting, sweeping and mopping.",
      price: "₹2,000",
      image: "/images/service_basic_cleaning.jpg",
      alt: "Bright clean sunlit living room",
    },
    {
      id: "deep-cleaning",
      title: "Deep Cleaning",
      description: "Remove stubborn dirt and hidden grime with a thorough top-to-bottom clean.",
      price: "₹2,500",
      image: "/images/service_deep_cleaning_restored.jpg",
      alt: "Living room sofa with green and blue pillows on coffee table",
    },
    {
      id: "kitchen-cleaning",
      title: "Kitchen Cleaning",
      description: "Get rid of grease, stains and built-up dirt for a fresh, hygienic kitchen.",
      price: "₹2,500",
      image: "/images/service_kitchen_restored.jpg",
      alt: "Sparkling modern clean kitchen with white cabinets and stove",
    },
    {
      id: "bathroom-cleaning",
      title: "Bathroom Cleaning",
      description: "Remove soap scum, stains and grime for a sparkling, fresh bathroom.",
      price: "₹1,500",
      image: "/images/service_bathroom.jpg",
      alt: "Modern clean bathroom with glass shower, sink and mirror",
    },
    {
      id: "move-in-out",
      title: "Move In / Move Out Cleaning",
      description: "Move into a fresh home or leave your old space spotless and ready.",
      price: "₹5,000",
      image: "/images/service_move_in.jpg",
      alt: "Bright empty sunlit room with hardwood floors and moving boxes",
    },
  ];

  return (
    <section id="services" className="relative py-8 sm:py-10 lg:py-12 overflow-hidden bg-[#FBFDFB]">
      {/* Background with Foliage and Organic Green Shapes */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <Image
          src="/images/services_bg.jpg"
          alt=""
          fill
          priority={false}
          className="object-cover object-center opacity-95"
          sizes="100vw"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7">
          {/* Eyebrow with Divider Lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-3.5">
            <div className="h-[1px] w-12 sm:w-16 bg-[#2E9A00]/30 rounded-full" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5E9] text-[#102B4E] text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em]">
              <Home className="w-3.5 h-3.5 text-[#102B4E]" />
              <span>OUR SERVICES</span>
            </div>
            <div className="h-[1px] w-12 sm:w-16 bg-[#2E9A00]/30 rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-serif font-bold text-[#102B4E] tracking-tight leading-[1.18] mb-2 sm:mb-2.5">
            Sparkling Spaces,{" "}
            <span className="relative inline-block text-[#2E9A00]">
              Happier You
              {/* Subtle green underline flourish */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-2.5 text-[#2E9A00] pointer-events-none"
                viewBox="0 0 200 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 6 C 50 10, 150 10, 198 3"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Supporting Subtitle */}
          <p className="text-[14px] sm:text-[15.5px] text-[#4A5D73] font-medium leading-relaxed max-w-[290px] sm:max-w-none mx-auto">
            Professional cleaning solutions for every corner of your home.
          </p>
        </div>

        {/* 5 Service Cards Grid: 
            - Desktop (lg:): 3 on Row 1, 2 centered on Row 2 (via 6-column grid)
            - Tablet (md:): 2 columns
            - Mobile: 1 column
            - Equal card heights maintained automatically via grid auto-rows & items-stretch
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          {services.map((service, index) => {
            // Responsive layout:
            // - Desktop (lg:): 3 on Row 1, 2 centered on Row 2
            // - Tablet (sm:): 2 columns, last card centered
            // - Mobile: 1 column
            const gridColClass =
              index === 3
                ? "sm:col-span-1 sm:col-start-auto lg:col-span-2 lg:col-start-2"
                : index === 4
                  ? "sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto lg:max-w-none lg:col-span-2"
                  : "sm:col-span-1 lg:col-span-2";

            return (
              <div
                key={service.id}
                onClick={() => onSelectService && onSelectService(service.title)}
                className={`group bg-white rounded-[20px] border border-[#E4ECE4] shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(46,154,0,0.08)] hover:border-[#2E9A00]/40 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer ${gridColClass}`}
              >
                {/* 1. Full-width Service Photograph on Top (Consistent 145px height & aspect ratio) */}
                <div className="relative w-full h-[145px] shrink-0 overflow-hidden bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  />
                </div>

                {/* 2. Content Underneath (Internal padding 18–20px) */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Complete Service Name (Never truncated, wraps naturally to two lines) */}
                    <h3 className="text-[20px] sm:text-[21px] font-semibold text-[#102B4E] leading-snug mb-2 group-hover:text-[#2E9A00] transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Service Description (Fully readable within two lines, no aggressive truncation) */}
                    <p className="text-[14px] sm:text-[14.5px] font-normal text-[#556476] leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* 3. Starting Price in Fresh Green & Circular Arrow Button aligned at bottom */}
                  <div className="flex items-center justify-between pt-3 mt-auto border-t border-[#F0F4F0]/90">
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#7A8B9E] font-medium leading-none mb-1">
                        Starting from
                      </span>
                      <span className="text-[16px] sm:text-[17px] font-bold text-[#2E9A00] leading-none">
                        {service.price}
                      </span>
                    </div>

                    <div
                      aria-label={`View ${service.title}`}
                      className="w-8 h-8 rounded-full bg-[#102B4E] group-hover:bg-[#2E9A00] text-white flex items-center justify-center transition-all duration-200 shadow-sm shrink-0"
                    >
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
