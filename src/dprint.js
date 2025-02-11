import stylistic from "@stylistic/eslint-plugin";

const allowedReactRules = new Set([
	"jsx-curly-brace-presence",
	"jsx-newline",
	"jsx-pascal-case",
	"jsx-self-closing-comp",
	"jsx-sort-props",
]);

const disabledLegacyRules = Object.fromEntries(
	Object.keys(stylistic.configs["disable-legacy"].rules)
		.filter(rule => !allowedReactRules.has(`react/${rule}`))
		.map(rule => [rule, "off"]),
);

// TODO: eslint unicorn rule proposal
const allowedRules = new Set([
	"padding-line-between-statements",
	...allowedReactRules,
]);

const disabledRules = Object.fromEntries(
	Object.keys(stylistic.rules)
		.filter(rule => !allowedRules.has(rule))
		.map(rule => [`@stylistic/${rule}`, "off"]),
);

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
