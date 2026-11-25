"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ArrowRight, X } from "lucide-react";

export function ReviewsSection() {
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);

  const reviews = [
    {
      name: "Priya S.",
      location: "Verified Homeowner",
      avatar: "/images/avatar_priya.jpg",
      rating: 5,
      text: "Amazing service! My home has never looked this clean. The team was professional, friendly and on time.",
    },
    {
      name: "Rahul K.",
      location: "Recurring Client",
      avatar: "/images/avatar_rahul.jpg",
      rating: 5,
      text: "Super easy to book and the results are always excellent. Highly recommend HomeShine!",
    },
    {
      name: "Neha M.",
      location: "Apartment Resident",
      avatar: "/images/avatar_neha.jpg",
      rating: 5,
      text: "Reliable, trustworthy and thorough. It's such a relief coming home to a clean house every week!",
    },
  ];

  const additionalReviews = [
    {
      name: "Amit V.",
      location: "Deep Clean Client",
      avatar: "/images/avatar_rahul.jpg",
      rating: 5,
      text: "Booked a move-out clean and got 100% of my security deposit back. Spotless kitchen and bathroom!",
    },
    {
      name: "Sunita G.",
      location: "Bi-Weekly Clean",
      avatar: "/images/avatar_priya.jpg",
      rating: 5,
      text: "The eco-friendly products smell amazing and don't trigger my allergies. The cleaners are polite and gentle around our pets.",
    },
    {
      name: "Karan D.",
      location: "Townhome Owner",
      avatar: "/images/avatar_neha.jpg",
      rating: 5,
      text: "Exceptional attention to baseboards and window tracks. Communication was seamless from booking to completion.",
    },
  ];

  return (
    <section id="reviews" className="py-12 bg-white border-b border-[#F0F4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#176B43] mb-1.5">
              WHAT OUR CUSTOMERS SAY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B19] tracking-tight">
              Real Homes. Real Happiness.
            </h2>
          </div>

          <button
            onClick={() => setShowAllReviewsModal(true)}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#151B19] hover:text-[#176B43] transition-colors cursor-pointer group self-start sm:self-auto"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 text-[#176B43] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Exactly 3 review cards in 1 row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E8ECE9] p-5 shadow-subtle hover:shadow-card hover:border-[#176B43]/30 transition-all flex flex-col justify-between"
            >
              {/* Testimonial Quote */}
              <p className="text-[14px] text-[#0E1412] leading-relaxed mb-5 italic font-normal">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author & Star Rating row */}
              <div className="flex items-center justify-between pt-3 border-t border-[#F0F4F1]">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#CAD8CE]">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[13.5px] text-[#0E1412] leading-tight">
                      {review.name}
                    </div>
                  </div>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Reviews Modal */}
      {showAllReviewsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-neutral-100 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-[#151B19]">Customer Reviews & Ratings</h3>
                <p className="text-xs text-[#5D6560]">Overall 4.9/5 from over 850+ verified homes</p>
              </div>
              <button
                onClick={() => setShowAllReviewsModal(false)}
                className="p-1 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {[...reviews, ...additionalReviews].map((review, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E8ECE9]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                        <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-[#151B19]">{review.name}</div>
                        <div className="text-[10px] text-[#176B43] font-medium">{review.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-[#F59E0B]">
                      {[...Array(review.rating)].map((_, si) => (
                        <Star key={si} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[#5D6560] italic">&ldquo;{review.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
