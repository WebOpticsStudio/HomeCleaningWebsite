"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface NavbarProps {
  onBookCleaning?: () => void;
}

export function Navbar({ onBookCleaning }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const [activeSection, setActiveSection] = useState(isContactPage ? "contact" : "hero");

  useEffect(() => {
    if (isContactPage) {
      setActiveSection("contact");
      const handleScroll = () => {
        setScrolled(window.scrollY > 15);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // Section tracking for active green indicator on home page
      const sections = ["contact", "about", "services", "hero"];
      const scrollPos = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isContactPage]);

  const navLinks = [
    { label: "Home", href: isContactPage ? "/#hero" : "#hero", id: "hero" },
    { label: "Services", href: isContactPage ? "/#services" : "#services", id: "services" },
    { label: "About Us", href: isContactPage ? "/#about" : "#about", id: "about" },
    { label: "Contact", href: isContactPage ? "/contact" : "#contact", id: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full pt-0 px-3.5 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <header
        className={`pointer-events-auto relative max-w-7xl mx-auto w-full h-[51px] sm:h-[55px] lg:h-[57px] flex items-center justify-between px-5 sm:px-6 lg:px-8 rounded-[21px] transition-all duration-300 ${
          scrolled || isContactPage
            ? "bg-white/95 backdrop-blur-[16px] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(16,43,78,0.08)]"
            : "bg-white/[0.85] backdrop-blur-[12px] border border-white/60 shadow-none"
        }`}
      >
        {/* Left: Brand Logo */}
        <div className="shrink-0 flex items-center z-10">
          <BrandLogo />
        </div>

        {/* Middle: Navigation links mathematically centred */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-[34px] lg:gap-[42px] text-[15px] lg:text-[16px] leading-none">
          {navLinks.map((link) => {
            const isActive = isContactPage
              ? link.id === "contact"
              : activeSection === link.id;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-1 tracking-[-0.01em] transition-colors duration-200 ${
                  isActive
                    ? "text-[#102B4E] font-bold"
                    : "text-[#102B4E]/80 hover:text-[#45A915] font-semibold"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#45A915] rounded-full transition-all duration-200" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Prominent green Book a Cleaning button with generous padding and width */}
        <div className="hidden md:flex items-center shrink-0 z-10">
          <button
            onClick={onBookCleaning}
            className="h-[36px] sm:h-[37px] px-6 sm:px-7 rounded-full inline-flex items-center justify-center bg-[#45A915] hover:bg-[#3C9212] text-white text-[14px] sm:text-[14.5px] font-bold font-sans tracking-wide whitespace-nowrap shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>Book a Cleaning</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2.5 z-10">
          <button
            onClick={onBookCleaning}
            className="inline-flex items-center bg-[#45A915] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs"
          >
            <span>Book</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#102B4E] hover:bg-black/5 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-7xl mx-auto mt-2 bg-white/95 backdrop-blur-[12px] border border-white/70 rounded-[21px] px-6 py-4.5 shadow-lg md:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-[15px] sm:text-[16px] font-semibold font-sans text-[#102B4E]">
            {navLinks.map((link) => {
              const isActive = isContactPage
                ? link.id === "contact"
                : activeSection === link.id;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 flex items-center justify-between transition-colors ${
                    isActive ? "text-[#45A915] font-bold" : "hover:text-[#45A915]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#45A915]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3.5 mt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookCleaning) onBookCleaning();
              }}
              className="w-full flex items-center justify-center bg-[#45A915] text-white text-[14px] font-bold font-sans py-2.5 rounded-full shadow-sm cursor-pointer"
            >
              <span>Book a Cleaning</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
