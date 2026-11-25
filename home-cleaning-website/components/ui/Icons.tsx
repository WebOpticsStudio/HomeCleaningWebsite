import React from "react";

export function HouseLogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function EcoLeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg width="20" height="20" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg width="20" height="20" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CalendarClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg width="20" height="20" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

export function GuaranteeStarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg width="20" height="20" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function SprayBottleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg width="20" height="20" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 6h4l2 4H8l2-4Z" />
      <path d="M8 10v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10" />
      <path d="M12 2v4M8 4l-4 2" />
    </svg>
  );
}

export function BedSleepIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg width="20" height="20" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
    </svg>
  );
}

export function SqueegeeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg width="20" height="20" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5h18v3H3z" />
      <path d="M12 8v13" />
      <path d="M10 21h4" />
      <path d="m6 8 1 2M18 8l-1 2" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg width="16" height="16" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg width="16" height="16" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg width="16" height="16" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6Z" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg width="16" height="16" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg width="22" height="22" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.34-1.92 1.43-.53.09-1.21.13-3.69-.88-2.58-1.06-4.22-3.68-4.35-3.86-.13-.18-1.04-1.39-1.04-2.65 0-1.26.66-1.88.89-2.14.24-.26.52-.33.7-.33.18 0 .36 0 .52.01.17.01.39-.07.61.47.23.54.78 1.91.85 2.05.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.3.35-.43.47-.14.13-.29.28-.13.56.16.28.73 1.2 1.56 1.94 1.07.96 1.97 1.25 2.25 1.39.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.63-.14.26.09 1.66.78 1.95.92.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
    </svg>
  );
}

export function OnTimeClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg width="26" height="26" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 6 12 12 16 14" />
      <path d="M3 8H1" />
      <path d="M3 16H1" />
    </svg>
  );
}

export function HouseSparklesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg width="26" height="26" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
      <path d="M19 3v4M17 5h4" strokeWidth="1.8" />
    </svg>
  );
}

export function HouseHeartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg width="26" height="26" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path
        d="M12 16.5c-2.4-1.8-3.5-3.2-3.5-4.5 0-1.2 1-2 2-2 .8 0 1.3.4 1.5.8.2-.4.7-.8 1.5-.8 1 0 2 .8 2 2 0 1.3-1.1 2.7-3.5 4.5z"
        stroke="#45A915"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  );
}
