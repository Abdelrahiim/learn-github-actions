FROM node:18-alpine

WORKDIR /app

COPY ./dist .

CMD [ "node", "server.js" ]

