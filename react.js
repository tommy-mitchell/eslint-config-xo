"use strict";

const { importOrder } = require("./helpers.js");

module.exports = {
	extends: [
		"xo-react",
		"plugin:jsx-a11y/recommended",
	],
	rules: {
		"react/no-array-index-key": "warn",
		"unicorn/filename-case": ["error", {
			cases: {
				camelCase: true,
				kebabCase: true,
				pascalCase: true,
			},
		}],
		"import/order": ["error", {
			...importOrder,
			pathGroups: [{
				pattern: "@{assets|constants|components|content|providers|helpers|hooks|utils}/**",
				group: "internal",
			}],
		}],
	},
	overrides: [{
		files: "src/constants/**/*.{ts,cts,mts,tsx}",
		rules: {
			"@typescript-eslint/naming-convention": "off",
		},
	}],
};
