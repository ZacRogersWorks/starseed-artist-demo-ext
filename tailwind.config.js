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
        starseedLight: "#F7F8FF"
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
