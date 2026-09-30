import eslintConfigXoReact from "eslint-config-xo-react";
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

// useX()
const reactHookCallees = reactDependencyHooks.map(hook => ([
	"[callee.type=\"Identifier\"]",
	`[callee.name="${hook}"]`,
].join(""))).join(", ");

// React.useX()
const reactHookMemberCallees = reactDependencyHooks.map(hook => ([
	"[callee.type=\"MemberExpression\"]",
	"[callee.object.type=\"Identifier\"]",
	"[callee.object.name=\"React\"]",
	"[callee.property.type=\"Identifier\"]",
	`[callee.property.name="${hook}"]`,
].join(""))).join(", ");

/** @type {import('xo').FlatXoConfig} */
export default [...eslintConfigXoReact(), {
	plugins: {
		"react-refresh": reactRefresh.plugin,
	},
	rules: {
		"perfectionist/sort-arrays": ["error", {
			useConfigurationIf: {
				matchesAstSelector: `CallExpression:is(${reactHookCallees}, ${reactHookMemberCallees}) > ArrayExpression`,
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
