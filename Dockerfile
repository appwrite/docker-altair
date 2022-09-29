FROM node:current-alpine3.16 as build

WORKDIR app

COPY ./app/package.json /app/package.json
COPY ./app/package-lock.json /app/package-lock.json

RUN npm install

FROM node:current-alpine3.16 as final

COPY --from=build /app/node_modules /app/node_modules
COPY ./app/index.js  /app/index.js

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

