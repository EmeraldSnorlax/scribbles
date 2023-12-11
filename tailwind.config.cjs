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
			chalkboard: {
				DEFAULT: '#29312b',
				darker: '#1d251f'
			},
			paper: {
				DEFAULT: '#fffcf8',
				darker: '#d8d5d2'
			}
		},

		fontFamily: {
			serif: ['Cutive', 'serif'],
			display: ['Mansalva', 'sans-serif']
		}
	},
	darkMode: 'media',
	plugins: []
};

module.exports = config;
