"use strict";

module.exports = {
	extends: [
		"xo-react",
		"plugin:react/jsx-runtime",
		"plugin:jsx-a11y/recommended",
	],
	plugins: ["react-refresh", "sort-react-dependency-arrays"],
	rules: {
		"react/no-array-index-key": "warn",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"sort-react-dependency-arrays/sort": "error",
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
	}, {
		files: "**/*.{ts,cts,mts,tsx}",
		rules: {
			"perfectionist/sort-interfaces": ["error", {
				customGroups: { callback: "on*" },
				groups: ["unknown", "callback"],
			}],
			"perfectionist/sort-object-types": ["error", {
				customGroups: { callback: "on*" },
				groups: ["unknown", "callback"],
			}],
		},
	}],
};
