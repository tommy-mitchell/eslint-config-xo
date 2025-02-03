import perfectionist from "eslint-plugin-perfectionist";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [{
	plugins: {
		perfectionist,
		"simple-import-sort": simpleImportSort,
	},
	rules: {
		// https://github.com/xojs/eslint-config-xo/blob/v0.44.0/index.js#L304
		"capitalized-comments": "off",
		"import-x/extensions": "off",
		"import-x/order": "off",
		// https://github.com/xojs/eslint-config-xo/blob/v0.44.0/index.js#L186
		"no-warning-comments": ["warn", { decoration: ["/", "*"] }],
		"object-shorthand": "off",
		"perfectionist/sort-array-includes": "error",
		"perfectionist/sort-maps": "error",
		// maybe: perfectionist/sort-modules
		"perfectionist/sort-objects": "error",
		"perfectionist/sort-sets": "error",
		// TODO: doesn't play nice with unicorn/switch-case-braces: https://github.com/azat-io/eslint-plugin-perfectionist/issues/54#issuecomment-2268283085
		"perfectionist/sort-switch-case": "error",
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": ["error", {
			groups: [[String.raw`^\u0000`, "^node:", String.raw`^@?\w`, "^", String.raw`^\.`]],
		}],
		"unicorn/prefer-regexp-test": "off",
		"unicorn/prevent-abbreviations": "off",
	},
	settings: {
		perfectionist: {
			partitionByComment: "(group) *",
			type: "natural",
		},
	},
}, {
	files: "**/*.{ts,cts,mts,tsx}",
	rules: {
		// https://github.com/xojs/eslint-config-xo-typescript/blob/v2.0.0/index.js#L384
		"@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
		// https://github.com/xojs/eslint-config-xo-typescript/blob/v2.0.0/index.js#L707
		"@typescript-eslint/prefer-regexp-exec": "off",
		"perfectionist/sort-enums": ["error", { forceNumericSort: true }],
		"perfectionist/sort-heritage-clauses": "error",
		"perfectionist/sort-interfaces": "error",
		"perfectionist/sort-intersection-types": "error",
		"perfectionist/sort-object-types": "error",
		"perfectionist/sort-union-types": ["error", { groups: ["unknown", "keyword", "nullish"] }],
	},
	settings: {
		n: { typescriptExtensionMap: [[".ts", ".ts"], [".tsx", ".tsx"]] },
	},
}, {
	files: "test/**/*.*",
	rules: {
		"simple-import-sort/imports": ["error", {
			groups: [[String.raw`^\u0000`, "^node:", "^ava", String.raw`^@?\w`, "^", String.raw`^\.`]],
		}],
	},
}, {
	files: [
		"**/xo.config.js",
		"**/xo.config.ts",
		"**/eslint.config.js",
		"**/eslint.config.ts",
	],
	rules: {
		"import-x/no-anonymous-default-export": "off",
	},
}];

// TODO: update perfectionist, revert tailwind
