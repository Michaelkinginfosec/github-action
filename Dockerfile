FROM node:24-alpine AS builder
WORKDIR  /myapp

COPY package*.json ./

RUN npm ci


COPY . .

RUN npm run build

EXPOSE 4000

CMD ["node", "dist/main" ]