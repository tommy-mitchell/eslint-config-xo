import * as configs from "./src/index.js";

export default [
	...configs.xo,
	...configs.dprint,
	{
		ignores: ["test/fixtures/**"],
		react: true,
		rules: {
			"import-x/no-anonymous-default-export": "off",
		},
	},
];

// TODO: raise issue on vscode plugin to add source.fixAll.xo
