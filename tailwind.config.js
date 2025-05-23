/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(210, 80%, 50%)", // A nice blue
          hover: "hsl(210, 80%, 45%)",
          foreground: "hsl(210, 100%, 98%)", // For text on primary background
        },
        secondary: {
          DEFAULT: "hsl(215, 20%, 65%)", // A muted gray-blue
          hover: "hsl(215, 20%, 55%)",
          foreground: "hsl(215, 25%, 20%)", // For text on secondary background
        },
        background: "hsl(0, 0%, 100%)", // White
        foreground: "hsl(215, 25%, 10%)", // Dark gray for text
        muted: {
          DEFAULT: "hsl(215, 30%, 95%)", // Light gray for backgrounds
          foreground: "hsl(215, 20%, 50%)", // Muted text color
        },
        accent: {
          DEFAULT: "hsl(45, 90%, 55%)", // A bright yellow/gold
          hover: "hsl(45, 90%, 50%)",
          foreground: "hsl(45, 100%, 10%)", // Dark text for accent background
        },
        destructive: {
          DEFAULT: "hsl(0, 70%, 55%)", // A clear red
          hover: "hsl(0, 70%, 50%)",
          foreground: "hsl(0, 100%, 98%)",
        },
        border: "hsl(215, 25%, 88%)",
        input: "hsl(215, 25%, 85%)", // For input borders
        ring: "hsl(210, 80%, 60%)", // For focus rings
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        container: "0.75rem", // Added for auth input fields
      },
      spacing: {
        section: "3rem", // Added for consistent section spacing
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
