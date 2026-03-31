import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import { reactRefresh } from "eslint-plugin-react-refresh";
import sortReactDependencyArrays from "eslint-plugin-sort-react-dependency-arrays";

const configs = [
	react.configs.flat["jsx-runtime"],
	jsxA11y.flatConfigs.recommended,
];

/** @type {(options?: {version?: string}) => import('xo').FlatXoConfig} */
export default ({ version = "detect" } = {}) => [{ react: true, settings: { react: { version } } }, ...configs, {
	plugins: {
		"react-refresh": reactRefresh.plugin,
		"sort-react-dependency-arrays": sortReactDependencyArrays,
	},
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"react/jsx-sort-props": ["error", {
			callbacksLast: true,
			noSortAlphabetically: false,
			reservedFirst: true,
			shorthandFirst: true,
		}],
		"react/no-array-index-key": "warn",
		"simple-import-sort/imports": ["error", {
			groups: [[
				String.raw`^\u0000`,
				"^node:",
				"^react",
				"^react-dom",
				String.raw`^@?\w`,
				"^",
				String.raw`^\.`,
				String.raw`^.+\.s?css$`,
			]],
		}],
		"sort-react-dependency-arrays/sort": "error",
		"unicorn/filename-case": ["error", {
			cases: {
				camelCase: true,
				kebabCase: true,
				pascalCase: true,
			},
		}],
		...version === "19" && {
			"react/forward-ref-uses-ref": "off",
		},
	},
}, {
	files: ["src/constants/**/*.{ts,cts,mts,tsx}", "**/constants.{ts,cts,mts,tsx}"],
	rules: {
		"@typescript-eslint/naming-convention": "off",
	},
}, {
	files: "**/*.{ts,cts,mts,tsx}",
	rules: {
		"perfectionist/sort-interfaces": ["error", {
			customGroups: [{ elementNamePattern: "^on[A-Z].*", groupName: "callback" }],
			groups: ["unknown", "callback"],
		}],
		"perfectionist/sort-object-types": ["error", {
			customGroups: [{ elementNamePattern: "^on[A-Z].*", groupName: "callback" }],
			groups: ["unknown", "callback"],
		}],
	},
}];
