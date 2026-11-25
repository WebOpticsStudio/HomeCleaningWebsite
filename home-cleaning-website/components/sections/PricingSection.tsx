"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onBookCleaning?: (tierName: string) => void;
}

export function PricingSection({ onBookCleaning }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"one-time" | "recurring">("recurring");

  const plans = [
    {
      name: "Standard Cleaning",
      desc: "Perfect for routine upkeep & busy households.",
      price: billingCycle === "recurring" ? "$99" : "$119",
      popular: false,
      features: [
        "Dusting all accessible surfaces",
        "Vacuuming & mopping all floors",
        "Kitchen counters, stovetop & sink",
        "Complete bathroom sanitation",
        "Beds made & trash emptied",
      ],
    },
    {
      name: "Deep Cleaning",
      desc: "Intensive, top-to-bottom detail for a healthier home.",
      price: billingCycle === "recurring" ? "$159" : "$189",
      popular: true,
      features: [
        "Everything in Standard Cleaning",
        "Baseboards, door frames & trim",
        "Inside microwave & exterior appliances",
        "Tile grout scrubbing & lime scale removal",
        "Under & behind reachable furniture",
      ],
    },
    {
      name: "Move In / Move Out",
      desc: "Spotless preparation for leases, sales, or fresh starts.",
      price: billingCycle === "recurring" ? "$219" : "$249",
      popular: false,
      features: [
        "Everything in Deep Cleaning",
        "Inside all kitchen & bath cabinets",
        "Inside oven & refrigerator deep clean",
        "Interior windows & sills detailed",
        "100% Deposit-back guarantee",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-12 bg-white border-b border-[#F0F4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#176B43] mb-1.5">
              SIMPLE & TRANSPARENT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B19] tracking-tight">
              Fair Pricing, No Hidden Fees
            </h2>
          </div>

          {/* Frequency Toggle */}
          <div className="inline-flex items-center p-1 bg-[#F5F8F5] rounded-full border border-[#E8EDE9] self-start sm:self-auto">
            <button
              onClick={() => setBillingCycle("recurring")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === "recurring"
                  ? "bg-[#176B43] text-white shadow-xs"
                  : "text-[#5D6560] hover:text-[#151B19]"
              }`}
            >
              Recurring (Save 15%)
            </button>
            <button
              onClick={() => setBillingCycle("one-time")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === "one-time"
                  ? "bg-[#176B43] text-white shadow-xs"
                  : "text-[#5D6560] hover:text-[#151B19]"
              }`}
            >
              One-Time Clean
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl border p-5 transition-all flex flex-col justify-between ${
                plan.popular
                  ? "border-[#176B43] shadow-hover ring-1 ring-[#176B43]/20"
                  : "border-[#E8ECE9] hover:border-[#176B43]/40 shadow-subtle"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-5 bg-[#176B43] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-bold text-[16px] text-[#151B19] mb-1">
                  {plan.name}
                </h3>
                <p className="text-[12px] text-[#5D6560] mb-4">
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-4 pb-4 border-b border-[#F0F4F1]">
                  <span className="text-3xl font-extrabold text-[#151B19] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#5D6560] font-medium">/ clean</span>
                </div>

                <ul className="space-y-2 mb-6 text-[12px] text-[#5D6560]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#EAF3EC] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#176B43] stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onBookCleaning && onBookCleaning(plan.name)}
                className={`w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  plan.popular
                    ? "bg-[#176B43] hover:bg-[#104D32] text-white shadow-xs"
                    : "bg-[#F5F8F5] hover:bg-[#EAF3EC] text-[#151B19] hover:text-[#176B43]"
                }`}
              >
                <span>Select & Book</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
