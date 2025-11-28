import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

/** @type {import('xo').FlatXoConfig} */
export default [{
	plugins: {
		"better-tailwindcss": eslintPluginBetterTailwindcss,
	},
	rules: {
		...eslintPluginBetterTailwindcss.configs.recommended.rules,
		"better-tailwindcss/enforce-consistent-line-wrapping": ["warn", {
			indent: "tab",
			preferSingleLine: true,
			printWidth: 120,
		}],
		"better-tailwindcss/enforce-shorthand-classes": "warn",
		"better-tailwindcss/no-deprecated-classes": "warn",
	},
	settings: {
		"better-tailwindcss": {
			callees: ["clsx", "cn", "cnx", "cva", "cx", "tv", "twJoin", "twMerge"],
		},
	},
}];
