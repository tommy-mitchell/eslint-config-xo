"use strict";

module.exports = {
	extends: [
		"xo-react",
		"plugin:react/jsx-runtime",
		"plugin:jsx-a11y/recommended",
	],
	plugins: ["react-refresh"],
	rules: {
		"react/no-array-index-key": "warn",
		"react-refresh/only-export-components": ["warn", {
			allowConstantExport: true,
		}],
		"unicorn/filename-case": ["error", {
			cases: {
				camelCase: true,
				kebabCase: true,
				pascalCase: true,
			},
		}],
	},
	overrides: [{
		files: ["src/constants/**/*.{ts,cts,mts,tsx}", "**/constants.{ts,cts,mts,tsx}"],
		rules: {
			"@typescript-eslint/naming-convention": "off",
		},
	}],
};
