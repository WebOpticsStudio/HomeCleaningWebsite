import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CleanHome — Professional Home Cleaning Services | Cleaner Homes, Happier Lives",
  description: "Reliable, professional, and affordable home cleaning services for busy lives. We handle the cleaning, so you can focus on what matters most.",
  keywords: ["home cleaning", "deep cleaning", "recurring cleaning", "maid service", "eco-friendly cleaning"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased font-sans text-[#333D37] bg-white min-h-screen selection:bg-[#176B43]/20 selection:text-[#104D32]">
        {children}
      </body>
    </html>
  );
}
