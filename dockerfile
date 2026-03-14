FROM node:slim AS builder

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app
COPY . .
RUN npm i
RUN npm run generate
CMD ["npm", "run", "dev"]