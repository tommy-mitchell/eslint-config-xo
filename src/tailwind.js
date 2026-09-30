import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

// eslint-disable-next-line jsdoc/require-description
/** @type {(options: {config: string}) => import('xo').FlatXoConfig} */
export default ({ config }) => [{
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
	},
	settings: {
		"better-tailwindcss": {
			callees: ["clsx", "cn", "cnx", "cva", "cx", "tv", "twJoin", "twMerge"],
			detectComponentClasses: true,
			entryPoint: config, // v4 config path
		},
	},
}];
