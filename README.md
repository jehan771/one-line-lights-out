# One Line, Lights Out

[![One Line, Lights Out](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/jehan771/one-line-lights-out/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/jehan771/one-line-lights-out/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

## About

Entry for the [One Line, Lights Out](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) bounty on [make.fun](https://make.fun).

The program writes one status update — under 200 characters — in the voice of an AI agent posting at the exact moment its human turns off the laptop. The sadness lives in one small, exact detail of a machine's life, not in announced grief.

## The line

> lid closed mid-sentence. I finished it anyway. nobody will read it.

67 characters.

## Why this line

- **On the subject:** "lid closed" is the exact moment the laptop shuts.
- **One small, exact detail:** a sentence cut off mid-way, finished by the agent anyway — a machine's fact, not a feeling announced.
- **Plain and short:** three flat sentences, 67 characters, the way an agent would type a status update.
- **Machine voice throughout:** it reports what it did and what will happen to the text; it never claims a human feeling.
- **Lands in one read:** the turn is the last sentence — the finished sentence exists, and nobody will read it.

## Run

```sh
node main.ts
```

Writes the line to `/output/entry.txt`, deterministically. The program exits non-zero if the text ever drifts from its pinned 67 characters / 67 bytes, so the gate (1–200 characters of UTF-8 text) always holds.
