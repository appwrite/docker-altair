FROM node:18-alpine3.16 as build

WORKDIR app

COPY ./app/package.json /app/package.json
COPY ./app/package-lock.json /app/package-lock.json

RUN npm install

FROM node:18-alpine3.16 as final

WORKDIR app

COPY --from=build /app/node_modules /app/node_modules
COPY ./app  /app

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

