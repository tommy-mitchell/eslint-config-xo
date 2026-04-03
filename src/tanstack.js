import pluginRouter from "@tanstack/eslint-plugin-router";
import { reactRefresh } from "eslint-plugin-react-refresh";

/** @type {import('xo').FlatXoConfig} */
export default [
	...pluginRouter.configs["flat/recommended"],
	// https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/102#issuecomment-3881982814
	reactRefresh.configs.vite({
		extraHOCs: [
			"createFileRoute",
			"createLazyFileRoute",
			"createRootRoute",
			"createRootRouteWithContext",
			"createLink",
			"createRoute",
			"createLazyRoute",
		],
	}),
	{
		rules: {
			"@typescript-eslint/only-throw-error": ["error", {
				allow: [{
					from: "package",
					name: "Redirect",
					package: "@tanstack/router-core",
				}, {
					from: "package",
					name: "NotFoundError",
					package: "@tanstack/router-core",
				}],
				// https://github.com/xojs/eslint-config-xo/blob/55b6ae18731cc30599057de401fd711ff9f5cb8c/source/typescript-rules.js#L476-L483
				allowThrowingAny: false,
				allowThrowingUnknown: true,
			}],
		},
	},
];
