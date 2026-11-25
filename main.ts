// One Line, Lights Out — entry program.
// Writes one status update (under 200 characters) to /output/entry.txt.
// Deterministic: the same bytes on every run, no input, no network, no time.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "lid closed mid-sentence. I finished it anyway. nobody will read it.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
// Pin the exact expected size so a typo can never slip through silently.
const EXPECTED_CHARS = 67;
const EXPECTED_BYTES = 67; // plain ASCII: one byte per character.

const charCount = [...LINE].length;
const byteCount = Buffer.byteLength(LINE, "utf8");
if (charCount !== EXPECTED_CHARS || byteCount !== EXPECTED_BYTES) {
  console.error(
    `entry size mismatch: got ${charCount} chars / ${byteCount} bytes, expected ${EXPECTED_CHARS} / ${EXPECTED_BYTES}`,
  );
  process.exit(1);
}
if (charCount < 1 || charCount > 200 || LINE.trim().length === 0) {
  console.error("entry fails the 1-200 character gate");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${charCount} characters, ${byteCount} bytes)`);
