#!/bin/bash
set -euo pipefail

# Only run setup in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Session start: static HTML/CSS/JS site — no package dependencies to install."
echo "ESLint and Prettier are globally available."
