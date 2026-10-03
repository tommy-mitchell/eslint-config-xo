import * as configs from "../_src/index.js";

export default [
	...configs.xo,
	...configs.react,
	...configs.tailwind({config: "./tailwind.css"}),
	...configs.dprint,
	{
		rules: {
			"@typescript-eslint/no-unsafe-enum-comparison": "off",
		}
	}
];
