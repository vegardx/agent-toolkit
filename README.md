# Agent Toolkit

This repository is a portable library of reusable agent assets: skills,
workflows, plugins, hooks, adapters, and related guidance. Keep the canonical
content agent-neutral where practical, then add tool-specific packaging as an
adapter when needed.

## Layout

```text
agent-toolkit/
  README.md

  skills/
    terraform-style/
      SKILL.md
      references/
        module-patterns.md

  agents/
  plugins/
  hooks/
  adapters/
```

Only create top-level folders when they contain real curated content. Do not add
placeholder agents, plugins, hooks, or adapters.

## Skills

Skills are compact reference guides that an agent can load when the task matches
their description. Skills can cover coding style, tool conventions, domain
knowledge, review heuristics, workflows, or other reusable guidance. They are
knowledge skills by default, not task commands, unless a specific skill
intentionally includes scripts or assets.

| name | when it triggers | link |
| --- | --- | --- |
| `terraform-style` | Terraform and HCL work in `.tf` and `.tfvars`, including modules, providers, variables, outputs, backends, AWS infrastructure, IAM, state config, tests, README docs, and CI-driven plan/apply automation. | [skills/terraform-style/SKILL.md](skills/terraform-style/SKILL.md) |

Future skills should be added only after their conventions have been deliberately
worked through. Avoid checking in generated placeholder skills.

## Skill Convention

- Put each skill in a directory named exactly like the skill:
  `skills/<skill-name>/SKILL.md`.
- Use kebab-case names with lowercase letters, numbers, and hyphens only.
- Keep names under 64 characters.
- For coding-style skills, use the uniform `<tool>-style` suffix, such as
  `terraform-style`.
- For non-style skills, choose a short kebab-case name that describes the domain
  or workflow.
- Keep `SKILL.md` lean and actionable.
- Put longer examples, cheatsheets, and deeper detail in `references/` one level
  below the skill.
- Make the YAML `description` trigger-rich because it is what the agent sees
  before deciding whether to load the skill.

## Portability

Keep canonical skill sources under `skills/`:

```text
skills/
  <skill-name>/
    SKILL.md
    references/
```

Do not make a tool-specific marketplace or plugin layout the canonical source.
If a specific agent needs packaging metadata, add it as an adapter around these
skills and avoid duplicating skill content.

If a future adapter groups coding-style skills, name that adapter `coding-style`
so paths read like `coding-style/skills/terraform-style`, not
`coding-style-skills/skills/terraform-style`.

## Versioning

Use Git as the source of truth for toolkit versions.

- For one coordinated toolkit release, tag the whole repo with `vX.Y.Z`.
- For independent skill releases, tag with `skills/<skill-name>/vX.Y.Z`, for
  example `skills/terraform-style/v0.1.0`.
- If plugins or adapters later evolve independently, tag them by path as well,
  for example `plugins/coding-style/v0.1.0`.
- Do not put version metadata in `SKILL.md` frontmatter; keep frontmatter limited
  to `name` and `description`.
- Mention the relevant tag or commit when installing or pinning toolkit content.

## Adding A New Skill

1. Choose a kebab-case name that exactly matches the parent directory.
2. Use the uniform `<tool>-style` suffix for coding-style skills.
3. Create `skills/<skill-name>/SKILL.md`.
4. Add YAML frontmatter with only `name` and `description`.
5. Write the description in third person or imperative style: `Use when...`,
   `Covers...`, `Do not use...`.
6. Include trigger verbs, file extensions, tool names, and key concepts in the
   description.
7. Add a negative trigger for plausible mix-ups.
8. Keep the description under about 1,024 characters.
9. Keep `SKILL.md` under about 500 lines with actionable rules and short examples.
10. Move longer examples or cheatsheets into `references/` and link them directly
    from `SKILL.md`.
11. Mark opinionated rules with `> NOTE:`.
12. Use `TODO(me):` where a personal preference materially changes the default.
13. Add the skill to the table in this README.
