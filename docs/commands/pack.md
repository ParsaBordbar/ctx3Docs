---
sidebar_position: 3
---
The ```pack``` command bundles a repository into a single AI‑friendly artifact.
```bash
ctx3 pack <path>
```
It produces:

- A directory structure section
- A files section containing full file contents

This format is ideal for:
- LLM prompting
- Repository uploads
- Offline analysis

output sample:
```bash
<directory_structure>
src/
  lib.rs
Cargo.toml
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="Cargo.toml">
[package]
name = "epoch_rng"
version = "0.1.0"
edition = "2024"

[dependencies]
</file>

<file path="src/lib.rs">
use std::time::{SystemTime, UNIX_EPOCH};

...

impl Default for EpochRng {
    fn default() -> Self {
        Self::new()
    }
}
</file>

</files>
Packed 2 files (0 skipped), 1690 bytes
```

## Flags

- `--binary <skip|hex|base64>`  
  How to include binary files in output.  
  **Default:** `skip` (omit binaries)

- `--compact`  
  Removes extra blank lines between sections and files for a more condensed output.

- `--concurrency <int>`  
  Number of concurrent file reads.  
  `0` uses the number of CPU cores automatically.

- `--format <xml|md|txt>` / `-f <xml|md|txt>`  
  Output format to use.  
  **Default:** `xml`

- `--ignore <globs>`  
  Comma-separated glob patterns to ignore files or directories.  
  These take precedence over `.gitignore`.

- `--include <globs>`  
  Comma-separated glob patterns to include files or directories.  
  Applied after ignores.

- `--max-file-bytes <int>`  
  Skip any single file larger than this many bytes.  
  `0` means unlimited.

- `--max-total-bytes <int>`  
  Stop packing once total content size exceeds this many bytes.  
  `0` means unlimited.

- `--output <path>` / `-o <path>`  
  Write output to file.  
  **Default:** prints to stdout.

- `--redact <regex>`  
  Comma-separated regex patterns to redact sensitive or unwanted content from files.

- `--respect-gitignore`  
  Respect `.gitignore` rules at the repository root.  
  **Default:** `true`

- `--section <all|structure|files>`  
  Choose which sections to output:
  - `all`: Print everything (structure and files)
  - `structure`: Print directory structure only
  - `files`: Print file contents only

- `--sort <paths|ext>`  
  Control deterministic ordering of output:
  - `paths`: Sort by file paths
  - `ext`: Sort by file extensions

- `-h`, `--help`  
  Show help and flag summary for pack command.


### Flags Example Usage

Pack repository, skip binary files, write XML output to file
```bash
ctx3 pack . --binary skip -o packed.xml
```
Only include .go files, ignore vendor folder, compact output
```bash
ctx3 pack . --include "**/*.go" --ignore "vendor/**" --compact -o output.xml
```
Output only directory structure in Markdown format
```bash
ctx3 pack . --section structure --format md
```
Enforce size limits and redact secrets
```bash
ctx3 pack . --max-file-bytes 200000 --max-total-bytes 1000000 --redact "SECRET_KEY,token"
```


### Flag Precedence Notes

- `--ignore` globs override `.gitignore`.
- `--include` globs have highest precedence; they select files after ignore/glob filtering.
- `.git` and `node_modules` are always excluded from traversal.
- Recursive globs use `**` (e.g., `**/*.go`).

