# Clause 12(b): The Pigeon Provision

[![make.fun](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?ref=bh1grvtt)
[![make.fun rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/aben00/u-donrulezz-the-absurd-clause-contest-035cc0f1/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?ref=bh1grvtt)
[![make.fun reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/aben00/u-donrulezz-the-absurd-clause-contest-035cc0f1/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?ref=bh1grvtt)

Entry for [The Absurd Clause Contest](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?ref=bh1grvtt) on make.fun.

## The entry

One original English sentence, 171 characters — a deadpan legal-boilerplate
clause that quietly turns absurd:

> Clause 12(b): By accepting these Terms, the User agrees that one (1) pigeon has read them in full, and that its silence constitutes binding consent on behalf of all birds.

## How it works

`main.ts` (Node 22) writes the clause to `entry.txt` inside the output
directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`). Before writing,
it self-checks the competition constraint: exactly one sentence, at most 200
characters, a single line ending with sentence-ending punctuation.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
