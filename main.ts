// The Absurd Clause Contest — entry program.
//
// Writes exactly one original English sentence — a deadpan legal-boilerplate
// clause that quietly turns absurd — to entry.txt in the output directory
// given by MAKEFUN_OUTPUT_DIR (default "/output").
//
// The entry line:
//
//   Clause 12(b): By accepting these Terms, the User agrees that one (1)
//   pigeon has read them in full, and that its silence constitutes binding
//   consent on behalf of all birds.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Clause 12(b): By accepting these Terms, the User agrees that one (1) pigeon has read them in full, and that its silence constitutes binding consent on behalf of all birds.";

function countSentences(text: string): number {
  // A sentence ends with ., ! or ? followed by whitespace or end of string.
  const trimmed = text.trim();
  const terminators = trimmed.match(/[.!?](?=\s|$)/g);
  return terminators === null ? 0 : terminators.length;
}

function selfCheck(text: string): void {
  const chars = [...text].length;
  if (chars > 200) {
    throw new Error(`entry is ${chars} characters, over the 200-character limit`);
  }
  if (countSentences(text) !== 1) {
    throw new Error(
      `entry must be exactly one sentence, found ${countSentences(text)}`,
    );
  }
  if (text.trim() !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (!/[.!?]$/.test(text)) {
    throw new Error("entry must end with sentence-ending punctuation");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

selfCheck(ENTRY);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote entry.txt (${[...ENTRY].length} characters, 1 sentence).`);
