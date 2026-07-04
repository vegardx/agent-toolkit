# AGENTS.md

## Scope

This repository is a portable Agent Skills library. Keep canonical skills under
`skills/`.

## Rules

- Do not add generated placeholder skills.
- Do not add plugins, hooks, agents, adapters, MCP servers, or other packaging
  layers unless explicitly requested.
- Keep skill names kebab-case and matching their directory names.
- For coding-style skills, use the `<tool>-style` suffix.
- Keep `SKILL.md` concise and actionable.
- Move longer examples, cheatsheets, and detailed guidance into `references/`.
- Use `license: MIT` in skill frontmatter unless a specific skill needs a
  different license.
- Write descriptions with trigger context, covered behavior, file extensions,
  task verbs, tool names, and negative triggers.
- Mark opinionated conventions with `> NOTE:`.
- Use `TODO(me):` only when a user preference is genuinely unknown and would
  materially change the guidance.

## Validation

Run the Agent Skills validator before publishing or after changing skill
frontmatter:

```bash
gh skill publish --dry-run
```

When touching README or Markdown references, also check links and paths.
