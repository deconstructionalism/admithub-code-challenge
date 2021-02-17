# Server for AdmitHub Code Challenge

> Intended to be used with [`client`](../client/README.md).

## Technologies

> Only important tech extended from base requirements of project are listed here

- [axios](https://github.com/axios/axios) - Promise based HTTP client, still
  has better API than built-in `fetch` :grinning:.
- [body-parser](https://github.com/expressjs/body-parser) - `express` middleware
  for parsing request body.
- [cors](https://github.com/expressjs/cross) - `express` middleware for
  configuring cross-origin resource sharing.
- [express](https://github.com/expressjs/express) - Minimalist `node`-based web
  server.
- [helmet](https://github.com/helmetjs/helmet) - `express` middleware
  that sets HTTP headers following best-practices to reduce threat surface.
- [knex](https://github.com/knex/knex) - Query builder for various SQL-family
  databases.
- [morgan](https://github.com/expressjs/morgan) - `express` logging middleware.
- [nodemon](https://github.com/remy/nodemon) - Hot-reload application runner.
- [sqlite3](https://github.com/mapbox/node-sqlite3) - `node` bindings for
  flat file database SQLite3.

## Architecture

### Overview

- Server build using `express`.
- Database layer is handled by `SQLite3`. Mostly used a document store but still
  probably preferable to using `mongoDb`. `couch`/`pouch` DB could replace
  this in the future.
- Country data is using the `alpha3Code` prop as a unique Id. Supplemental
  countries all use a 4-digit novel code to avoid any name collisions with real
  alpha 3 country codes.

### Database

- Database has two tables:
  - **pinned_countries** - Only using single row with a `countries` JSON key
    to store array of pinned countries. *This is a bit hacky*. Schema for table
    is:
    - `id (string, required)` - Auto-incrementing Primary Key.
    - `countries (json, required)` - Key to store pinned countries array data.
  - **extended_countries** - Country data to extend searchable countries
    provided by the REST Countries API. Schema for table
    is:
    - `id (string, required)` - Auto-incrementing Primary Key.
    - `alpha3Code (string, required)` - Unique code for the country. To
       override country data from REST Countries API, this has to match a
       country code from that API.
    - `flag (string, required)` - URL to flag image.
    - `name (string, required)` - Name of country.

### File Tree

- `knexfile.js` - `knex` configuration for "development" environment (the only
   environment we need for this app).
- `server.js` - `express` server instance with middleware and route bindings.
- `controllers/` - Database controllers with one module per associated table.
- `database/` - Database file, migrations, seeds, and connection cursor:
  - `migrations/` - Database migrations for `knex`.
  - `seeds/` - Database seeds for `knex`.
  - `connect.js` - Database connection cursor.
  - `db.sqlite` - Database file.
- `routes/` - `express` router modules with one module per associated table.
- `utils/` - bash utilities used by `npm` scripts to manipulate the database.

## Setup

1. Run `npm install` to install dependencies.
2. Run `npm db:reset` to instantiate database and seed with data.
3. Run `npm run server` to run client.
