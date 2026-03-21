---
sidebar_position: 1
---

# Context Tree (ctx3)

![Docusaurus logo](/img/ctx-banner.png)

Context Tree (ctx3) is a free and open‑source CLI tool written in Go that helps both developers and Large Language Models understand a codebase by generating structured metadata about files, dependencies, and project structure.

**It is designed to be:**
- Lightweight
- Deterministic
- LLM‑friendly
- Scriptable and automatable

ctx3 is built around two core ideas with commands and features related to these two core ideas.

## Context
Analyze files to extract metadata, and outs them as structured data, so you can prompt to your favorite LLM or codeing agent.
```bash
ctx3 context    
📂 Project: .
Files: 150, Dirs: 109
```


## File Tree
Inspect and print the directory structure of a project so you could have a more understnading of the project before you dive deep in it.

```bash
ctx3 print
┌── 📂 Project structure:
├── context.cmd.go (1455 bytes)
├── help.cmd.go (627 bytes)
├── pack.cmd.go (4797 bytes)
├── pack.cmd_test.go (1812 bytes)
├── percentage.cmd.go (530 bytes)
├── print.cmd.go (462 bytes)
└── root.cmd.go (1901 bytes)
```

These Two core Ideas, lead to creation of **Context Tree(ctx3)** we will demonstrate the packages, command and sub-commands forther in this documentation.