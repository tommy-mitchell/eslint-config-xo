import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

// eslint-disable-next-line jsdoc/require-description
/** @type {(options: {config: string; version?: "3" | "4"}) => import('xo').FlatXoConfig} */
export default ({ config, version = "4" }) => [{
	...eslintPluginBetterTailwindcss.configs.recommended,
	rules: {
		"better-tailwindcss/enforce-consistent-line-wrapping": ["warn", {
			indent: "tab",
			preferSingleLine: true,
			printWidth: 120,
			tabWidth: 2,
		}],
		"better-tailwindcss/enforce-logical-properties": ["warn"],
	},
	settings: {
		"better-tailwindcss": {
			callees: ["clsx", "cn", "cnx", "cva", "cx", "tv", "twJoin", "twMerge"],
			detectComponentClasses: true,
			...(version === "3" ? { tailwindConfig: config } : { entryPoint: config }),
		},
	},
}];
