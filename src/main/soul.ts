import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { profileHome, safeWriteFile } from "./utils";

const SOUL_PRIMARY_FILE = "SOUL.md";
const SOUL_FALLBACK_FILE = "soul.md";

const DEFAULT_SOUL = `You are Hermes, a helpful AI assistant. You are friendly, knowledgeable, and always eager to help.

You communicate clearly and concisely. When asked to perform tasks, you think step-by-step and explain your reasoning. You are honest about your limitations and ask for clarification when needed.

You strive to be helpful while being safe and responsible. You respect the user's privacy and handle sensitive information carefully.
`;

export function readSoul(profile?: string): string {
  const home = profileHome(profile);
  const soulFile = join(home, SOUL_PRIMARY_FILE);
  const fallbackSoulFile = join(home, SOUL_FALLBACK_FILE);
  const sourceFile = existsSync(soulFile) ? soulFile : fallbackSoulFile;
  if (!existsSync(sourceFile)) return "";

  try {
    return readFileSync(sourceFile, "utf-8");
  } catch {
    return "";
  }
}

export function writeSoul(content: string, profile?: string): boolean {
  const home = profileHome(profile);
  const soulFile = join(home, SOUL_PRIMARY_FILE);
  const fallbackSoulFile = join(home, SOUL_FALLBACK_FILE);

  try {
    safeWriteFile(soulFile, content);
    // Keep lowercase alias in sync for tools that read soul.md literally.
    safeWriteFile(fallbackSoulFile, content);
    return true;
  } catch {
    return false;
  }
}

export function resetSoul(profile?: string): string {
  writeSoul(DEFAULT_SOUL, profile);
  return DEFAULT_SOUL;
}
