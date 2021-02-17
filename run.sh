#!/bin/bash

# look for `--clien-only` positional arg
if [[ $* == *--client-only ]]
then

  # only run client application
  npm run start --prefix client
else

  # run client and server applications
  npm run start --prefix client & npm run server --prefix server
fi
