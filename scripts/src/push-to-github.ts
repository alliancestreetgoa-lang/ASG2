/**
 * Push the current branch to the ASG2 GitHub repository.
 *
 * Required environment variable (checked in order):
 *   GITHUB_PERSONAL_ACCESS_TOKEN  – Personal access token with repo write access.
 *   GITHUB_TOKEN                  – Fallback token if the above is not set.
 *
 * Optional environment variables:
 *   FORCE_PUSH=1  – Pass --force to git push. Use with caution: this rewrites
 *                   remote history and cannot be undone. Off by default.
 *
 * Usage:
 *   pnpm run push:github
 *   FORCE_PUSH=1 pnpm run push:github
 */
import { execFileSync } from "child_process";

const token =
  process.env.GITHUB_PERSONAL_ACCESS_TOKEN ?? process.env.GITHUB_TOKEN;
if (!token) {
  console.error(
    "Error: neither GITHUB_PERSONAL_ACCESS_TOKEN nor GITHUB_TOKEN is set."
  );
  process.exit(1);
}

const repo = "https://github.com/alliancestreetgoa-lang/ASG2.git";
const remoteUrl = `https://x-access-token:${token}@github.com/alliancestreetgoa-lang/ASG2.git`;
const forcePush = process.env.FORCE_PUSH === "1";

function runCapture(cmd: string, args: string[]): string {
  return execFileSync(cmd, args, { encoding: "utf8", stdio: "pipe" }).trim();
}

let branch: string;
try {
  branch = runCapture("git", ["rev-parse", "--abbrev-ref", "HEAD"]);
} catch {
  console.error("Error: could not determine the current git branch.");
  process.exit(1);
}

const refspec = `HEAD:refs/heads/${branch}`;
const pushArgs = ["push", remoteUrl, refspec];
if (forcePush) {
  pushArgs.push("--force");
  console.log("FORCE_PUSH=1 detected — pushing with --force.");
}

console.log(`Pushing branch '${branch}' to ${repo} ...`);

try {
  execFileSync("git", pushArgs, { stdio: ["pipe", "inherit", "inherit"] });
  console.log(`Done. Branch '${branch}' pushed to ${repo}`);
} catch (err: unknown) {
  const message = err instanceof Error ? err.message : String(err);
  const sanitized = message.replaceAll(token, "<TOKEN>");
  console.error("Push failed:\n" + sanitized);
  process.exit(1);
}
