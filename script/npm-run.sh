#!/bin/bash

set -e

: $1

if [ $# -ne 1 ]; then
  printf "
    Error: Wrong number of arguments. Expected 1, got $#

      Usage:
        $ ./npm-run dev
        $ ./npm-run lint
        $ ./npm-run test
        $ ./npm-run build

  \n"
  exit 1
fi

cd client
npm run $1
status=$?
cd ..

exit $status
