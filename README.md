# Agent Toolkit

Portable Agent Skills for coding agents. This repo is skills-only for now and
uses the Agent Skills `SKILL.md` format so skills can be installed for Codex,
Claude Code, GitHub Copilot, and other supported agents.

## Install

Install the Terraform style skill for one agent:

```bash
gh skill install vegardx/agent-toolkit terraform-style --agent codex --scope user
gh skill install vegardx/agent-toolkit terraform-style --agent claude-code --scope user
gh skill install vegardx/agent-toolkit terraform-style --agent github-copilot --scope user
```

Install every skill in the repo:

```bash
gh skill install vegardx/agent-toolkit --all --agent codex --scope user
```

Pin to a tag or commit when repeatability matters:

```bash
gh skill install vegardx/agent-toolkit terraform-style@v0.1.0 --agent codex --scope user
```

## Skills

### User-invoked

- [`skill-authoring`](skills/skill-authoring/SKILL.md) — Design, write, review,
  evaluate, and retire predictable Agent Skills. Invoke it explicitly with
  `/skill-authoring`.

### Model-invoked

- [`github`](skills/github/SKILL.md) — GitHub platform behavior across GitHub.com,
  GHE.com Data Residency, and GitHub Enterprise Server.
- [`github-agentic-workflows`](skills/github-agentic-workflows/SKILL.md) — GitHub
  Agentic Workflows, `gh aw`, permissions, network policy, safe outputs, and
  validation.
- [`github-cli`](skills/github-cli/SKILL.md) — GitHub CLI commands, auth, host and
  repository targeting, APIs, output, and safe mutation.
- [`terraform-style`](skills/terraform-style/SKILL.md) — Terraform and HCL
  conventions for modules, variables, composition, state, documentation, and
  tests.

Future skills should be added only after their conventions have been deliberately
worked through. Avoid checking in generated placeholder skills.

## Layout

```text
agent-toolkit/
  README.md
  LICENSE
  AGENTS.md

  skills/
    github/
      SKILL.md
      references/
        official-docs.md

    github-agentic-workflows/
      SKILL.md
      references/
        official-docs.md
        examples.md

    github-cli/
      SKILL.md
      references/
        examples.md

    skill-authoring/
      SKILL.md
      agents/
        openai.yaml
      evals/
        cases.json
      references/
        evaluation.md
        structure.md
        taxonomy.md

    terraform-style/
      SKILL.md
      references/
        module-patterns.md
```

Canonical skills live under `skills/`. Only add optional directories a skill
actually uses:

```text
skills/
  <skill-name>/
    SKILL.md
    agents/       # harness metadata, when needed
    references/   # selectively loaded guidance
    scripts/      # deterministic mechanics
    assets/       # templates and static inputs
    evals/        # behavior cases and fixtures
```

Plugins, hooks, agents, MCP servers, and other packaging layers may be added
later, but they are not part of the current skills-only distribution model.

## Publish

Validate before publishing:

```bash
gh skill publish --dry-run
```

Publish a release:

```bash
gh skill publish --tag v0.1.0
```

Publishing validates discovered skills and creates a GitHub release for the
selected tag.

## License

This repository is licensed under the MIT License. See [LICENSE](LICENSE).
