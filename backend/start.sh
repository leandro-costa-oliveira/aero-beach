#!/bin/sh
set -eu

npm run db:migrate:deploy

exec node src/aero-beach.js
