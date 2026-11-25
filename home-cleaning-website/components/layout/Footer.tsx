"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@/components/ui/Icons";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E8EDE9] pt-14 pb-8 text-[13px] text-[#2D3732]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Main Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          {/* Column 1: Brand & Socials (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-3.5">
              <BrandLogo />
            </div>

            <p className="text-[13px] leading-relaxed text-[#2D3732] max-w-sm mb-5 font-normal">
              Professional home cleaning services for modern living. Cleaner homes. Happier lives.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F5F8F5] hover:bg-[#176B43] text-[#151B19] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F5F8F5] hover:bg-[#176B43] text-[#151B19] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F5F8F5] hover:bg-[#176B43] text-[#151B19] hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F5F8F5] hover:bg-[#176B43] text-[#151B19] hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[14px] text-[#151B19] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-[12.5px]">
              <li>
                <a href="#hero" className="hover:text-[#176B43] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#176B43] transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#176B43] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#176B43] transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#176B43] transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#176B43] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (Spans 2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[14px] text-[#151B19] mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-[12.5px]">
              <li>
                <a href="#services" className="hover:text-[#176B43] transition-colors">Standard Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#176B43] transition-colors">Deep Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#176B43] transition-colors">Move In / Move Out</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#176B43] transition-colors">Recurring Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#176B43] transition-colors">Window Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#176B43] transition-colors">Carpet Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#176B43] transition-colors">Add-On Services</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us & Handwritten Signature (Spans 3.5 cols) */}
          <div id="contact" className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-[14px] text-[#151B19] mb-4">Contact Us</h4>
              <ul className="space-y-3 text-[12.5px]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#176B43] shrink-0 mt-0.5" />
                  <span>123 Clean Street, Zirakpur, Punjab 140603</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#176B43] shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-[#176B43] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#176B43] shrink-0" />
                  <a href="mailto:hello@cleanhome.com" className="hover:text-[#176B43] transition-colors">
                    hello@cleanhome.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#176B43] shrink-0" />
                  <span>Mon – Sat: 8 AM – 7 PM</span>
                </li>
              </ul>
            </div>

            {/* Clean sans-serif brand phrase */}
            <div className="pt-6 select-none">
              <div className="font-sans text-xl sm:text-2xl font-black text-[#151B19] tracking-tight leading-tight">
                Cleaner Homes,<br />Happier Lives
              </div>
              <svg className="w-20 h-2 text-[#176B43] mt-0.5" viewBox="0 0 100 8" fill="none">
                <path d="M2 5C30 2 70 2 98 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 border-t border-[#EEF2EF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5D6560]/80 gap-3">
          <div>
            &copy; {currentYear} CleanHome. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-[#176B43] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#about" className="hover:text-[#176B43] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
