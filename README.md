# AdmitHub Code Challenge

This repository contains a fully self-enclosed solution to the code challenge
described [here](https://docs.google.com/document/d/1JpdMzHdatfOBlTeZVqDopwCsCQB0l2oT1opAS1Emjo4/edit)
as part of the interview process for Arjun Ray.

- [client documentation](./client/README.md)
- [server documentation](./server/README.md)

## Requirements

- node (tested on `v14.0.0`)
- POSIX environment (tested on OS X Darwin `v20.1.0`)

## Important Points

- `client` and `server` folders could be split into two repositories but are
  provided together for convenience.
- Tech stacks and architectures are described in `client` and `server` docs.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
  standard (see [changelog](#changelog) below for quick overview).
- Code style roughly follows ESLint standard.
- Each completed step of the challenge has an associated `git` tag.
- Testing was not included as it seemed out of scope for this challenge.
- `prop-types` is used on the `client` for run-time type checking but did
  not use TypeScript for either part of the project.
- Comments and commit messages err on the side of verbosity to make abundantly
  clear my motivations and reasoning for this exercise.

## Setup

1. Clone this repo locally.
2. Navigate into `client` and `server` directories and follow setup
  instructions described in their README files.
3. Once set up, there is a script at the base of this repo that you can run
   to get the client and server running together. To use this, run `sh run.sh`.

> **NOTE**: You can also pass a `--client-only` flag to `run.sh` if you want
> to test the fallback UX for the client when the server is unavailable.

## Changelog

```git
(tag: part5-supplemental-countries)

73594fe docs: finalize all docs
17355ca feat(client): show message when server is unavailable
502eafa style(client): fix code style issues
b804f59 style(server): fix code style issues
ae4a005 fix(server): merge extended countries properly
f97fdf5 refactor(client): handle failed pin country request
3c943b1 fix(client): prop types errors
e32fbfe feat(client): fallback search countries request
701f1e9 docs(server): spelling error
987b37d fix(server): returned data from countries search
b2ff288 docs: document `--client-only` flag usage
d14f916 feat: run script option for client only
556e755 feat(server): proxied countries extended search
7eb1708 feat(server): add extended countries table and seeds

(tag: part4-persistence)

5c4410c fix(server): database table name in controller
2086722 refactor(client): use pinned country redux state
0504e51 feat(client): pinned county logics
79c0fb7 feat(client): pinned country reducer and actions
606da3d docs(client): country logics comments
ef69387 docs: add README for entire project
679e45d refactor(server): renamed routes
aab3da8 feat(server): migrations and seeds for DB
2daea92 feat(server): controller and routes for pinned countries
52bd58e docs(server): document `db:reset` script
c303449 feat(server): configure sqlite3 with knex
3b9aed1 refactor(client): use redux for country data
32cede8 feat(client): add react-redux and redux-logic

(tag: part3-pinned-list)

3ac9f78 style(client): better layout
16feb29 feat(client): finish selected countries component
7d33d2e refactor(client): country list item component
d141333 refactor(client): search component
ebc039c feat(client): pinned country state in app

(tag: part2-search)

6a7bc58 feat(client): add search functionality
9a28741 feat(client): create effects hook to debounce callback
7c06f2d feat(client): create module to query country API
c85ca47 build(client): install axios dep

(tag: part1-list.item)

475b973 feat(client): create list item
6330b9e build(client): install prop-types dep
b65b700 feat: remove global config
8345456 feat: add global config and script
cdcbec3 feat(server): add boilerplate
5abf200 feat(client): add boilerplate

```

## Potential Next Features

### Client

- More nuanced handling of failed requests to `/pinned` routes.
- Pagination for countries found in search.
- Responsive design.
- Animations and nicer CSS.

### Server

- Server endpoints for CRUD on supplemental countries.
- Server-side caching country data from request to REST Countries API for
  more responsive UX.

### Cross-Cutting

- Handling of offline-to-online transitions and eventually-consistent server
  database state for pinned countries.
- "Clear all" pinned countries functionality.
- Isomorphic logic and state of supplemental countries for offline availability.
