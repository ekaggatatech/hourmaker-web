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
        // background: "#ffffff",
        // foreground: "#2d3748",
        // muted: "#f7fafc",
        // "muted-foreground": "#64748b",
        // border: "#e2e8f0",
        // destructive: "#ef4444",
        // success: "#10b981",
        // warning: "#f59e0b",
        // footer: {
        //   DEFAULT: "#1a202c",
        //   foreground: "#ffffff",
        //   muted: "#a0aec0",
        // },

        // THEME 1: Warm Cream (Softer, Inviting)
        // background: "#fffef7",
        // foreground: "#2d2b26",
        // muted: "#fef9e6",
        // "muted-foreground": "#8b7e6b",
        // border: "#f0e9da",
        // destructive: "#ef4444",
        // success: "#10b981",
        // warning: "#f59e0b",
        // footer: {
        //   DEFAULT: "#26221c",
        //   foreground: "#ffffff",
        //   muted: "#b7ab98",
        // },

        // THEME 2: Cool Gray (Modern, Minimalist)
        // background: "#ffffff",
        // foreground: "#1e2a3a",
        // muted: "#f0f2f5",
        // "muted-foreground": "#5a6e7c",
        // border: "#e2e8f0",
        // destructive: "#ef4444",
        // success: "#10b981",
        // warning: "#f59e0b",
        // footer: {
        //   DEFAULT: "#0f172a",
        //   foreground: "#ffffff",
        //   muted: "#8191a3",
        // },

        // THEME 3: Soft Sage (Natural, Calming)
        // background: "#fefef9",
        // foreground: "#2c3e2f",
        // muted: "#f0f4ec",
        // "muted-foreground": "#6b7b63",
        // border: "#e2e6dc",
        // destructive: "#ef4444",
        // success: "#10b981",
        // warning: "#f59e0b",
        // footer: {
        //   DEFAULT: "#1f2a1f",
        //   foreground: "#ffffff",
        //   muted: "#8d9c85",
        // },

        // THEME 4: Dusty Rose (Elegant, Warm)
        // background: "#fffcf9",
        // foreground: "#3a2e2a",
        // muted: "#fdf4ef",
        // "muted-foreground": "#9a8276",
        // border: "#f2e6df",
        // destructive: "#ef4444",
        // success: "#10b981",
        // warning: "#f59e0b",
        // footer: {
        //   DEFAULT: "#2a221f",
        //   foreground: "#ffffff",
        //   muted: "#c0a99d",
        // },

        // THEME 5: Deep Charcoal (Dark Mode, Professional)
        // background: "#1a1e24",
        // foreground: "#e8edf2",
        // muted: "#252b33",
        // "muted-foreground": "#9aa9b9",
        // border: "#2f3740",
        // destructive: "#ef4444",
        // success: "#10b981",
        // warning: "#f59e0b",
        // footer: {
        //   DEFAULT: "#0f1217",
        //   foreground: "#e8edf2",
        //   muted: "#6c7c8c",
        // },

        // Cool SaaS light base (pairs with blue primary + dark sections)
        background: "#ffffff",
        foreground: "#1e2a3a",
        muted: "#f0f4f8",
        "muted-foreground": "#5a6e7c",
        border: "#e2e8f0",
        destructive: "#ef4444",
        success: "#10b981",
        warning: "#f59e0b",
        footer: {
          DEFAULT: "#0f172a",
          foreground: "#ffffff",
          muted: "#94a3b8",
        },
        // Dark professional surfaces for alternating sections
        surface: {
          dark: "#0b1220",
          "dark-elevated": "#141c2e",
          "dark-muted": "#1c2740",
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
