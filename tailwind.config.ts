// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/@heroui/theme/dist/components/(accordion|button|card|chip|divider|drawer|image|input|link|navbar|ripple|spinner|modal|form).js",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [heroui()],
};
