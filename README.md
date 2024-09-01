# Nova Platform API Docs

This is the official documentation for the Nova Platform API. The Nova Platform API is a RESTful API that allows you to interact with the Nova Platform powering various educational products.

All diagrams: https://drive.google.com/file/d/1YB-J0ERmViDB19qaKqOs9ASoyylDpZxG/view?usp=drive_link

## Tech Stack

- Typescript
- Nest.js
- ORM: Prisma
- Database: PostgreSQL

## Setting up dev environment

1. Create `.env.development.local` based on `.env.example` and fill in the necessary environment variables. Ask your team for help if you are unsure about what to fill in.
2. Run `npm install` to install the necessary dependencies.
3. Ensure you have Docker up and running.
4. Run `npm run dev` (for Windows `npm run dev:bash`) to start the development server. This should start Docker Compose and run the API Gateway on `http://localhost:3000` and microservices on other `localhost` ports.
5. To get the token for development, you can issue a POST request with a payload of `name` and `email` to `http://localhost:3000/api/v1/auth/token` and get back a dev token that has access to all private endpoints. This token will work only in development environment and is good for API development. If you are a frontend or full-stack developer, spin up a frontend app and log in via Google as usual.

## Authentication

![Authentication with Next.js and Nest.js](documentation/auth.png)

## Prisma and database

1. Migration :

(development) migration based on .env.development.local:
npm run migrate:dev

(production) migration based on .env:
npm run migrate:prod

2. Seed database (default data you can find in sampleData.ts):

(development)
npm run db:seed-dev
