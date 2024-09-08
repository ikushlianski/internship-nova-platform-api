FROM node:22-alpine
WORKDIR /usr/src/server
COPY ./node_modules/ ./node_modules/

ARG SERVICE_NAME
COPY ./dist/apps/${SERVICE_NAME}/ ./

EXPOSE 3000
ENTRYPOINT [ "node", "main.js" ]
