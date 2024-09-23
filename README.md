# Nova Platform API Docs

This is the official documentation for the Nova Platform API. The Nova Platform API is a RESTful API that allows you to interact with the Nova Platform powering various educational products. 

All diagrams: https://drive.google.com/file/d/1YB-J0ERmViDB19qaKqOs9ASoyylDpZxG/view?usp=drive_link

## Tech Stack

- Typescript
- Nest.js
- ORM: Prisma
- Database: PostgreSQL

## Setting up dev environment

1. Create `.env.development.local` based on `.env.example` and fill in the necessary environment variables. Go to https://www.notion.so/Local-setup-for-all-devs-env-files-f01268491e29406699d04eb1183b2af4?pvs=4 or ask your team for help if you are unsure about what to fill in.
2. Run `npm install` to install the necessary dependencies.
3. Ensure you have Docker up and running.
4. Ensure you don't have Postgres running on your local machine on port `5432`. If you do, stop it or remove it entirely. Otherwise, you will have port conflicts with docker. We need only what will run inside Docker.
5. Run `npm run dev` (for Windows `npm run dev:bash`) to start the development server. This should start Docker Compose, run migrations in the docker DB and run the API Gateway on `http://localhost:3000` and microservices on other `localhost` ports.
6. See database seeding instructions below to seed the database with initial data.
7. If you're a frontend developer, you can now start your frontend app and log in via Google to get a token.
8. If you're a backend dev:
   1. run `npm run prisma:generate` to generate Prisma client. For Webstorm, you will have to restart Typescript service to get the generated types reflected in your code.
   2. to get the token for API-only development without frontend, you can issue a POST request with a payload of `name` and `email` to `http://localhost:3000/api/v1/auth/token` and get back a dev token that has access to all private endpoints. **This token will work only in development environment and is good for API development**.

## Authentication

![Authentication with Next.js and Nest.js](documentation/auth.png)

## Prisma Migration

### Migrations in dev

Migrations are created and run automatically as you change your Prisma schema and restart docker-compose.

> You want to avoid using auto synchronization provided by your ORM (e.g. "push: true" or "sync") because it may lead to problems and forgetting to generate migrations that must be part of the codebase.

If the migrations did not run automatically, you can run them manually with the following command:

```bash
npm run migrate:local
```

This will run the migrations as well as seeds in the dev environment for your dockerized database.

### Migrations in production

All pending migrations are applied to the production or staging database automatically as part of CI job when deploying a new version of the application.

## Seeding the database

To seed the database with initial data, ensure your docker compose is running and use the following command:

```bash
npm run seed:dev
```

This will seed the database with initial data provided in `prisma/sampleData.ts`. The seeding script itself is in `prisma/seed.ts`. `npm run seed:dev` will run the seeding script in the development environment and ensure all required env vars are applied locally.

## RabbitMQ
You can test RabbitMQ sending GET request to /users/test_RMQ
You can test RabbitMQ sending GET request to /learning/test_RMQ
You should receive back: 
{
    "success": true
} 
