"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Home, ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewItem {
  name: string;
  initial: string;
  rating: number;
  text: string;
}

export function ReviewsSection() {
  const reviews: ReviewItem[] = [
    {
      name: "Priya S.",
      initial: "P",
      rating: 5,
      text: "Very professional and thorough. Our home feels fresh and clean!",
    },
    {
      name: "Rahul K.",
      initial: "R",
      rating: 5,
      text: "Excellent service. The team was punctual and very courteous.",
    },
    {
      name: "Neha M.",
      initial: "N",
      rating: 5,
      text: "Amazing deep cleaning! Every corner was spotless.",
    },
    {
      name: "Sneha R.",
      initial: "S",
      rating: 5,
      text: "Highly recommended! Professional, friendly and great results.",
    },
    {
      name: "Amit V.",
      initial: "A",
      rating: 5,
      text: "Booked a move-out clean and got 100% of my deposit back. Spotless!",
    },
    {
      name: "Ananya P.",
      initial: "A",
      rating: 5,
      text: "The kitchen and bathrooms look brand new. Outstanding attention to detail.",
    },
    {
      name: "Karan D.",
      initial: "K",
      rating: 5,
      text: "Reliable and thorough every single week. Best cleaning service in town!",
    },
    {
      name: "Sunita G.",
      initial: "S",
      rating: 5,
      text: "Eco-friendly products smell wonderful and are safe for our pets and kids.",
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
      // Seamlessly jump back to middle set
      setIsTransitioning(false);
      setPosition(position - BASE_INDEX);
    } else if (position < BASE_INDEX) {
      // Seamlessly jump forward to middle set
      setIsTransitioning(false);
      setPosition(position + BASE_INDEX);
    }
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setPosition(BASE_INDEX + index);
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

  // Compute active dot index (0 to 7)
  const activeDot = ((position - BASE_INDEX) % reviews.length + reviews.length) % reviews.length;

  return (
    <section id="reviews" className="relative py-14 sm:py-18 lg:py-22 overflow-hidden bg-[#FBFDFB]">
      {/* Background with Organic Foliage: top-left leaves */}
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

      {/* Mirrored bottom-right foliage accent */}
      <div className="absolute -bottom-16 -right-16 w-[360px] h-[360px] pointer-events-none -z-0 rotate-180 opacity-80">
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
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow with Divider Lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-3.5">
            <div className="h-[1px] w-12 sm:w-16 bg-[#2E9A00]/30 rounded-full" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5E9] text-[#102B4E] text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em]">
              <Home className="w-3.5 h-3.5 text-[#102B4E]" />
              <span>WHAT OUR CUSTOMERS SAY</span>
            </div>
            <div className="h-[1px] w-12 sm:w-16 bg-[#2E9A00]/30 rounded-full" />
          </div>

          {/* Main Headline with Serif Typography and Green Underline Flourish */}
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-serif font-bold text-[#102B4E] tracking-tight leading-[1.18] mb-2 sm:mb-2.5">
            Real Homes.{" "}
            <span className="relative inline-block text-[#2E9A00]">
              Real Happiness.
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
          <p className="text-[14px] sm:text-[15.5px] text-[#4A5D73] font-normal leading-relaxed max-w-[620px] mx-auto">
            Don&apos;t just take our word for it. Hear from families who trust us to keep their homes sparkling clean.
          </p>
        </div>

        {/* Carousel Slider with Navigation Arrows */}
        <div className="relative px-2 sm:px-6 lg:px-8">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md flex items-center justify-center text-gray-700 hover:text-[#2E9A00] hover:border-[#2E9A00] transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
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
                  <div className="bg-white rounded-[20px] border border-[#EAF0EA] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(46,154,0,0.08)] hover:border-[#2E9A00]/30 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-start w-full">
                    {/* Top Row: Letter Avatar + Name & Stars */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EAF5E9] text-[#1E7B49] font-bold text-[18px] sm:text-[19px] flex items-center justify-center shrink-0">
                        {review.initial}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[15px] sm:text-[16px] text-[#102B4E] leading-tight">
                          {review.name}
                        </span>
                        <div className="flex items-center gap-0.5 mt-1 text-[#F59E0B]">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-[13.5px] sm:text-[14px] text-[#334155] leading-relaxed font-normal">
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md flex items-center justify-center text-gray-700 hover:text-[#2E9A00] hover:border-[#2E9A00] transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* 8 Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-7 sm:mt-8">
          {reviews.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => handleDotClick(dotIdx)}
              aria-label={`Go to review ${dotIdx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === dotIdx
                  ? "w-2.5 bg-[#102B4E]"
                  : "w-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
