-- 1. Create the users table if not exists
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName: VARCHAR(255) NOT NULL
    role: VARCHAR(255) NOT NULL
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create the temp users table for stores data from JSON
CREATE TEMP TABLE tmp_user_data (
    firstName VARCHAR(255),
    lastName: VARCHAR(255) NOT NULL
    role: VARCHAR(255) NOT NULL
    email VARCHAR(255),
);

-- 3. insert user data from  JSON into temp users table
COPY tmp_user_data (firstName, lastName, email, role)
-- path to your file
FROM '/path/to/your/user_data.json' 
WITH (
    FORMAT json
);

-- 4. insert from temp table into users table
INSERT INTO users (firstName, lastName, email, role)
SELECT firstName, lastName, email, role FROM tmp_user_data;

-- 5. remove temp table
DROP TABLE tmp_user_data;

COMMIT;