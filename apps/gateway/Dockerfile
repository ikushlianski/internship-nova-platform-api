# stage name is the same as NODE_ENV
FROM node:22-alpine as development
WORKDIR /usr/src/server

ARG GATEWAY_PORT
ARG POSTGRES_PASSWORD
ARG ENV_FILE

ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

COPY package*.json ./
COPY ${ENV_FILE} ./
COPY ./apps ./
COPY ./prisma ./prisma
COPY nest-cli.json ./
COPY tsconfig*.json ./

RUN npm ci

EXPOSE ${GATEWAY_PORT}

# `gateway` microservice not only starts but also runs migrations, because it's kind of "main" microservice
CMD ["./apps/gateway/entrypoint-gateway.sh"]

FROM development as production

COPY --from=base /usr/src/server/node_modules ./node_modules
COPY --from=base /usr/src/server/package*.json ./
COPY --from=base /usr/src/server/dist ./dist

RUN npm run build

EXPOSE ${GATEWAY_PORT}

CMD ["npm", "run", "start:prod" ]