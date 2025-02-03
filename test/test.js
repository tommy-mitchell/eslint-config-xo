import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";
import test from "ava";
import { $ } from "execa";
import { temporaryDirectory } from "tempy";

const fixtureDirectory = new URL("fixtures", import.meta.url);
const fixtureFiles = await fs.readdir(fixtureDirectory, { recursive: true });
const fixtures = fixtureFiles.filter(file => file.split(".")[0].endsWith("fixture"));
const tempDirectory = temporaryDirectory();

// fixtures.push("package-json/package.json");

await fs.cp(fixtureDirectory, tempDirectory, { recursive: true });

for (const fixture of fixtures) {
	test(`lints and fixes ${fixture}`, async t => {
		const tempFixture = path.join(tempDirectory, fixture);
		const $$ = $({
			all: true,
			cwd: path.dirname(tempFixture),
			env: { NODE_NO_WARNINGS: 1 },
			localDir: process.cwd(),
			reject: false,
		});

		const { all: lintErrors, exitCode } = await $$`xo --fix ${tempFixture}`;
		const fixed = await fs.readFile(tempFixture, "utf8");
		const errorCount = Number(lintErrors.match(/\d+(?= errors$)/m).at(0));

		t.snapshot({ errorCount, exitCode, fixed, lintErrors });
	});
}
