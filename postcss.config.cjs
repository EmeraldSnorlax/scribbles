const tailwindcss = require('tailwindcss');
const config = {
	plugins: [
		require('postcss-nested'),
		require('autoprefixer'),
		tailwindcss()
	]
};

module.exports = config;
