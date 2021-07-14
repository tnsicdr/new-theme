const DEVELOPMENT = process.env.NODE_ENV === 'development';

const purge = [];
if(!DEVELOPMENT) {
  purge.concat([
    './src/**/*.html',
    './src/**/*.js'
  ])
}

module.exports = {
  purge: purge,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
