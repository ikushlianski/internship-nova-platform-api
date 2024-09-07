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
6. If you're a frontend developer, you can now start your frontend app and log in via Google to get a token.
7. If you're a backend dev, then to get the token for API-only development without frontend, you can issue a POST request with a payload of `name` and `email` to `http://localhost:3000/api/v1/auth/token` and get back a dev token that has access to all private endpoints. **This token will work only in development environment and is good for API development**.

## Authentication

![Authentication with Next.js and Nest.js](documentation/auth.png)

## Prisma Migration

This section describes the Prisma migration commands used in our project.

> You want to avoid using auto synchronization provided by your ORM (e.g. "push: true" or "sync") because it may lead to problems and forgetting to generate migrations that must be part of the codebase.

### First you need to create migration:

```
npm run migrations:generate
```

Generates a new migration file without applying it to the database. This is useful for creating migration files when you want to review them or apply them manually later.

You need to execute this command every time you change the schema in `prisma/schema.prisma` file. **This is a manual step that you need to remember to do.**

### After that you can run migration locally:

```
npm run migrate:dev
```

Generates and applies a migration to the local development database, used during active development.

> You don't usually need to run this command manually, as it is run automatically when you start the development server.

### Production migrations

All pending migrations are applied to the production or staging database automatically as part of CI job when deploying a new version of the application.

