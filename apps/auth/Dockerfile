FROM node:22-alpine
WORKDIR /usr/src/server

ARG AUTH_SERVICE_PORT
ARG POSTGRES_PASSWORD

# Set environment variables from ARGs
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

RUN npm install -g @nestjs/cli
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE ${AUTH_SERVICE_PORT}
