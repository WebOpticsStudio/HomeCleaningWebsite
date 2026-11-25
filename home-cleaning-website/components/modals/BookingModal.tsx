"use client";

import React, { useState } from "react";
import { X, Check, Calendar, Clock, Sparkles, Shield, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [service, setService] = useState(initialService || "Standard Home Cleaning");
  const [bedrooms, setBedrooms] = useState("2 Bedrooms");
  const [frequency, setFrequency] = useState("Bi-Weekly (Save 15%)");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const calculatePrice = () => {
    let base = 119;
    if (service.includes("Deep")) base = 189;
    if (service.includes("Move")) base = 249;
    if (service.includes("Window")) base = 89;
    if (service.includes("Carpet")) base = 129;

    if (bedrooms === "3 Bedrooms") base += 35;
    if (bedrooms === "4+ Bedrooms") base += 65;

    if (frequency.includes("15%")) base = Math.round(base * 0.85);
    return base;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-neutral-100 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#EEF2EF]">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#176B43]">
              FAST & EASY RESERVATION
            </div>
            <h3 className="text-xl font-extrabold text-[#151B19]">Book a Cleaning</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-[#EAF3EC] text-[#176B43] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>
            <h4 className="text-xl font-bold text-[#151B19] mb-2">Booking Confirmed!</h4>
            <p className="text-xs text-[#5D6560] leading-relaxed max-w-sm mx-auto mb-6">
              Thank you {name || "there"}! We have received your request for <strong>{service}</strong>. Our team will contact you shortly at <strong>{phone || email || "+1 (555) 123-4567"}</strong> to confirm your slot.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#176B43] hover:bg-[#104D32] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-[#151B19] mb-1.5">
                Cleaning Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#151B19] focus:outline-none focus:border-[#176B43]"
              >
                <option>Standard Home Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move In / Move Out Cleaning</option>
                <option>Recurring Cleaning</option>
                <option>Add-On Services</option>
                <option>Window Cleaning</option>
                <option>Carpet & Upholstery</option>
              </select>
            </div>

            {/* Bedrooms & Frequency Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#151B19] mb-1.5">
                  Home Size
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#151B19] focus:outline-none focus:border-[#176B43]"
                >
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#151B19] mb-1.5">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#151B19] focus:outline-none focus:border-[#176B43]"
                >
                  <option>One-Time Clean</option>
                  <option>Weekly (Save 20%)</option>
                  <option>Bi-Weekly (Save 15%)</option>
                  <option>Monthly (Save 10%)</option>
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-bold text-[#151B19] mb-1.5">
                Preferred Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2 text-[#151B19] focus:outline-none focus:border-[#176B43]"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-2.5 pt-1">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#151B19] placeholder:text-gray-400 focus:outline-none focus:border-[#176B43]"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#151B19] placeholder:text-gray-400 focus:outline-none focus:border-[#176B43]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#151B19] placeholder:text-gray-400 focus:outline-none focus:border-[#176B43]"
                />
              </div>
            </div>

            {/* Estimated Quote Summary */}
            <div className="p-3 bg-[#EAF3EC] rounded-xl flex items-center justify-between border border-[#CAD8CE]/50">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#176B43] block">
                  Estimated Total
                </span>
                <span className="text-xs text-[#5D6560]">No payment required now</span>
              </div>
              <div className="text-xl font-extrabold text-[#176B43]">
                ${calculatePrice()}
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full bg-[#176B43] hover:bg-[#104D32] text-white text-xs font-bold py-3 rounded-full shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm Reservation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-center text-[10.5px] text-[#5D6560] flex items-center justify-center gap-1.5">
              <Shield className="w-3 h-3 text-[#176B43]" />
              <span>100% Satisfaction Guarantee &bull; Free Cancelation</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
