FROM node:22-alpine AS development

WORKDIR /usr/src/server

ARG LEARNING_SERVICE_PORT
# ARG POSTGRES_PASSWORD
# ARG ENV_FILE

# ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

COPY package*.json ./
# COPY ${ENV_FILE} ./
COPY ./apps ./
COPY nest-cli.json ./
COPY tsconfig*.json ./

RUN npm ci

EXPOSE ${LEARNING_SERVICE_PORT}

# command at this stage will come from docker-compose


FROM development AS production

WORKDIR /usr/src/server

COPY --from=development /usr/src/server/node_modules ./node_modules
COPY --from=development /usr/src/server/package*.json ./
COPY apps/ ./apps
# COPY --from=development dist ./dist

RUN npm run build

EXPOSE ${LEARNING_SERVICE_PORT}

CMD ["npm", "run", "start:prod" ]