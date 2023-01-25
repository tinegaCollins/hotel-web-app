/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
	theme: {
		fontFamily: {
			roboto: ['Roboto', 'sans'],
			source: ['Source Serif Pro', 'serif'],
		  },
		extend: {},
		screens: {
			xs: "320px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	darkMode: "class",
    // eslint-disable-next-line no-undef
    plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
