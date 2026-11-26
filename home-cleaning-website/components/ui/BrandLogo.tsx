import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function BrandLogo({ className = "", size = "md", href = "/" }: BrandLogoProps) {
  const sizeConfig = {
    sm: {
      text: "text-[20px]",
      hIcon: "w-[15px] h-[19px]",
    },
    md: {
      text: "text-[22px] sm:text-[23.5px]",
      hIcon: "w-[17px] sm:w-[18px] h-[21.5px] sm:h-[23px]",
    },
    lg: {
      text: "text-[26px] sm:text-[28px]",
      hIcon: "w-[20px] sm:w-[22px] h-[25px] sm:h-[27px]",
    },
  };

  const current = sizeConfig[size];

  return (
    <Link
      href={href}
      className={`inline-flex items-center select-none group transition-opacity hover:opacity-95 ${className}`}
      aria-label="CleanHome"
    >
      <span className={`${current.text} font-black tracking-[-0.035em] leading-none inline-flex items-center whitespace-nowrap`}>
        {/* 'Clean' in deep navy */}
        <span className="text-[#102B4E]">Clean</span>

        {/* 'Home' in vibrant green with seamless, natural house-gable integrated into 'H' */}
        <span className="text-[#48B900] inline-flex items-center">
          <svg
            className={`${current.hIcon} shrink-0 text-[#48B900] transition-transform duration-200 group-hover:-translate-y-[0.5px]`}
            viewBox="0 0 18 22"
            fill="none"
            aria-hidden="true"
          >
            {/* Seamless pitched roof gable capping the two uprights of H */}
            <path
              d="M0.8 7L9 0.8L17.2 7"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Left vertical stem */}
            <rect x="2.0" y="6.4" width="3.2" height="14.6" rx="0.6" fill="currentColor" />
            {/* Right vertical stem */}
            <rect x="12.8" y="6.4" width="3.2" height="14.6" rx="0.6" fill="currentColor" />
            {/* Horizontal crossbar */}
            <rect x="2.0" y="12.2" width="14.0" height="2.8" fill="currentColor" />
          </svg>
          <span className="-ml-[0.5px]">ome</span>
        </span>
      </span>
    </Link>
  );
}
