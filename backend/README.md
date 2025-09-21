# How to initialize a dev enviroment

install all dependencies:
`npm install`

generate prisma local files:
`npx prisma generate`

create a new dev db:
`npx migrate dev `

copy the `.env.example` information into a new `.env` file, and add the correct values.

then just start with `npm run dev`

# last tested specs:
- node 22.19.0

