"use strict";

exports.importOrder = {
	"groups": [
		"builtin",
		"external",
		"parent",
		"sibling",
		"index",
	],
	"newlines-between": "never",
	"warnOnUnassignedImports": true,
	"distinctGroup": true,
};

// Defaults from https://github.com/xojs/xo/blob/v0.57.0/config/plugins.cjs#L38
exports.preventAbbreviations = (extras) => ({
	checkFilenames: false,
	checkDefaultAndNamespaceImports: false,
	checkShorthandImports: false,
	extendDefaultReplacements: true,
	replacements: {
		// https://thenextweb.com/dd/2020/07/13/linux-kernel-will-no-longer-use-terms-blacklist-and-slave/
		whitelist: {
			include: true,
		},
		blacklist: {
			exclude: true,
		},
		master: {
			main: true,
		},
		slave: {
			secondary: true,
		},

		// Reverse.
		application: {
			app: true,
		},
		applications: {
			apps: true,
		},

		// Disable some that may be too annoying.
		env: false,
		i: false, // Do it at some point, but not ready for it yet. Maybe 2025.

		// Not part of `eslint-plugin-unicorn`. Upstream them at some point.
		bin: {
			binary: true,
		},
		eof: {
			endOfFile: true,
		},
		impl: {
			implement: true,
			implementation: true,
		},
		anim: {
			animation: true,
		},
		calc: {
			calculate: true,
		},
		dict: {
			dictionary: true,
		},
		dup: {
			duplicate: true,
		},
		enc: {
			encode: true,
			encryption: true,
		},
		gen: {
			generate: true,
			general: true,
		},
		gfx: {
			graphics: true,
		},
		inc: {
			increment: true,
		},
		iter: {
			iterate: true,
			iterator: true,
		},
		nav: {
			navigate: true,
			navigation: true,
		},
		norm: {
			normalize: true,
		},
		notif: {
			notification: true,
		},
		perf: {
			performance: true,
		},
		proc: {
			process: true,
		},
		rand: {
			random: true,
		},
		sys: {
			system: true,
		},
		temp: {
			temporary: true,
		},

		...extras,
	},
});
