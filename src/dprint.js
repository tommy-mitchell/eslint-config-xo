import stylistic from "@stylistic/eslint-plugin";

// TODO: eslint unicorn rule proposal
const allowedRules = new Set(["padding-line-between-statements"]);
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
	stylistic.configs["disable-legacy"],
	{ rules: disabledRules },
];
