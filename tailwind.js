"use strict";

module.exports = {
	extends: ["plugin:tailwindcss/recommended"],
	rules: {
		"tailwindcss/no-custom-classname": ["warn", {
			callees: ["classnames", "clsx", "ctl", "cva", "tv", "cn", "cnx"],
		}],
	},
};
