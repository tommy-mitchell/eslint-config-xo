import dprintConfig from "./dprint.js";
import config from "./index.js";

export default [
	...config,
	...dprintConfig,
	{
		ignores: ["test/fixtures"],
		react: true,
		rules: {
			"import-x/no-anonymous-default-export": "off",
		},
	},
];
