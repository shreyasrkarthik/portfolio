#!/usr/bin/env bash
set -euo pipefail

ROOT="/home/srk/projects/portfolio"
AGENT_ENV="/home/srk/projects/portfolio-agent/.env"
LOG_DIR="$ROOT/automation/logs"
RUN_TS="$(date +%F-%H%M%S)"
RUN_DIR="$LOG_DIR/$RUN_TS"
LOCK_DIR="$ROOT/automation/.daily-improve.lock"
HISTORY_FILE="$ROOT/automation/improvement-history.md"

mkdir -p "$RUN_DIR"

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  exit 0
fi
trap 'rm -rf "$LOCK_DIR"' EXIT

cd "$ROOT"
export PATH="$HOME/.npm-global/bin:$PATH"

START_MARKER="$RUN_DIR/start.marker"
touch "$START_MARKER"

PROMPT_FILE="$ROOT/automation/generated-prompt.txt"
CODEX_OUT="$RUN_DIR/codex-last-message.txt"
CODEX_LOG="$RUN_DIR/codex.log"
CHANGED_FILE="$RUN_DIR/changed-files.txt"
STATUS_FILE="$RUN_DIR/status.txt"
BUILD_LOG="$RUN_DIR/build.log"

PREV_HISTORY="$(tail -n 80 "$HISTORY_FILE" 2>/dev/null || true)"

cat > "$PROMPT_FILE" <<EOF
$(cat "$ROOT/automation/base-prompt.txt")

## LinkedIn Context
$(cat "$ROOT/automation/linkedin-context.txt")

## Portfolio Inspiration Notes
$(cat "$ROOT/automation/inspiration-notes.txt")

## Recent Improvement History
${PREV_HISTORY:-No prior history yet.}
EOF

python3 "$ROOT/automation/send_telegram.py" \
  --env-file "$AGENT_ENV" \
  --chat-id-key TELEGRAM_CHAT_ID \
  --message "Daily portfolio Codex run started at $(date '+%F %T %Z')."

set +e
codex exec \
  --skip-git-repo-check \
  -s workspace-write \
  -C "$ROOT" \
  -o "$CODEX_OUT" \
  "$(cat "$PROMPT_FILE")" \
  >"$CODEX_LOG" 2>&1
CODEX_EXIT=$?
set -e

find "$ROOT" \
  -path "$ROOT/node_modules" -prune -o \
  -path "$ROOT/.next" -prune -o \
  -path "$ROOT/automation/logs" -prune -o \
  -path "$ROOT/.git" -prune -o \
  -type f -newer "$START_MARKER" -print | sed "s|$ROOT/||" | sort > "$CHANGED_FILE"

BUILD_OK=0
if [[ -s "$CHANGED_FILE" ]]; then
  set +e
  npm run build >"$BUILD_LOG" 2>&1
  BUILD_EXIT=$?
  set -e
  if [[ "$BUILD_EXIT" -eq 0 ]]; then
    BUILD_OK=1
  fi
else
  BUILD_EXIT=0
fi

{
  echo "run_ts=$RUN_TS"
  echo "codex_exit=$CODEX_EXIT"
  echo "build_exit=$BUILD_EXIT"
  echo "build_ok=$BUILD_OK"
} > "$STATUS_FILE"

CHANGED_PREVIEW="$(sed -n '1,30p' "$CHANGED_FILE" 2>/dev/null || true)"
[[ -n "$CHANGED_PREVIEW" ]] || CHANGED_PREVIEW="(no files changed)"

if [[ -f "$CODEX_OUT" ]]; then
  SUMMARY_BODY="$(sed -n '1,120p' "$CODEX_OUT")"
else
  SUMMARY_BODY="$(sed -n '1,120p' "$CODEX_LOG")"
fi

{
  echo "## $RUN_TS"
  echo "- codex_exit: $CODEX_EXIT"
  echo "- build_ok: $BUILD_OK"
  echo "- changed_files:"
  while IFS= read -r line; do
    [[ -n "$line" ]] && echo "  - $line"
  done < "$CHANGED_FILE"
  echo
  echo "### Summary"
  echo "$SUMMARY_BODY"
  echo
} >> "$HISTORY_FILE"

python3 "$ROOT/automation/send_telegram.py" \
  --env-file "$AGENT_ENV" \
  --chat-id-key TELEGRAM_CHAT_ID \
  --message "Daily portfolio Codex run finished.
codex_exit=$CODEX_EXIT
build_ok=$BUILD_OK

Changed files:
$CHANGED_PREVIEW

Summary:
$SUMMARY_BODY"
