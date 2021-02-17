# Client for AdmitHub Code Challenge

> Intended to be used with [`server`](../server/README.md).

## Technologies

> Only important tech extended from base requirements of project are listed here

- [axios](https://github.com/axios/axios) - Promise based HTTP client, still
  has better API than built-in `fetch` :grinning:.
- [prop-types](https://github.com/facebook/prop-types) - Runtime type checking
  for `react`.
- [redux](https://github.com/reduxjs/redux) - Flux-like state management pattern
  implementation.
- [redux-logic](https://github.com/jeffbski/redux-logic) - Middleware for
  `redux` for handling side-effects and asynchronous logic.

## Architecture

### Overview

- Initial project was scaffolded using `create-react-app` but all extraneous
  content and logic was removed.
- Bootstrap stylesheet is loaded in `public/index.html`.

### File tree

- `src/` - All logic for app:
  - `App.js` - Main app component.
  - `index.css` - App-wide styling.
  - `index.js` - Entry point for virtual DOM into DOM, as well as `redux`
    state provider.
  - `components/` - Contains all components besides `App` component.
  - `lib/` - Custom libraries and helper modules.
  - `redux/` - Redux actions, action generators, reducers, and logics:
    - `/actions` - Action names and action generators.
    - `/reducers` - Reducers for different segments of app state.
    - `/logics` - `redux-logic` "logics" that intercept `redux` actions and
      perform side-effects and asynchronous operations.

## Setup

1. Run `npm install` to install dependencies.
2. Run `npm run start` to run client.
