import * as configs from "./src/index.js";

export default [
	{ ignores: ["test/fixtures/**"] },
	...configs.xo,
	...configs.dprint,
	{
		rules: {
			"import-x/no-anonymous-default-export": "off",
		},
	},
];
