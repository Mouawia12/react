/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['"Tajawal"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        "brand-dark": "#0b1026",
        "brand-purple": "#6930c3",
        "brand-blue": "#4361ee",
        "brand-light": "#1f2233",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top left, rgba(105, 48, 195, 0.45), transparent 50%), radial-gradient(circle at bottom right, rgba(67, 97, 238, 0.4), transparent 45%)",
      },
    },
  },
  plugins: [],
};
