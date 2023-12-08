/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			chalk: {
				DEFAULT: '#fffcf8',
				faded: '#c9c9c5'
			},
			ink: {
				DEFAULT: '#1f1f1f',
				faded: '#403f3e'
			},
			chalkboard: "#29312b",
			paper: "#fffcf8",
			},

		fontFamily: {
			'serif': ['Cutive', 'serif'],
			display: ['Mansalva', 'sans-serif'],
		}
	},
	darkMode: 'class',
	plugins: []
};

module.exports = config;
