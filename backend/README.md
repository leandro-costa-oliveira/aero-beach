# How to initialize a dev enviroment

install all dependencies:
`npm install`

generate prisma local files:
`npx prisma generate`

create a new dev db:
`npx migrate dev `

copy the `.env.example` information into a new `.env` file, and add the correct enviroment values.

then just start with `npm run dev`

## last tested specs:
- node 22.19.0

# Troubleshooting

## How to fix migration issues when updating a dev database

- Delete generated folder
- run `npx prisma generate` command

This can happens due to file system permission when prisma tries to modify "query_engine-windows.dll.node" file inside /generated folder. You can delete the whole folder, since this process is made during a initialization of a new dev enviroment, similar as we do when we delete /node_modules folder.

