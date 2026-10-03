import fs from "node:fs/promises";
import test from "ava";
import { Xo } from "xo";
import { formatResults, getFixtures } from "./_util.ts";

for (const { cwd, fixture, fixturePath, outputPath } of getFixtures()) {
	test.serial(`lints and fixes ${fixture}`, async t => {
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
		const { counts, errors } = await formatResults(lints);

		t.snapshot({ counts, errors, fixed });
	});
}
