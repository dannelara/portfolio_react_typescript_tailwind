/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_blue: "rgb(27, 27, 47)",
        dark_blue_transparent: "rgb(45, 45, 66,0.7)",
        bright: "rgba(255, 255, 255, 0.9)",
        torq: "hsl(174, 100%, 69%)",
        border_gray: "#30363d",
        section_dark: "#161b22",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        mdl: "1200px",
        // => @media (min-width: 768px) { ... }

        xlg: "1504px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
