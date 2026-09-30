import eslintReact from "@eslint-react/eslint-plugin";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { reactRefresh } from "eslint-plugin-react-refresh";

const customGroups = [
	{ elementNamePattern: "^on[A-Z].*", groupName: "callback" },
	{ elementNamePattern: "^(children|dangerouslySetInnerHTML|key|ref)$", groupName: "reserved" },
];

const reactDependencyHooks = [
	"useCallback",
	"useEffect",
	"useImperativeHandle",
	"useInsertionEffect",
	"useLayoutEffect",
	"useMemo",
];

const reactHookCallees = reactDependencyHooks.map(hook => `[callee.name="${hook}"]`).join(", ");

/** @type {import('xo').FlatXoConfig} */
export default [jsxA11y.flatConfigs.recommended, {
	...eslintReact.configs.strict,
	files: "**/*.{jsx}",
}, {
	...eslintReact.configs["strict-type-checked"],
	files: "**/*.{tsx}",
}, {
	plugins: {
		"react-refresh": reactRefresh.plugin,
	},
	// TODO: boolean-prop-naming
	rules: {
		"perfectionist/sort-arrays": ["error", {
			useConfigurationIf: {
				matchesAstSelector: `CallExpression:is(${reactHookCallees}) > ArrayExpression`,
			},
		}],
		"perfectionist/sort-jsx-props": ["error", {
			customGroups,
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
			customGroups,
			groups: ["unknown", "callback"],
		}],
		"perfectionist/sort-object-types": ["error", {
			customGroups,
			groups: ["unknown", "callback"],
		}],
	},
}];
