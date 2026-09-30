import fs from "node:fs";
import path from "node:path";
import type { Xo } from "xo";

type XoLintResult = Awaited<ReturnType<typeof Xo.lintText>>;

export const getFixtures = () => {
	const fixtureDirectory = new URL("fixtures", import.meta.url);
	const fixtureFiles = fs.readdirSync(fixtureDirectory, { encoding: "utf8", recursive: true });
	const fixtures = fixtureFiles.filter(file =>
		(/fixture\.\S+$/mv.test(file) || file.endsWith("package-json/package.json"))
		&& !file.includes(".fixed.")
	);

	return fixtures.map(fixture => {
		const extension = path.extname(fixture).slice(1);
		const [fixtureName] = path.basename(fixture, `.${extension}`).split(".", 1);

		const fixturePath = path.join(fixtureDirectory.pathname, fixture);
		const cwd = path.dirname(fixturePath);
		const outputPath = path.join(cwd, `${fixtureName}.fixed.${extension}`);

		return { cwd, fixture, fixturePath, outputPath };
	});
};

type Message = XoLintResult["results"][0]["messages"][0];

// https://github.com/sindresorhus/eslint-formatter-pretty/blob/a09747424eccbcd170d109ef5b5c8b4b00bece68/index.js#L29-L45
const sortMessages = (messages: Message[]) =>
	messages.toSorted((a, b) => {
		if (a.fatal === b.fatal && a.severity === b.severity) {
			const diff = a.line === b.line ? "column" : "line";
			return a[diff] < b[diff] ? -1 : 1;
		}

		const isFatalOrErrorA = a.fatal ?? (a.severity === 2);
		const isFatalOrErrorB = b.fatal ?? (b.severity === 2);

		return isFatalOrErrorA && !isFatalOrErrorB ? 1 : -1;
	});

const severitySymbol = (message: Message) => message.fatal ?? (message.severity === 2) ? "✖" : "⚠";

export const formatResults = async (lints: XoLintResult) => {
	const errorCount = lints.errorCount - lints.fixableErrorCount;
	const warningCount = lints.warningCount - lints.fixableWarningCount;

	const unfixedLints = lints.results[0]!.messages.filter(message => !message.fix);
	const lintErrors = sortMessages(unfixedLints).map(message => {
		const location = `(${message.line}:${message.column})`;
		const cleanedMessage = message.message.replaceAll(/\B'(.*?)'\B/gv, "`$1`"); // eslint-disable-line regexp/prefer-named-capture-group

		return `${severitySymbol(message)} ${location}  ${cleanedMessage}  (${message.ruleId})`;
	});

	return { counts: { errors: errorCount, warnings: warningCount }, lintErrors };
};
