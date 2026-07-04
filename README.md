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
| `github` | GitHub platform work across GitHub.com, GitHub Enterprise Cloud, GHE.com Data Residency, and GitHub Enterprise Server, including repos, organizations, visibility, Enterprise Managed Users, SSO/token authorization, APIs, Apps, Actions, Agentic Workflows, permissions, host targeting, and safe mutation rules. | [skills/github/SKILL.md](skills/github/SKILL.md) |
| `github-agentic-workflows` | GitHub Agentic Workflows in `.github/workflows/*.md` and generated `.lock.yml`, including `gh aw`, engines, model aliases, safe outputs, network/firewall rules, GitHub permissions, secrets, Enterprise/Data Residency, and validation with actionlint, zizmor, and poutine. | [skills/github-agentic-workflows/SKILL.md](skills/github-agentic-workflows/SKILL.md) |
| `github-cli` | GitHub CLI work with `gh`, including auth, host/repo targeting, `GH_HOST`, `GH_REPO`, `GH_TOKEN`, `gh pr`, `gh issue`, `gh run`, `gh workflow`, `gh release`, `gh secret`, `gh variable`, `gh api`, REST, GraphQL, JSON output, non-interactive automation, and safe mutation. | [skills/github-cli/SKILL.md](skills/github-cli/SKILL.md) |
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
