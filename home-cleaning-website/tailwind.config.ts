import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#176B43",
          dark: "#104D32",
          light: "#EAF3EC",
          hover: "#135836",
        },
        charcoal: {
          DEFAULT: "#151B19",
          muted: "#5D6560",
          light: "#8A948E",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          warm: "#F5F8F5",
          alt: "#F8FAF8",
          card: "#FFFFFF",
          border: "#E7ECE8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Open Sans", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(23, 107, 67, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        hover: "0 10px 25px -4px rgba(23, 107, 67, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06)",
        badge: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  plugins: [],
};

export default config;
