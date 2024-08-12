"use strict";

module.exports = {
	plugins: ["perfectionist", "simple-import-sort"],
	rules: {
		// https://github.com/xojs/eslint-config-xo/blob/v0.44.0/index.js#L304
		"capitalized-comments": "off",
		"import/extensions": "off",
		"import/order": "off",
		// https://github.com/xojs/eslint-config-xo/blob/v0.44.0/index.js#L186
		"no-warning-comments": ["warn", { decoration: ["/", "*"] }],
		"object-shorthand": "off",
		"perfectionist/sort-array-includes": ["error", { type: "natural" }],
		"perfectionist/sort-maps": ["error", { type: "natural" }],
		"perfectionist/sort-objects": ["error", { type: "natural" }],
		// TODO: doesn't play nice with unicorn/switch-case-braces: https://github.com/azat-io/eslint-plugin-perfectionist/issues/54#issuecomment-2268283085
		"perfectionist/sort-switch-case": ["error", { type: "natural" }],
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": ["error", {
			groups: [["^\\u0000", "^node:", "^react", "^react-dom", "^@?\\w", "^", "^\\."]],
		}],
		"unicorn/prefer-regexp-test": "off",
		"unicorn/prevent-abbreviations": "off",
	},
	overrides: [{
		files: "**/*.{ts,cts,mts,tsx}",
		settings: {
			n: { typescriptExtensionMap: [[".ts", ".ts"], [".tsx", ".tsx"]] },
		},
		rules: {
			// https://github.com/xojs/eslint-config-xo-typescript/blob/v2.0.0/index.js#L384
			"@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
			// https://github.com/xojs/eslint-config-xo-typescript/blob/v2.0.0/index.js#L707
			"@typescript-eslint/prefer-regexp-exec": "off",
			"perfectionist/sort-enums": ["error", { type: "natural" }],
			"perfectionist/sort-interfaces": ["error", { type: "natural" }],
			"perfectionist/sort-intersection-types": ["error", { type: "natural" }],
			"perfectionist/sort-object-types": ["error", { type: "natural" }],
			"perfectionist/sort-union-types": ["error", { type: "natural" }],
		},
	}],
};
