import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { test } from "node:test";

const reviewerSkills = [
	"adversarial-review",
	"correctness-review",
	"security-review",
	"simplification-review",
];

test("Pi discovers the canonical skills directory", async () => {
	const packageJson = JSON.parse(await readFile("package.json", "utf8"));
	assert.deepEqual(packageJson.pi, { skills: ["./skills"] });
	assert(packageJson.files.includes("skills"));

	const installed = await readdir("skills");
	for (const name of reviewerSkills) assert(installed.includes(name), name);
});

for (const name of reviewerSkills) {
	test(`${name} has a neutral claim/evidence contract`, async () => {
		const skill = await readFile(`skills/${name}/SKILL.md`, "utf8");
		assert.match(skill, new RegExp(`^---\\nname: ${name}\\n`));
		assert.match(skill, /license: MIT\n---/);
		assert.match(skill, /Perform one independent, read-only review\./);
		assert.match(skill, /Each finding contains exactly:/);
		assert.match(skill, /Do not assign severity or priority,\ntally agreement, vote, give a verdict, prescribe a change, or describe a\npreferred solution\./);

		const example = skill.match(/```json\n([\s\S]*?)\n```/)?.[1];
		assert(example, "missing JSON example");
		const findings = JSON.parse(example);
		assert(Array.isArray(findings));
		assert(findings.length > 0);
		for (const finding of findings) {
			assert.deepEqual(Object.keys(finding).sort(), ["claim", "evidence"]);
			assert.equal(typeof finding.claim, "string");
			assert(Array.isArray(finding.evidence));
			assert(finding.evidence.length > 0);
			for (const evidence of finding.evidence) {
				assert.deepEqual(Object.keys(evidence).sort(), [
					"line",
					"observation",
					"path",
					"repository",
				]);
			}
		}
	});
}

test("README inventories every reviewer skill", async () => {
	const readme = await readFile("README.md", "utf8");
	for (const name of reviewerSkills) {
		assert.match(readme, new RegExp(`skills/${name}/SKILL\\.md`));
	}
	const localLinks = [...readme.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)]
		.map((match) => match[1])
		.filter((target) => !target.includes(":") && !target.startsWith("#"));
	for (const target of localLinks) await access(target);
});
