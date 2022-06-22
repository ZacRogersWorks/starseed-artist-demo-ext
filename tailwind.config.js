module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        starseedGray: "#F7F8FF",
        starseedPurp: "#D7D9FF",
        starseedBlue: "#5F8FFF",
        starseedLight: "#F7F8FF",
        starseedPink: "#F681A7",
        starseedLightBlueBorder: "#C5D5FE",
        starseedLight: "#F7F8FF",
        starseedInactive: "#B4B4CA"
      },
      fontSize: {
        xxs: ".6rem"
      }
    },
    backgroundImage: {
      'artist-bg': "url('images/artist-bg.jpeg')",
    },
    fontFamily: {
      abc: ['ABC Favorit'],
    },
  },
  plugins: [],
}
