FROM node:20.11.1-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .

RUN npm run build

FROM node:20.11.1-alpine as runner

ENV NODE_ENV=production

COPY --from=builder /app/react/build /app/react/build

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]