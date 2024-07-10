# Nova Platform API Docs

This is the official documentation for the Nova Platform API. The Nova Platform API is a RESTful API that allows you to interact with the Nova Platform powering various educational products. 

All diagrams: https://drive.google.com/file/d/1YB-J0ERmViDB19qaKqOs9ASoyylDpZxG/view?usp=drive_link

## Tech Stack

**Frontend**: Next.js

**Backend**: Nest.js

## Setting up the API

1. Create `.env.development.local` based on `.env.example` and fill in the necessary environment variables. Ask your team for help if you are unsure about what to fill in.
2. Run `npm install` to install the necessary dependencies.
3. Ensure you have Docker up and running.
4. Run `npm run dev` to start the development server. This should start Docker Composer and run the API Gateway on `http://localhost:3000` and microservices on other `localhost` ports. 

## Authentication

![Authentication with Next.js and Nest.js](documentation/auth.png)