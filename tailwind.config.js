module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        offWhite: "#F5F5F5",
        yellow: {
          base: "#FFBE29",
        },
        orange: "#FF7300",
        green: {
          base: "#00722A",
        },
        maroon: {
          base: "#8D153A",
          light: "#D98484",
        },
        gray: {
          base: "#C4C4C4",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
