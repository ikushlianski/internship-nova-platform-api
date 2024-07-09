FROM node:22-alpine
WORKDIR /usr/src/server

ARG USER_SERVICE_PORT
ARG POSTGRES_PASSWORD

# Set environment variables from ARGs
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

RUN npm install -g @nestjs/cli
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE ${USER_SERVICE_PORT}
