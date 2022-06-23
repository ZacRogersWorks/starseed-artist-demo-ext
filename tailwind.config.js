module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        starseedGray: "#F7F8FF",
        starseedPurp: "#D7D9FF",
        starseedPurpHover: "#C2C3E6",
        starseedBlue: "#5F8FFF",
        starseedBlueHover: "#517AD9",
        starseedLight: "#F7F8FF",
        starseedPink: "#F681A7",
        starseedLightBlueBorder: "#C5D5FE",
        starseedGrayText: "#B4B4CA",
        starseedGreen: "#54AA84"
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
