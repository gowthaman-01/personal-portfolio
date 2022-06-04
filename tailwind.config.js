module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        blue: "0 0px 12px rgb(63 63 255)",
        gray: "0 0px 20px rgb(64 64 83)",
        purple: "0 0px 10px  rgb(163 163 255)",
        dim: "0 0px 5px  rgb(163 163 255)"
      },
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      }, 
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      screens: {
    
      },
    },
  },
  plugins: [],
}
