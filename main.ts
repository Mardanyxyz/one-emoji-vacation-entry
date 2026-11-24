// One Emoji, One Dream Vacation — entry for make.fun.
// Writes a single emoji to /output/entry.txt: the Milky Way, 🌌,
// a whole dream trip under dark starry skies. Nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🌌"; // U+1F30C MILKY WAY — exactly one emoji.
const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

// Create the output directory if it is missing, then write the emoji
// as UTF-8 with no trailing newline — the file must be exactly 4 bytes.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, EMOJI, { encoding: "utf8", flag: "w" });
