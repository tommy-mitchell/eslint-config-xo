"use strict";

module.exports = {
	extends: ["plugin:dprint-integration/disable-conflict"],
	overrides: [{
		files: "**/*.{ts,cts,mts,tsx}",
		rules: {
			"@typescript-eslint/object-curly-spacing": "off",
			"@typescript-eslint/space-infix-ops": "off",
		},
	}],
};
