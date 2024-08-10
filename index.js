"use strict";

module.exports = {
	plugins: ["simple-import-sort"],
	rules: {
		// https://github.com/xojs/eslint-config-xo/blob/v0.44.0/index.js#L304
		"capitalized-comments": "off",
		// https://github.com/xojs/eslint-config-xo/blob/v0.44.0/index.js#L186
		"no-warning-comments": ["warn", { decoration: ["/", "*"] }],
		"object-shorthand": "off",
		"import/extensions": "off",
		"import/order": "off",
		// "n/file-extension-in-import": ["error", "always"],
		"simple-import-sort/imports": ["error", {
			groups: [["^\\u0000", "^node:", "^react", "^react-dom", "^@?\\w", "^", "^\\."]],
		}],
		"simple-import-sort/exports": "error",
		"unicorn/prefer-regexp-test": "off",
		"unicorn/prevent-abbreviations": "off",
	},
	overrides: [{
		files: "**/*.{ts,cts,mts,tsx}",
		settings: {
			n: { typescriptExtensionMap: [[".ts", ".ts"]] },
		},
		rules: {
			// https://github.com/xojs/eslint-config-xo-typescript/blob/v2.0.0/index.js#L384
			"@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
			// https://github.com/xojs/eslint-config-xo-typescript/blob/v2.0.0/index.js#L707
			"@typescript-eslint/prefer-regexp-exec": "off",
		},
	}, {
		files: ["**/package.json"],
		extends: ["plugin:package-json/recommended"],
		plugins: ["package-json"],
		parser: "jsonc-eslint-parser",
		rules: {
			"package-json/repository-shorthand": ["error", { form: "shorthand" }],
		},
	}],
};
