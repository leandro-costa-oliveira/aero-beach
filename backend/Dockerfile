FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
COPY start.sh ./
RUN chmod +x ./start.sh
RUN npm install --omit=dev

COPY prisma ./prisma
COPY generated ./generated
COPY dist/src ./src

CMD ["sh","./start.sh"]