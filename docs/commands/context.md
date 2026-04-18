---
sidebar_position: 0
---

# context
The context command analyzes a repository and outputs structured metadata about files, directories, dependencies, and README content.

## Features
- File size and line count
- File types and languages
- Entry point detection
- Dependency extraction
- Optional JSON output

## Usage
```bash
ctx3 context <path>
```
output sample:
```bash
📂 Project: /Users/parsabordbar/code/rust/learning-rust/exercises/advance_algorithms/epoch_rng
Files: 2, Dirs: 2
```
the default path is the curent dir but you can pass your desired path.

the contxt command is helpful when you first want to aproach a code base, the flags help you and your coding agent to learn more.

## Flags

You can output the context command as json:
```bash
ctx3 context -j <path>
```

output sample:
```bash
{
  "root": "/Users/parsabordbar/code/rust/learning-rust/exercises/advance_algorithms/epoch_rng",
  "files": [
    {
      "name": "Cargo.toml",
      "type": "toml",
      "path": "Cargo.toml",
      "size": 80,
      "lines": 6,
      "lastEdited": "2026-03-19 02:20:29.561651506 +0330 +0330",
      "isEntryPoint": false
    },
    {
      "name": "lib.rs",
      "type": "rs",
      "path": "src/lib.rs",
      "size": 1610,
      "lines": 60,
      "lastEdited": "2026-03-19 11:00:25.677804666 +0330 +0330",
      "isEntryPoint": false
    }
  ],
  "total_files": 2,
  "total_dirs": 2,
  "dependencies": null,
  "readme": ""
}
```

or you could use TOON format for more token effiecent use for LLMs:
```bash
ctx3 context -t <path>
```
output sample:
```bash
root: /Users/parsabordbar/code/rust/learning-rust/exercises/advance_algorithms/epoch_rng
files[#2]{name,type,path,size,lines,last_edited,is_entry_point}:
  Cargo.toml,toml,Cargo.toml,80,6,"2026-03-19 02:20:29.561651506 +0330 +0330",false
  lib.rs,rs,src/lib.rs,1610,60,"2026-03-19 11:00:25.677804666 +0330 +0330",false
total_files: 2
total_dirs: 2
dependencies[#0]:
readme: ""
```