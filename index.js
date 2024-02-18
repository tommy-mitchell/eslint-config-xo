"use strict";

const { importOrder } = require("./helpers.js");

module.exports = {
	extends: ["plugin:@phaphoso/dprint/disable-conflict-rules"],
	rules: {
		"object-shorthand": "off",
		"unicorn/prefer-regexp-test": "off",
		// https://github.com/xojs/eslint-config-xo/blob/v0.44.0/index.js#L186
		"no-warning-comments": ["warn", { decoration: ["/", "*"] }],
		// https://github.com/xojs/eslint-config-xo/blob/v0.44.0/index.js#L304
		"capitalized-comments": ["error", "always", {
			ignorePattern: "dprint-ignore|pragma|ignore|prettier-ignore|webpack\\w+:|c8|type-coverage:",
			ignoreInlineComments: true,
			ignoreConsecutiveComments: true,
		}],
		"import/order": ["error", importOrder],
	},
	overrides: [{
		files: "**/*.{ts,cts,mts,tsx}",
		rules: {
			"@typescript-eslint/object-curly-spacing": "off",
			// https://github.com/xojs/eslint-config-xo-typescript/blob/v2.0.0/index.js#L384
			"@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
			"n/file-extension-in-import": ["error", "always", { ".ts": "always", ".tsx": "always" }],
			// https://github.com/xojs/eslint-config-xo-typescript/blob/v2.0.0/index.js#L707
			"@typescript-eslint/prefer-regexp-exec": "off",
		},
	}],
};
