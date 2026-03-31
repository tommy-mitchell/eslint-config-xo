import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

/** @type {({config}: {config: string}) => import('xo').FlatXoConfig} */
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
			entryPoint: config, // v4 config path
		},
	},
}];
