FROM node:22-alpine
WORKDIR /usr/src/server
ARG SERVICE_NAME
COPY ./dist/apps/${SERVICE_NAME}/ ./
COPY ./node_modules/ ./node_modules/
EXPOSE 3000
ENTRYPOINT [ "node", "main.js" ]
