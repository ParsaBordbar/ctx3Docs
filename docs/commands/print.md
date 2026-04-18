---
sidebar_position: 1
---
The ```print``` command displays the directory hierarchy of a project in a readable tree format.

```bash
ctx3 print <path>
```

output sample:

```bash
┌── 📂 Project structure:
├── Cargo.toml (80 bytes)
└── src (96 bytes)
    └── lib.rs (1610 bytes)
```

the default path is the current directory.