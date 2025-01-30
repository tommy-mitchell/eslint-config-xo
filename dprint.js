import stylistic from "@stylistic/eslint-plugin";

const disabledRules = Object.fromEntries(Object.keys(stylistic.rules).map(rule => [`@stylistic/${rule}`, "off"]));

export default [
	stylistic.configs["disable-legacy"],
	{ rules: disabledRules },
];
