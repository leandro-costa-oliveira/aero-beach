FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
COPY start.sh ./
RUN npm install --omit=dev

COPY prisma ./prisma
COPY dist ./src

CMD ["./start.sh"]