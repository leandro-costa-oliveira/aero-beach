# How to initialize a dev enviroment

Copy `.env.example` to `.env` before running Prisma or starting the backend.
Set `JWT_SECRET` and keep `DATABASE_URL="file:./aerobeach.db"` for local development.
The relative SQLite path resolves from `backend/prisma/schema.prisma`, so the local database is `backend/prisma/aerobeach.db`.

The first account registered in an empty database receives the administrator role. Later registrations receive the player role.

install all dependencies:
`npm install`

generate prisma local files:
`npx prisma generate`

create a new dev db:
`npm run db:migrate:dev`

For container persistence and migration of existing databases, see [infra/README.md](../infra/README.md).

then just start with `npm run dev`

## last tested specs:

- node 22.19.0

# Troubleshooting

## How to fix prisma generate issues when updating typescript prisma types

- Delete generated folder
- run `npx prisma generate` command

This can happens due to file system permission when prisma tries to modify "query_engine-windows.dll.node" file inside /generated folder. You can delete the whole folder, since this process is made during a initialization of a new dev enviroment, similar as we do when we delete /node_modules folder.
