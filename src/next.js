import next from "@next/eslint-plugin-next";
import reactRefresh from "eslint-plugin-react-refresh";

/** @type {import('xo').FlatXoConfig} */
export default [
	next.configs["core-web-vitals"],
	reactRefresh.configs.next,
];
