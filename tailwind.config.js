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
				primary: 'rgba(235, 89, 200,92)',
				secondary: 'rgba(253, 224, 71,99)',
				tertiary: 'rgba(214, 187, 49,84)',
				quaternary: 'rgba(66, 235, 232,92)',
				quinary: 'rgba(28, 158, 156,62)',
				dorado: '#a98307',
				rubio: '#bb8b06',
				navbar: '#241f21',
				about: '#AD5C60',
				titulo: '#AB7C34',
				dorado: '#a98307',
				rubio: '#bb8b06',
			},
			animation: {
				'spin-slow': 'spin 12s linear infinite',
			},
		},
	},
	plugins: [],
};
