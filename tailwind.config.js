module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': "Inter, Noto Sans TC"
    },
    colors: {
      'high': 'rgba(0,0,0,0.8)',
      'medium': 'rgba(0,0,0,0.3)',
      'line': 'rgba(0,0,0,0.1)',
      'white': "#FFFFFF",
      'primary': "#FF6F61",
      'samuel': '#ffa412',
      'code':{
        'text': "rgb(203,204,198)",
        "bgc": "rgb(31,36,48)"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
