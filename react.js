import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import sortReactDependencyArrays from "eslint-plugin-sort-react-dependency-arrays";

const plugins = [
	react.configs.flat["jsx-runtime"],
	jsxA11y.flatConfigs.recommended,
];

export default [...plugins, {
	plugins: {
		"react-refresh": reactRefresh,
		"sort-react-dependency-arrays": sortReactDependencyArrays,
	},
	rules: {
		"react/no-array-index-key": "warn",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"simple-import-sort/imports": ["error", {
			groups: [[String.raw`^\u0000`, "^node:", "^react", "^react-dom", String.raw`^@?\w`, "^", String.raw`^\.`, String.raw`^.+\.s?css$`]],
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
}];
