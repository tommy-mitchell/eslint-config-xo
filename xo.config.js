import * as configs from "./src/index.js";

/** @type {import('xo').FlatXoConfig} */
export default [
	{ ignores: ["test/fixtures"] },
	...configs.xo,
	...configs.dprint,
	{
		rules: {
			"import-x/no-anonymous-default-export": "off",
			"unicorn/no-anonymous-default-export": "off",
		},
	},
	{
		files: ["package.json"],
		rules: {
			"package-json/dependency-version-range": ["error", {
				exceptions: ["typescript", "xo"],
			}],
		},
	},
];
