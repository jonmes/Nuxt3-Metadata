/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    screens: {
      xs: "512px",
      // => @media (min-width: 512px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }
      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    fontFamily: {
      body: ["Roboto"],
      diplay: ["Roboto"],
      sans: ["Roboto"],
      serif: ["Roboto"],
      poppin: ["Poppins"],
    },
    extend: {
      transitionProperty: {
        height: "height",
        visibility: "visibility",
        newtransition: "max-height, visibility, height",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        opaq: "0 4px 16px 6px rgba(0,0,0,0.4)",
        full: "0 3px 1px -2px rgba(0,0,0, 0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12) ",
      },
      fontSize: {
        md: ["1.125rem", "1.5rem"],
      },
      maxWidth: {
        six: "102rem",
      },
      height: {
        nav: "5.25rem",
        dscreen: "calc(100vh - 5rem)",
      },
      width: {
        100: "26rem",
        102: "30rem",
        dscreen: "calc(100vw - 47.5rem)",
      },

      flex: {
        six: "1 0 16.6%",
      },
      colors: {
        HahuGray1: "#444F60",
        HahuGray2: "#697280",
        HahuGray3: "#C7CACF",
        HahuGray4: "#C4C4C4",
        "HahuGray/4": "#ECEDEF",
        HahuGray5: "#596474",
        "HaHuGreen/2": "#80CBC4",
        "Hahugreen/3": "#B3E0DB",
        "HaHuGreen/4": "#E6F5F3",
        HahuRed: "#FF007A",
        DarkModeBg: "#263142",
        "LightDark": "#304159",
        primary: "#009688",
        "primary-lite": "#6ec8c0;",
        "primary-dark": "#007166",
        secondary: "#444f60",
        "secondary-2": "#868686",
        "secondary-3": "#F8F8F8",
        "secondary-4": "#E5E5E5",
        "secondary-dark": "#313131",
        whitePrimary: "#F0FDF4",
        "secondary-nav": "#F9FAFB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
