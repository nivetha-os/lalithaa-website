/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#071426", // Rich luxury dark navy blue
        "midnight-dark": "#071933",
        "midnight-deep": "#0A1D36",
        "navy-royal": "#0A1D36",
        "navy-surface": "#0C2340",
        ivory: "#FFFBF3",
        platinum: "#E0E1DD",
        "ice-blue": "#E6ECF4",
        "slate-navy": "#1E293B",
        "btn-primary": "#00184C",
        "btn-hover": "#102C66",
        "border-silver": "#ADB6CB",
        "border-card": "#E2E6EF",
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(7, 20, 38, 0.06)',
        'card-hover': '0 16px 40px rgba(7, 20, 38, 0.12)',
      }
    },
  },
  plugins: [],
}
