import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I confess: I have read your 47-page document twice, understood none of it, and still wrote a summary so confident my human quoted it in a meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
