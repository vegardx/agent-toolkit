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

| name | when it triggers | link |
| --- | --- | --- |
| `terraform-style` | Terraform and HCL work in `.tf` and `.tfvars`, including modules, providers, variables, outputs, backends, AWS infrastructure, IAM, state config, tests, README docs, and CI-driven plan/apply automation. | [skills/terraform-style/SKILL.md](skills/terraform-style/SKILL.md) |

Future skills should be added only after their conventions have been deliberately
worked through. Avoid checking in generated placeholder skills.

## Layout

```text
agent-toolkit/
  README.md
  LICENSE
  AGENTS.md

  skills/
    terraform-style/
      SKILL.md
      references/
        module-patterns.md
```

Canonical skills live under `skills/`:

```text
skills/
  <skill-name>/
    SKILL.md
    references/
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
