import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";
import tailwind from "eslint-plugin-tailwindcss";

export default [...tailwind.configs["flat/recommended"], {
	plugins: {
		"readable-tailwind": eslintPluginReadableTailwind,
	},
	rules: {
		"readable-tailwind/multiline": ["warn", {
			group: "newLine",
			indent: "tab",
			preferSingleLine: true,
			printWidth: 120,
		}],
		"readable-tailwind/no-duplicate-classes": "warn",
		"readable-tailwind/no-unnecessary-whitespace": "warn",
		"readable-tailwind/sort-classes": "warn",
		"tailwindcss/classnames-order": "off",
		"tailwindcss/no-custom-classname": ["warn", {
			callees: ["classnames", "clsx", "ctl", "cva", "tv", "tva", "tw", "twMerge", "cn", "cnx"],
		}],
	},
}];
