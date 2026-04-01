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
];
