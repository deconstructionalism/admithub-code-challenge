#!/bin/bash

# drop database
rm -f ./database/db.sqlite

# create database
touch ./database/db.sqlite

# run migrations
npx knex migrate:latest

# seed database
npx knex seed:run