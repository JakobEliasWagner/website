FROM node:20.11.1-alpine

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
