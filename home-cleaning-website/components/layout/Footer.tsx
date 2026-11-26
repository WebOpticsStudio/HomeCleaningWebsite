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
    <footer className="bg-white border-t border-[#E8EDE9] pt-7 sm:pt-8 pb-5 text-[13px] text-[#2D3732]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Main Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 lg:gap-8 pb-6 sm:pb-7">
          {/* Column 1: Brand & Socials (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-3">
              <BrandLogo />
            </div>

            <p className="text-[13px] leading-relaxed text-[#2D3732] max-w-sm mb-3.5 font-normal">
              Professional home cleaning services for modern living. Cleaner homes. Happier lives.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7.5 h-7.5 rounded-full bg-[#F5F8F5] hover:bg-[#176B43] text-[#151B19] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7.5 h-7.5 rounded-full bg-[#F5F8F5] hover:bg-[#176B43] text-[#151B19] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7.5 h-7.5 rounded-full bg-[#F5F8F5] hover:bg-[#176B43] text-[#151B19] hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7.5 h-7.5 rounded-full bg-[#F5F8F5] hover:bg-[#176B43] text-[#151B19] hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[13.5px] text-[#151B19] mb-3">Quick Links</h4>
            <ul className="space-y-2 text-[12.5px]">
              <li>
                <Link href="/#hero" className="hover:text-[#176B43] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#176B43] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#176B43] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#176B43] transition-colors">Reviews</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#176B43] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (Spans 2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[13.5px] text-[#151B19] mb-3">Our Services</h4>
            <ul className="space-y-2 text-[12.5px]">
              <li>
                <Link href="/#services" className="hover:text-[#176B43] transition-colors">Basic Home Cleaning</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#176B43] transition-colors">Deep Cleaning</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#176B43] transition-colors">Bathroom Cleaning</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#176B43] transition-colors">Kitchen Cleaning</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#176B43] transition-colors">Move In / Move Out</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Spans 3.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[13.5px] text-[#151B19] mb-3">Contact Us</h4>
            <ul className="space-y-2 text-[12.5px]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#176B43] shrink-0 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#176B43] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#176B43] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#176B43] shrink-0" />
                <a href="mailto:hello@cleanhome.in" className="hover:text-[#176B43] transition-colors">
                  hello@cleanhome.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#176B43] shrink-0" />
                <span>Mon – Sat: 8 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-4 border-t border-[#EEF2EF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5D6560]/80 gap-2">
          <div>
            &copy; {currentYear} CleanHome. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="/#about" className="hover:text-[#176B43] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/#about" className="hover:text-[#176B43] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
