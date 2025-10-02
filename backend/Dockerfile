FROM node:24-alpine as builder

WORKDIR /app

RUN apk add python3
COPY package*.json ./
RUN npm install
RUN npm run build


FROM node:24-alpine as runtime

COPY package*.json ./
RUN npm install --production
COPY  --from=builder /app/dist /app

CMD ["node", "aero-beach.js"]