"use client";

import React, { useState, useEffect } from "react";
import { X, Check, Shield, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(initialService || "Basic Home Cleaning");
  const [homeSize, setHomeSize] = useState("1 BHK");
  const [frequency, setFrequency] = useState("One-Time Clean");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("8 AM – 10 AM");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const calculatePrice = () => {
    let base = 2000;
    if (service === "Deep Cleaning") base = 2500;
    if (service === "Kitchen Cleaning") base = 2500;
    if (service === "Bathroom Cleaning") base = 1500;
    if (service === "Move In / Move Out Cleaning") base = 5000;

    if (homeSize === "2 BHK") base += 500;
    if (homeSize === "3 BHK") base += 1000;
    if (homeSize === "3+ BHK") base += 2000;

    return `₹${base.toLocaleString("en-IN")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* 
        Outer Modal Shell:
        - rounded-3xl at all 4 sides
        - overflow-hidden so the 4 rounded corners are always crisp and never cut by scrollbars
      */}
      <div className="relative bg-white rounded-[22px] sm:rounded-[28px] max-w-lg w-full shadow-2xl border border-neutral-100 flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden">

        {/* Fixed Header (Never scrolled, X button never overlapped) */}
        <div className="flex items-center justify-between px-5 sm:px-7 pt-4 sm:pt-5 pb-3.5 border-b border-[#EEF2EF] shrink-0 bg-white">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#48B900]">
              FAST & EASY RESERVATION
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#102B4E]">
              Book a Cleaning
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 px-6">
            <div className="w-14 h-14 bg-[#EAF5E9] text-[#48B900] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>
            <h4 className="text-xl font-bold text-[#102B4E] mb-2">Booking Confirmed!</h4>
            <p className="text-xs text-[#5D6560] leading-relaxed max-w-sm mx-auto mb-6">
              Thank you {name || "there"}! We have received your request for <strong>{service}</strong> for your <strong>{homeSize}</strong> on <strong>{date || "your preferred date"}</strong> ({timeSlot}). Our team will contact you shortly at <strong>{phone || "+91 73384 81383"}</strong> to confirm your slot.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#48B900] hover:bg-[#3FA200] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          /* 
            Scrollable Body:
            - Slim custom scrollbar with rounded thumb
            - Padded interior so scrollbar never touches the modal corners
          */
          <div className="overflow-y-auto px-5 sm:px-7 py-4 flex-1 [scrollbar-width:thin] [scrollbar-color:#CAD8CE_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#CAD8CE] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#9AB39F]">
            <form onSubmit={handleSubmit} className="space-y-3.5 pb-1">
              {/* 1. Contact Details First: Full Name, Phone Number, Email Address (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#102B4E] mb-1.5">
                  Your Details
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#102B4E] placeholder:text-gray-400 focus:outline-none focus:border-[#48B900]"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#102B4E] placeholder:text-gray-400 focus:outline-none focus:border-[#48B900]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#102B4E] placeholder:text-gray-400 focus:outline-none focus:border-[#48B900]"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Service Selection */}
              <div>
                <label className="block text-xs font-bold text-[#102B4E] mb-1.5">
                  Cleaning Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#102B4E] focus:outline-none focus:border-[#48B900] cursor-pointer"
                >
                  <option>Basic Home Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Kitchen Cleaning</option>
                  <option>Bathroom Cleaning</option>
                  <option>Move In / Move Out Cleaning</option>
                </select>
              </div>

              {/* 3. Home Size & Frequency Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#102B4E] mb-1.5">
                    Home Size
                  </label>
                  <select
                    value={homeSize}
                    onChange={(e) => setHomeSize(e.target.value)}
                    className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#102B4E] focus:outline-none focus:border-[#48B900] cursor-pointer"
                  >
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>3+ BHK</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102B4E] mb-1.5">
                    Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#102B4E] focus:outline-none focus:border-[#48B900] cursor-pointer"
                  >
                    <option>One-Time Clean</option>
                    <option>Weekly</option>
                    <option>Bi-Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>

              {/* 4. Date & Time Selection (Side by Side) */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#102B4E] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#102B4E] focus:outline-none focus:border-[#48B900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102B4E] mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full text-xs bg-[#F8FAF8] border border-[#CAD8CE] rounded-xl px-3 py-2.5 text-[#102B4E] focus:outline-none focus:border-[#48B900] cursor-pointer"
                  >
                    <option>8 AM – 10 AM</option>
                    <option>10 AM – 12 PM</option>
                    <option>12 PM – 2 PM</option>
                    <option>2 PM – 4 PM</option>
                    <option>4 PM – 6 PM</option>
                  </select>
                </div>
              </div>

              {/* 5. Estimated Quote Summary */}
              <div className="p-3 bg-[#EAF5E9] rounded-xl flex items-center justify-between border border-[#CAD8CE]/50">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#48B900] block">
                    Estimated Total
                  </span>
                  <span className="text-xs text-[#5D6560]">No payment required now</span>
                </div>
                <div className="text-xl font-extrabold text-[#48B900]">
                  {calculatePrice()}
                </div>
              </div>

              {/* 6. Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#48B900] hover:bg-[#3FA200] text-white text-xs font-bold py-3 rounded-full shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                <span>Request free quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center text-[10.5px] text-[#5D6560] flex items-center justify-center gap-1.5 pt-0.5">
                <Shield className="w-3 h-3 text-[#48B900]" />
                <span>100% Satisfaction Guarantee &bull; Free Cancelation</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
