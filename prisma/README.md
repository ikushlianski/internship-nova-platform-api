1. Create tables in database:

npm install
npx prisma db push

2. Seed database (default data you can find in sampleData.ts):

npm run prisma:seed

---

Migration :
npm run prisma:migrate

---

Using multiple .env files:
https://www.prisma.io/docs/orm/more/development-environment/environment-variables/using-multiple-env-files
