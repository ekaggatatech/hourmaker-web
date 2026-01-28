/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3a86ff",
          dark: "#2667cc",
          light: "#e6f0ff",
          accent: "#5d9cff",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        foreground: "#2d3748",
        muted: "#f7fafc",
        "muted-foreground": "#64748b",
        border: "#e2e8f0",
        destructive: "#ef4444",
        success: "#10b981",
        warning: "#f59e0b",
        footer: {
          DEFAULT: "#1a202c",
          foreground: "#ffffff",
          muted: "#a0aec0",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
