/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayLight: "var(--grayLight)",
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
      },
      fontSize: {
        32: "32px",
        64: "64px",
        79: "79px",
        84: "84px",
        140: "140px",
      },
      maxWidth: {
        1296: "1296px",
        840: "840px",
      },
      letterSpacing: {
        thinest: "-0.14px",
        sharp: "-0.48px",
        medium: "-0.64px",
        thin: "-2.8px",
        low: "-0.2px",
      },
      lineHeight: {
        90: "90%",
        110: "110%",
        140: "140%",
        170: "172%",
      },
      boxShadow: {
        custom: "0 12px 20px 0 rgba(0, 0, 0, 0.04);",
      },
      backgroundImage: {
        arrowBlack: "url('/img/blackArrow.svg')",
      },
      borderRadius: {
        32: "32px",
        40: "40px",
        48: "48px",
        60: "60px",
      },
    },
  },
  plugins: [],
};
