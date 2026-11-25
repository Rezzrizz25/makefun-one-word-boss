// One Word for the Boss — make.fun entry
// The entry is exactly one word describing the boss: "Meetingmancer".
// Exact character count: 13 characters (M-e-e-t-i-n-g-m-a-n-c-e-r).
// It is a single word with no spaces, within the gate of 1 to 30 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RAW_WORD = "Meetingmancer";
// Trim any accidental whitespace so the gate never sees a padded word.
const WORD = RAW_WORD.trim();

if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry must be 1 to 30 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word with no spaces");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
