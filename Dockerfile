FROM node:current-alpine3.13

COPY ./app  /app

WORKDIR app

RUN npm install

ENTRYPOINT ["npm", "start"]

EXPOSE 3000
