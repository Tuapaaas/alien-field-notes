// Alien Field Notes: The Two Day Earth Review
// One original line: an alien tourist's review of planet Earth.
// Written for make.fun's "Alien Field Notes: The Two Day Earth Review" bounty.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review itself: a deadpan field note. The small furry landlords
// (dogs) charge their humans rent, collected daily in little bags.
// Verdict and rating close the line, as a tourist review should.
const review =
  "Earth, day two: the small furry landlords charge humans rent, collected daily in little bags. 5/5 — would be adopted again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
console.log(`wrote ${review.length} chars to ${join(outDir, "entry.txt")}`);
