const autoprefixer = require('autoprefixer');
const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const tailwindcssNexting = require('tailwindcss/nesting');

const plugins = [ postCssImport, tailwindcss, autoprefixer ];

module.exports = {
    plugins: plugins
}