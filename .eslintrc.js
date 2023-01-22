module.exports = {
	root: false,
	env: {
		browser: false,
		node: false,
	},
	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
	},
	extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": ["error"],
		"vue/html-indent": ["error", 4],
		"vue/singleline-html-element-content-newline": 0,
		"vue/component-name-in-template-casing": ["error", "PascalCase"],
		"vue/valid-v-slot": [
			"error",
			{
				allowModifiers: false,
			},
		],
	},
	globals: {
		_: false,
	},
};
