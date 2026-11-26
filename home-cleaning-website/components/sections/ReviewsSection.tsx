"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Home, ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewItem {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

export function ReviewsSection() {
  const reviews: ReviewItem[] = [
    {
      name: "Priya S.",
      avatar: "/images/avatar_priya_v2.jpg",
      rating: 5,
      text: "Very professional and thorough. Our home feels fresh, spotless and clean!",
    },
    {
      name: "Rahul K.",
      avatar: "/images/avatar_rahul_v2.jpg",
      rating: 5,
      text: "Excellent service. The team was punctual, polite and very courteous.",
    },
    {
      name: "Neha M.",
      avatar: "/images/avatar_neha_v2.jpg",
      rating: 5,
      text: "Amazing deep cleaning! Every single corner was spotless and fresh.",
    },
    {
      name: "Sneha R.",
      avatar: "/images/avatar_sneha.jpg",
      rating: 5,
      text: "Highly recommended! Professional, friendly and wonderful results.",
    },
    {
      name: "Amit V.",
      avatar: "/images/avatar_amit.jpg",
      rating: 5,
      text: "Booked a move-out clean and got 100% of my deposit back. Spotless!",
    },
    {
      name: "Ananya P.",
      avatar: "/images/avatar_ananya.jpg",
      rating: 5,
      text: "The kitchen and bathrooms look brand new. Outstanding attention to detail.",
    },
    {
      name: "Karan D.",
      avatar: "/images/avatar_karan.jpg",
      rating: 5,
      text: "Reliable, punctual and thorough every single week. Best service in town!",
    },
    {
      name: "Sunita G.",
      avatar: "/images/avatar_sunita.jpg",
      rating: 5,
      text: "Eco-friendly products that smell wonderful and are safe for kids and pets.",
    },
  ];

  // Triplicate reviews to allow smooth, seamless infinite scrolling in both directions
  const extendedReviews = [...reviews, ...reviews, ...reviews];
  const BASE_INDEX = reviews.length; // 8

  const [position, setPosition] = useState(BASE_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Responsive cardsPerView detection
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setPosition((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setPosition((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (position >= BASE_INDEX * 2) {
      setIsTransitioning(false);
      setPosition(position - BASE_INDEX);
    } else if (position < BASE_INDEX) {
      setIsTransitioning(false);
      setPosition(position + BASE_INDEX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !e.changedTouches || !e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section id="reviews" className="relative py-8 sm:py-10 lg:py-12 overflow-hidden bg-[#FBFDFB] border-b border-[#E8EDE9]">
      {/* Background with Organic Foliage: top-left leaves */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <Image
          src="/images/services_bg.jpg"
          alt=""
          fill
          priority={false}
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
      </div>

      {/* Mirrored bottom-right foliage accent */}
      <div className="absolute -bottom-16 -right-16 w-[320px] h-[320px] pointer-events-none -z-0 rotate-180 opacity-75">
        <Image
          src="/images/services_bg.jpg"
          alt=""
          fill
          priority={false}
          className="object-cover"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          {/* Eyebrow with Divider Lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-2 sm:mb-2.5">
            <div className="h-[1px] w-10 sm:w-14 bg-[#48B900]/35 rounded-full" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5E9] text-[#102B4E] text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em]">
              <Home className="w-3.5 h-3.5 text-[#102B4E] shrink-0" />
              <span>WHAT OUR CUSTOMERS SAY</span>
            </div>
            <div className="h-[1px] w-10 sm:w-14 bg-[#48B900]/35 rounded-full" />
          </div>

          {/* Main Headline with Serif Typography and Green Underline Flourish */}
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-serif font-bold text-[#102B4E] tracking-tight leading-[1.18] mb-1.5 sm:mb-2">
            Real Homes.{" "}
            <span className="relative inline-block text-[#48B900]">
              Real Happiness.
              <svg
                className="absolute -bottom-1 left-0 w-full h-2.5 text-[#48B900] pointer-events-none"
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

          {/* Single-line Subtitle Description on Tablet & Desktop */}
          <p className="text-[13.5px] sm:text-[14.5px] text-[#4A5D73] font-normal leading-normal whitespace-normal sm:whitespace-nowrap">
            Don&apos;t just take our word for it. Hear from families who trust us to keep their homes sparkling clean.
          </p>
        </div>

        {/* Carousel Slider with Navigation Arrows (Clean bottom without pagination dots) */}
        <div className="relative px-6 sm:px-8 lg:px-8">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md flex items-center justify-center text-gray-700 hover:text-[#48B900] hover:border-[#48B900] transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          {/* Carousel Viewport */}
          <div
            className="overflow-hidden w-full mx-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
              style={{
                transform: `translateX(-${(position / extendedReviews.length) * 100}%)`,
                width: `${(extendedReviews.length / cardsPerView) * 100}%`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedReviews.map((review, idx) => (
                <div
                  key={idx}
                  style={{ width: `${(1 / extendedReviews.length) * 100}%` }}
                  className="px-2 sm:px-2.5 flex"
                >
                  <div className="bg-white rounded-[20px] border border-[#EAF0EA] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(46,154,0,0.08)] hover:border-[#48B900]/30 transition-all duration-300 p-5 sm:p-5.5 flex flex-col justify-start w-full min-h-[145px] sm:min-h-[155px]">
                    {/* Top Row: Real Person Portrait Avatar + Name & Stars */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border border-neutral-100 shadow-xs">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={44}
                          height={44}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-[15px] sm:text-[15.5px] text-[#102B4E] leading-tight">
                          {review.name}
                        </span>
                        <div className="flex items-center gap-0.5 mt-1 text-[#F59E0B]">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Complete Review Text with Comfortable Line Height */}
                    <p className="text-[13px] sm:text-[13.5px] text-[#334155] font-normal leading-[1.6]">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md flex items-center justify-center text-gray-700 hover:text-[#48B900] hover:border-[#48B900] transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
