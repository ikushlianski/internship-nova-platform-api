# write me a check if database is running on port 5432

# check if .env.development.local exists
if [ ! -f .env.development.local ]; then
  echo "File .env.development.local does not exist. Please create it."
  exit 1
fi

# check if .env.development.local is empty

if [ ! -s .env.development.local ]; then
  echo "File .env.development.local is empty. Please fill it with the required environment variables."
  exit 1
fi

# check if database is running on port 5432

if ! nc -z localhost 5432; then
  echo "Database is not running on port 5432. Please run 'npm run dev'"
  exit 1
fi

set -a
. ./.env.development.local
set +a

export HOST=localhost
export DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${HOST}:${DATABASE_PORT}/${POSTGRES_DB}?schema=public"

prisma migrate dev --create-only