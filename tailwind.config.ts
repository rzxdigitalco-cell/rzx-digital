import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      maxWidth: {
        container: "1280px",
      },
      colors: {
        // RZX Digital Design System
        primary: {
          DEFAULT: "#2563EB", // Professional Blue
          foreground: "#F9FAFB",
        },
        secondary: {
          DEFAULT: "#06B6D4", // Modern Cyan
          foreground: "#F9FAFB",
        },
        accent: {
          DEFAULT: "#7C3AED", // used sparingly for highlights
          foreground: "#F9FAFB",
        },
        background: "#030712",
        surface: "#111827",
        border: "#1F2937",
        foreground: "#F9FAFB",
        muted: {
          DEFAULT: "#111827",
          foreground: "#9CA3AF",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F9FAFB",
        },
        card: {
          DEFAULT: "#111827",
          foreground: "#F9FAFB",
        },
        input: "#1F2937",
        ring: "#2563EB",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "20px",
        button: "16px",
        input: "14px",
        image: "20px",
        badge: "999px",
      },
      spacing: {
        18: "72px",
        30: "120px", // desktop section spacing
        20: "80px", // tablet section spacing
        16: "64px", // mobile section spacing
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgb(0 0 0 / 0.20)",
        "soft-lg": "0 12px 32px 0 rgb(0 0 0 / 0.28)",
        "card-hover": "0 16px 40px 0 rgb(0 0 0 / 0.32)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #2563EB 0%, #06B6D4 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
