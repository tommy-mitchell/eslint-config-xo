import stylistic from "@stylistic/eslint-plugin";

const allowedReactRules = new Set([
	"jsx-curly-brace-presence",
	"jsx-newline",
	"jsx-pascal-case",
	"jsx-self-closing-comp",
	"jsx-sort-props",
]);

const disabledLegacyRules = Object.fromEntries(
	Object.entries(stylistic.configs["disable-legacy"].rules)
		.filter(([rule]) => !allowedReactRules.has(rule.replace("react/", ""))),
);

const allowedRules = new Set([
	// "multiline-ternary",
	"no-floating-decimal",
	"no-mixed-operators",
	"padding-line-between-statements",
	"wrap-iife",
	...allowedReactRules,
]);

const disabledRules = Object.fromEntries(
	Object.keys(stylistic.rules)
		.filter(rule => !allowedRules.has(rule))
		.map(rule => [`@stylistic/${rule}`, "off"]),
);

/** @type {import('xo').FlatXoConfig} */
export default [
	{
		rules: {
			"arrow-body-style": "off",
			"curly": "off",
			"no-arrow-condition": "off",
			"no-comma-dangle": "off",
		},
	},
	{ rules: disabledLegacyRules },
	{ rules: disabledRules },
];
