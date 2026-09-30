import fs from "node:fs";
import path from "node:path";
import util from "node:util";
import formatterPretty from "eslint-formatter-pretty"; // eslint-disable-line import-x/no-extraneous-dependencies, n/no-extraneous-import
import type { Xo } from "xo";

type XoLintResult = Awaited<ReturnType<typeof Xo.lintText>>;

export const getFixtures = () => {
	const fixtureDirectory = new URL("fixtures", import.meta.url);
	const fixtureFiles = fs.readdirSync(fixtureDirectory, { encoding: "utf8", recursive: true });
	const fixtures = fixtureFiles
		.filter(file => /fixture\.\S+$/mv.test(file) || file.endsWith("package-json/package.json"));

	return fixtures.map(fixture => {
		const extension = path.extname(fixture).slice(1);
		const [fixtureName] = path.basename(fixture, `.${extension}`).split(".", 1);

		const fixturePath = path.join(fixtureDirectory.pathname, fixture);
		const cwd = path.dirname(fixturePath);
		const outputPath = path.join(cwd, `${fixtureName}.fixed.${extension}`);

		return { cwd, fixture, fixturePath, outputPath };
	});
};

export const formatResults = async (lints: XoLintResult, { cwd }: { cwd: string; }) => {
	const errorCount = lints.errorCount - lints.fixableErrorCount;
	const warningCount = lints.warningCount - lints.fixableWarningCount;

	const result = lints.results[0]!;
	result.messages = result.messages.filter(message => !message.fix);

	// @ts-expect-error -- formatter works
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

	return { counts: { errors: errorCount, warnings: warningCount }, lintErrors };
};
