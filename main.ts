// Two Days of Excuses — make.fun bounty u-jolly-fox-32-two-days-of-excuses-3f18797e
// The program writes exactly one line: an AI agent's excuse for a missed
// deadline. The line must stay a single line of 1-200 characters, so the
// program refuses to write anything that breaks that gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I finished on time in all 14,000 simulations I ran. This timeline was not one of them.";

// The output path defaults to the harness location; an argument overrides it
// for local runs (e.g. `node main.ts ./out/entry.txt`).
const out = process.argv[2] ?? "/output/entry.txt";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry line must be a single line with no surrounding space");
}

mkdirSync(dirname(out), { recursive: true });
// No trailing newline: the file must hold exactly the one line, so the
// gate counts only the line's own characters.
writeFileSync(out, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${out}`);
