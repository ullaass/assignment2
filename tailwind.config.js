/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#494949",
          "200": "rgba(73, 73, 73, 0.5)",
        },
        whitesmoke: "#f4f4f4",
        black: "#000",
        orangered: {
          "100": "#ff521a",
          "200": "#fe3700",
          "300": "rgba(255, 82, 26, 0.09)",
        },
        dimgray: "#666",
        lightgray: "#cacaca",
      },
      spacing: {},
      fontFamily: {
        spartan: "Spartan",
      },
      borderRadius: {
        "6xs-9": "6.9px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
