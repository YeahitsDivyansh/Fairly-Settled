// ✅ with `content`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ← make sure this globs your code
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        aurora: {
          "0%": { backgroundPosition: "50% 50%, 50% 50%" },
          "100%": { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
    },
  },
  darkMode: "class", // if you’re using dark mode
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },
    },
  },
};

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ensure correct path
  ],
  safelist: [
    "text-lg",
    "font-semibold",
    "text-gray-500",
    "text-black",
    "text-white",
    // add anything else that's missing
  ],
};
