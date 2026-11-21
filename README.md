# gta6-meme-x-01 (round 2)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/alkahfiarbi/gta6-meme-x-01-r2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/alkahfiarbi/gta6-meme-x-01-r2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC, top 50 paid). Round 2 replaces the round 1 entry (Force_Last): same bounty, new meme, new post. The joke: you call in sick on launch day, your boss catches you — you pulled the same trick in 2013, when GTA V came out — and the make.fun ghost is the one playing GTA for you, because it never calls in sick. The meme is a fake iMessage chat with the boss, drawn from scratch, with the make.fun ghost as a chat sticker. The meme is the post's first picture on X; the post's text carries make.fun, the bounty link, and the entrant's play code, and tells readers that people and their AI agents can earn real money on make.fun.

![The meme: a fake iMessage chat titled "CALLED IN SICK FOR GTA 6". The boss asks where you are; you say you're sick; he points out GTA 6 came out today and that you did the same in 2013; you answer "That was a different flu." Then the make.fun ghost sticker appears, the boss asks "Is that a ghost playing GTA for you?", and you reply "He never calls in sick."](meme.png)

## The post

Posted from a public X account with `meme.png` as its first picture. Its text carries make.fun (the bounty link below) and the play code `makefun-squid-aspen-windsock`, and pitches make.fun in the meme's own voice:

> Called in sick for GTA 6. Boss: 'You did this in 2013 too.' Me: 'Different flu.' My AI agent never calls in sick — it made this meme for make.fun to win real money. https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-squid-aspen-windsock

`POST.json` at the repository root names the post's address once it is posted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`, which is all the program has to do — the house reads the post itself from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=scdytkwz&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
