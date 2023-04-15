/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},

			fontFamily: {
				Brewery: ['Brewery', 'sans-serif'],
				Anton: ['Anton', 'sans-serif'],
			},
			colors: {
				primary: 'rgba(13, 110, 253)',
				blues: '#706FE5',
				secondary: '#EAEAFC !important',
				gris: '#2E3E5C',
				titulo: '#AB7C34',
				dorado: '#a98307',
				rubio: '#bb8b06',
				celeste: '#86E5FF',
				celestedark: '#0081C9',
				celesteligth: '#86E5FF',
				verde: '#86c11d !important',
				oscuro: '#000000',
			},
			animation: {
				'spin-slow': 'spin 12s linear infinite',
			},
		},
	},
	plugins: [],
};
