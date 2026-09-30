import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";
import test from "ava";
import formatterPretty from "eslint-formatter-pretty"; // eslint-disable-line import-x/no-extraneous-dependencies, n/no-extraneous-import
import { Xo } from "xo";

const ignoredFixtures = new Set([
	"package-json/package.json",
]);

const fixtureDirectory = new URL("fixtures", import.meta.url);
const fixtureFiles = await fs.readdir(fixtureDirectory, { recursive: true });
const fixtures = fixtureFiles
	.filter(file => file.match(/fixture\.\S+$/mv) || file.endsWith("package-json/package.json"));

// TODO: document fixture format
// a fixture is: fixtures/{type}/({name}.)fixture.{extension}
// fixtures/{type} must contain an xo.config.js

// TODO: setup concurrency
for (const fixture of fixtures) {
	const extension = path.extname(fixture).slice(1);
	const [fixtureName] = path.basename(fixture, `.${extension}`).split(".", 1);

	const fixturePath = path.join(fixtureDirectory.pathname, fixture);
	const cwd = path.dirname(fixturePath);
	const outputPath = path.join(cwd, `${fixtureName}.fixed.${extension}`);

	// eslint-disable-next-line ava/no-invalid-modifier-chain
	test.skipIf(ignoredFixtures.has(fixture))(`lints and fixes ${fixture}`, async t => {
		t.teardown(async () => {
			await fs.rm(outputPath, { force: true });
		});

		await fs.cp(fixturePath, outputPath);

		const source = await fs.readFile(fixturePath, "utf8");
		const lints = await Xo.lintText(source, {
			configPath: "xo.config.js",
			cwd,
			filePath: outputPath,
			fix: true,
			warnIgnored: true,
		});

		await Xo.outputFixes(lints);
		const fixed = await fs.readFile(outputPath, "utf8");

		const errorCount = lints.errorCount - lints.fixableErrorCount;
		const warningCount = lints.warningCount - lints.fixableWarningCount;

		const result = lints.results[0];
		result.messages = result.messages.filter(message => !message.fix);

		const formattedErrors = formatterPretty([result], {
			cwd,
			...lints,
			errorCount,
			fixableErrorCount: 0,
			fixableWarningCount: 0,
			warningCount,
		});

		// TODO: just recreate formatting, don't run through pretty
		const lintErrors = formattedErrors
			.split("\n")
			.map(line => util.stripVTControlCharacters(line.trim()))
			.filter(line => line.startsWith("✖") || line.startsWith("⚠"))
			.map(line => {
				line = line.replaceAll(/\s{2,}/gv, "_%_");
				const [symbol, location, message, rule] = line.split("_%_", 4);
				return `${symbol} (${location})  ${message}  (${rule})`;
			});

		// TODO: t.log values if creating/updating snapshot

		// TODO: filter out sorting if t.snapshot?
		// eslint-disable-next-line perfectionist/sort-objects
		t.snapshot({ counts: { errors: errorCount, warnings: warningCount }, lintErrors, fixed });
	});
}
