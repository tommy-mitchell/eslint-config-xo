import fs from "node:fs/promises";
import test from "ava";
import { Xo } from "xo";
import { formatResults, getFixtures } from "./_util.ts";

const ignoredFixtures = new Set([
	"package-json/package.json",
]);

for (const { cwd, fixture, fixturePath, outputPath } of getFixtures()) {
	// eslint-disable-next-line ava/no-invalid-modifier-chain
	test.skipIf(ignoredFixtures.has(fixture)).serial(`lints and fixes ${fixture}`, async t => {
		t.teardown(async () => {
			await fs.rm(outputPath, { force: true });
		});

		const source = await fs.readFile(fixturePath, "utf8");
		await fs.cp(fixturePath, outputPath);

		const lints = await Xo.lintText(source, {
			configPath: "xo.config.js",
			cwd,
			filePath: outputPath,
			fix: true,
			warnIgnored: true,
		});

		await Xo.outputFixes(lints);

		const fixed = await fs.readFile(outputPath, "utf8");
		const { counts, lintErrors } = await formatResults(lints);

		t.snapshot({ counts, fixed, lintErrors });
	});
}
