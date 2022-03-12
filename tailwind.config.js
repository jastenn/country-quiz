module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        purple: "#6066D0B2",
        mustard: "#F9A826",
        "dark-neutral": "#1D355D",
      },
      backgroundImage: {
        pattern: "url('../assets/images/background.png')",
      },
    },
  },
  plugins: [],
}
