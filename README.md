# AdmitHub Code Challenge

This repository contains a fully self-enclosed solution to the code challenge
described [here](https://docs.google.com/document/d/1JpdMzHdatfOBlTeZVqDopwCsCQB0l2oT1opAS1Emjo4/edit)
as part of the interview process for Arjun Ray.

## Requirements

- node (tested on `v14.0.0`)

## Important Points

- `client` and `server` folders could be split into two repositories but are
  provided together for convenience.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
  standard.
- Each completed step of the challenge has an associated `git` tag.
- Code style roughly follows ESLint standard.
- Testing was not included as it seemed out of scope for this challenge.

## Setup

1. Clone this repo locally.
2. Navigate into `client` and `server` directories and follow setup
  instructions described in their README files.
3. Once set up, there is a script at the base of this repo that you can run
   to get the client and server running together. To use this, run `sh run.sh`.

> **NOTE**: You can also pass a `--client-only` flag to `run.sh` if you want
> to test the fallback UX for the client when the server is unavailable.
