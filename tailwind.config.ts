import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F5C518",
          yellowLight: "#FDE68A",
          yellowPale: "#FFFBEB",
          green: "#2D5E1E",
          greenMid: "#3D7A28",
          greenLight: "#D1EDCA",
          red: "#C0392B",
          redLight: "#FDECEA",
          cream: "#FDFBF3",
          softYellow: "#FEF9E7",
          warmWhite: "#FFFDF5",
          brown: "#6B4226",
          brownLight: "#C8956C",
          charcoal: "#1C1C1C",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.375rem, 2.5vw, 2rem)", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(160deg, rgba(28, 22, 8, 0.72) 0%, rgba(28, 22, 8, 0.45) 50%, rgba(28, 22, 8, 0.65) 100%)",
        "yellow-gradient": "linear-gradient(135deg, #F5C518 0%, #F59E0B 100%)",
        "green-gradient": "linear-gradient(135deg, #2D5E1E 0%, #3D7A28 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(255,255,255,0) 40%, rgba(28,22,8,0.85) 100%)",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(28, 22, 8, 0.08), 0 1px 4px rgba(28, 22, 8, 0.04)",
        "card-hover": "0 12px 40px rgba(28, 22, 8, 0.14), 0 4px 12px rgba(28, 22, 8, 0.06)",
        "yellow-glow": "0 4px 24px rgba(245, 197, 24, 0.35)",
        "green-glow": "0 4px 24px rgba(45, 94, 30, 0.3)",
        "inner-top": "inset 0 1px 0 rgba(255,255,255,0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 4s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
