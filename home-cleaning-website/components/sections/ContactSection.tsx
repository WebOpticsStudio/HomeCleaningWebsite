"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Home, Phone, Mail, MapPin, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAFCFA] via-[#FCFDFC] to-[#F7FAF6] py-8 sm:py-10 lg:py-12 flex items-center"
    >
      {/* Top-Left Clean Organic Foliage (Visible on tablet & desktop) */}
      <div className="hidden sm:block absolute top-0 left-0 w-16 lg:w-24 pointer-events-none z-10 select-none">
        <Image
          src="/images/contact_leaves_tl_clean.png"
          alt=""
          width={90}
          height={320}
          className="w-full h-auto object-contain object-top-left"
          priority
        />
      </div>

      {/* Right Side Background: Ultra High Resolution living room with sofa, plant, table, towels & spray bottle */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[38%] xl:w-[35%] max-w-[520px] pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/images/contact_decor_ultra_hq.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 38vw, 100vw"
          className="object-cover object-right-bottom"
          priority
        />
      </div>

      {/* Bottom Right Soft Organic Mint Swoosh */}
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-gradient-to-t from-[#DDF2DA]/50 via-[#EAF5E9]/30 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* Left Column: Heading, Subtitle & 4 Contact Cards (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Eyebrow Badge with flanking divider lines */}
            <div className="flex items-center gap-3 sm:gap-3.5 mb-2 sm:mb-2.5">
              <div className="h-[1px] w-10 sm:w-14 bg-[#48B900]/35 rounded-full" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5E9] text-[#102B4E] text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em]">
                <Home className="w-3.5 h-3.5 text-[#102B4E] shrink-0" />
                <span>CONTACT US</span>
              </div>
              <div className="h-[1px] w-10 sm:w-14 bg-[#48B900]/35 rounded-full" />
            </div>

            {/* Main Headline with Serif Typography and Green Flourish Underline */}
            <h1 className="text-[30px] sm:text-[35px] lg:text-[38px] xl:text-[42px] font-serif font-bold text-[#102B4E] tracking-tight leading-[1.14] mb-1.5 sm:mb-2">
              Let&apos;s Make Your Home{" "}
              <span className="relative inline-block text-[#48B900]">
                Sparkle Together
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 sm:h-3 text-[#48B900] pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 3 7 C 50 12, 150 12, 197 4"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15px] text-[#4A5568] max-w-md mb-4 sm:mb-5 leading-relaxed font-normal">
              Have a question or need a cleaning service?<br className="hidden sm:inline" /> We&apos;re here to help!
            </p>

            {/* 4 Contact Items Row: Icon on top, content underneath (Centered columns with vertical dividers) */}
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-start gap-y-4 gap-x-3 sm:gap-0 max-w-[490px] pt-1">
              
              {/* 1. Call Us */}
              <a
                href="tel:+919876543210"
                className="flex flex-col items-center text-center group cursor-pointer sm:pr-3.5 lg:pr-4 shrink-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF5E9] group-hover:bg-[#48B900] text-[#102B4E] group-hover:text-white flex items-center justify-center transition-colors mb-1.5 shadow-2xs">
                  <Phone className="w-4 h-4 text-[#102B4E] group-hover:text-white transition-colors" />
                </div>
                <div className="text-[12px] sm:text-[12.5px] font-bold text-[#102B4E] leading-tight">
                  Call Us
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#102B4E] font-medium group-hover:text-[#48B900] transition-colors whitespace-nowrap mt-0.5">
                  +91 98765 43210
                </div>
              </a>

              {/* Vertical divider */}
              <div className="hidden sm:block h-9 sm:h-10 w-[1px] bg-gray-200/90 mx-1 lg:mx-1.5 shrink-0 self-center" />

              {/* 2. WhatsApp */}
              <a
                href="https://wa.me/917338481383?text=Hi%21%20I%27m%20interested%20in%20your%20home%20cleaning%20services.%20I%27d%20like%20to%20know%20more%20about%20your%20services%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group cursor-pointer sm:px-3.5 lg:px-4 shrink-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF5E9] group-hover:bg-[#48B900] text-[#48B900] group-hover:text-white flex items-center justify-center transition-colors mb-1.5 shadow-2xs">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div className="text-[12px] sm:text-[12.5px] font-bold text-[#102B4E] leading-tight">
                  WhatsApp
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#102B4E] font-medium group-hover:text-[#48B900] transition-colors whitespace-nowrap mt-0.5">
                  Chat Now
                </div>
              </a>

              {/* Vertical divider */}
              <div className="hidden sm:block h-9 sm:h-10 w-[1px] bg-gray-200/90 mx-1 lg:mx-1.5 shrink-0 self-center" />

              {/* 3. Email Us */}
              <a
                href="mailto:hello@cleanhome.in"
                className="flex flex-col items-center text-center group cursor-pointer sm:px-3.5 lg:px-4 shrink-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF5E9] group-hover:bg-[#48B900] text-[#48B900] group-hover:text-white flex items-center justify-center transition-colors mb-1.5 shadow-2xs">
                  <Mail className="w-4 h-4 text-[#48B900] group-hover:text-white transition-colors" />
                </div>
                <div className="text-[12px] sm:text-[12.5px] font-bold text-[#102B4E] leading-tight">
                  Email Us
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#102B4E] font-medium group-hover:text-[#48B900] transition-colors whitespace-nowrap mt-0.5">
                  hello@cleanhome.in
                </div>
              </a>

              {/* Vertical divider */}
              <div className="hidden sm:block h-9 sm:h-10 w-[1px] bg-gray-200/90 mx-1 lg:mx-1.5 shrink-0 self-center" />

              {/* 4. Our Location */}
              <div className="flex flex-col items-center text-center sm:pl-3.5 lg:pl-4 shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF5E9] text-[#48B900] flex items-center justify-center mb-1.5 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-[12px] sm:text-[12.5px] font-bold text-[#102B4E] leading-tight">
                  Our Location
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#102B4E] font-medium whitespace-nowrap mt-0.5">
                  Bangalore
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: "Send Us a Message" Floating White Card (Moved left towards center) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-start lg:-ml-2 xl:-ml-6">
            <div className="w-full max-w-[340px] sm:max-w-[350px] bg-white rounded-[24px] sm:rounded-[26px] p-5 sm:p-5.5 lg:p-6 shadow-[0_12px_36px_rgba(16,43,78,0.08)] border border-[#E4EDE4] relative z-10 backdrop-blur-sm">
              <h3 className="text-[20px] sm:text-[21.5px] font-serif font-bold text-[#102B4E] tracking-normal mb-3 sm:mb-3.5">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <div className="py-6 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-11 h-11 rounded-full bg-[#EAF5E9] text-[#48B900] flex items-center justify-center mx-auto mb-2.5 shadow-xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#102B4E] mb-1">Message Sent!</h4>
                  <p className="text-xs text-gray-500 mb-3 max-w-xs mx-auto">
                    Thank you for reaching out. We will get back to you shortly!
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", message: "" });
                    }}
                    className="text-xs font-semibold text-[#48B900] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                  {/* Your Name */}
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 text-[13px] rounded-xl border border-gray-200/90 bg-[#FCFDFC] focus:bg-white focus:border-[#48B900] focus:ring-2 focus:ring-[#48B900]/15 outline-none transition-all placeholder:text-gray-400 text-[#102B4E]"
                    />
                  </div>

                  {/* Your Mobile Number */}
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your Mobile Number"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 text-[13px] rounded-xl border border-gray-200/90 bg-[#FCFDFC] focus:bg-white focus:border-[#48B900] focus:ring-2 focus:ring-[#48B900]/15 outline-none transition-all placeholder:text-gray-400 text-[#102B4E]"
                    />
                  </div>

                  {/* Your Message */}
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5 pointer-events-none" />
                    <textarea
                      required
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 text-[13px] rounded-xl border border-gray-200/90 bg-[#FCFDFC] focus:bg-white focus:border-[#48B900] focus:ring-2 focus:ring-[#48B900]/15 outline-none transition-all placeholder:text-gray-400 text-[#102B4E] resize-none min-h-[64px] sm:min-h-[70px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-full bg-[#48B900] hover:bg-[#3FA200] active:scale-[0.99] text-white font-bold text-[13.5px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer mt-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
