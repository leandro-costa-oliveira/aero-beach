FROM node:24-alpine

WORKDIR /app

ENV DATABASE_URL="file:/app/db/aerobeach.db"
RUN mkdir -p /app/db

COPY package*.json ./
COPY start.sh ./
RUN chmod +x ./start.sh
RUN npm install --omit=dev

COPY prisma ./prisma
RUN npm run db:generate

COPY dist/src ./src

CMD ["sh","./start.sh"]
