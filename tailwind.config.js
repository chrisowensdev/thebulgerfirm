module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: "#788bae",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "sans-serif"],
				serif: ["var(--font-serif)", "serif"],
			},
		},
	},
	plugins: [],
};
