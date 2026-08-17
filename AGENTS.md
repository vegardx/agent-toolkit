# AGENTS.md

## Scope

This repository is a portable Agent Skills library. Keep canonical skills under
`skills/`.

## Rules

- Do not add generated placeholder skills.
- Do not add plugins, hooks, custom agents, adapters, MCP servers, or other
  packaging layers unless explicitly requested. Harness metadata such as
  `agents/openai.yaml` is allowed when it enforces a skill's invocation policy.
- Keep skill names kebab-case and matching their directory names.
- For coding-style skills, use the `<tool>-style` suffix.
- Keep `SKILL.md` concise and actionable.
- Move longer examples, cheatsheets, and detailed guidance into `references/`.
- Use `license: MIT` in skill frontmatter unless a specific skill needs a
  different license.
- Classify every skill as model-invoked or user-invoked only.
- For model-invoked skills, write descriptions with trigger context, covered
  behavior, file extensions, task verbs, tool names, and negative triggers.
- For user-invoked-only skills, use a concise human-facing description, set
  `disable-model-invocation: true`, and set
  `policy.allow_implicit_invocation: false` in `agents/openai.yaml` when that
  harness metadata is present.
- Keep the top-level README grouped into User-invoked and Model-invoked skills.
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
