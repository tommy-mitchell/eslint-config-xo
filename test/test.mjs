import { promises as fs } from "node:fs";
import test from "ava";
import { $ } from "execa";

const fixtureFiles = await fs.readdir(new URL("fixtures", import.meta.url), { recursive: true });
const fixtures = fixtureFiles.filter(file => file.split(".")[0].endsWith("fixture"));

// fixtures.push("package-json/package.json");

for (const fixture of fixtures) {
	test(`lints and fixes ${fixture}`, async t => {
		const fixtureFolder = new URL(`fixtures/${fixture}/..`, import.meta.url).pathname;
		const inputFile = new URL(`fixtures/${fixture}`, import.meta.url);

		const { stdout, exitCode } = await $({ inputFile })`xo --fix --stdin --stdin-filename=${fixture} --cwd=${fixtureFolder}`;

		t.snapshot(stdout);
		t.is(exitCode, 0);
	});
}
