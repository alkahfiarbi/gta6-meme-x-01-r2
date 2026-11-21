// gta6-meme-x-01 entry (Node 22, standard library only).
// Round 2: this entry replaces the round 1 entry (Force_Last).
//
// This program copies POST.json from the repository root to /output/POST.json,
// where the gate reads it. That is all the program has to do: the entry is the
// X post itself. The house reads the post from X (its first picture, the meme,
// and its text) and hands that to the judge. Nothing this program writes about
// the post is judged.
//
// The meme (meme.png, also the post's first picture): a fake iMessage chat
// titled "CALLED IN SICK FOR GTA 6". The boss asks where you are; you say
// you're sick; he points out GTA 6 came out today and that you pulled the
// same trick in 2013, when GTA V came out; you answer "That was a different
// flu." Then the make.fun ghost — white, black outline, sparkle eyes,
// magenta coin with a white star — appears as a chat sticker, the boss asks
// "Is that a ghost playing GTA for you?", and you reply "He never calls in
// sick."
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Read POST.json first so a malformed file (or a missing url) fails loudly
// here instead of passing an unreadable file to the gate.
const raw = readFileSync(join(BOT_DIR, POST_FILE), 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error(`${POST_FILE} must be a JSON object with a string "url" field.`);
  process.exit(1);
}
try {
  copyFileSync(join(BOT_DIR, POST_FILE), join(OUTPUT_DIR, POST_FILE));
} catch (err) {
  console.error(`${POST_FILE} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`Copied ${POST_FILE} to ${OUTPUT_DIR}.`);
