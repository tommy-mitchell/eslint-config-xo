import * as configs from "./src/index.js";

export default [
	{
		ignores: ["test/fixtures/**"],
	},
	...configs.xo,
	...configs.dprint,
	{
		react: true,
		rules: {
			"import-x/no-anonymous-default-export": "off",
		},
	},
];
