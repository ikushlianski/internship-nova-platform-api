-- 1. Create the users table if it does not exist
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create a temporary table to store data from JSON
CREATE TEMP TABLE tmp_user_data (
    email VARCHAR(255)
);

-- 3. Insert data from the JSON file into the temporary table
COPY tmp_user_data (email)
-- specify the path to your file
FROM '/path/to/your/user_data.json' 
WITH (
    FORMAT json
);

-- 4. Delete users from the users table based on the email in the temporary table
DELETE FROM users
WHERE email IN (
    SELECT email FROM tmp_user_data
);

-- 5. Drop the temporary table
DROP TABLE tmp_user_data;

-- Confirm the changes
COMMIT;
