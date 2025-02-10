import { FlatCompat } from "@eslint/eslintrc";
import next from "@next/eslint-plugin-next";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

export default [
	...compat.config(next.configs["core-web-vitals"]),
	{
		files: "**/{layout,page}.{jsx,tsx}",
		rules: {
			"react-refresh/only-export-components": ["warn", {
				allowConstantExport: true,
				allowExportNames: [
					"metadata",
					"generateMetadata",
				],
			}],
		},
	},
];
