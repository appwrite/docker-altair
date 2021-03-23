FROM node:current-alpine

COPY ./app  /app

WORKDIR app

RUN npm install

ENTRYPOINT ["npm", "start"]

EXPOSE 3000
