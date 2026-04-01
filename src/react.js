import eslintReact from "@eslint-react/eslint-plugin";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { reactRefresh } from "eslint-plugin-react-refresh";
import sortReactDependencyArrays from "eslint-plugin-sort-react-dependency-arrays";

const configs = [
	eslintReact.configs["strict-type-checked"],
	jsxA11y.flatConfigs.recommended,
];

/** @type {import('xo').FlatXoConfig} */
export default [...configs, {
	plugins: {
		"react-refresh": reactRefresh.plugin,
		"sort-react-dependency-arrays": sortReactDependencyArrays,
	},
	// TODO: boolean-prop-naming
	rules: {
		"perfectionist/sort-jsx-props": ["error", {
			customGroups: [
				{ elementNamePattern: "^on[A-Z].*", groupName: "callback" },
				{ elementNamePattern: "^(children|dangerouslySetInnerHTML|key|ref)$", groupName: "reserved" },
			],
			groups: ["reserved", "shorthand-prop", "unknown", "callback"],
		}],
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
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
