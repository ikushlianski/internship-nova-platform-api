# Explanation of psql command parameters:

1. **-U (User):**
   - Defines the PostgreSQL username under which you want to connect to the database.
   - Example: `psql -U your_username` will connect you to the database as user `your_username`.

2. **-d (Database):**
   - Specifies the database to connect to.
   - Example: `psql -d your_database` will connect you to a database named `your_database`.

3. **-f (File):**
   - Specifies the path to the SQL file that should be executed.
   - Example: `psql -f add_user.sql` will execute the SQL commands contained in the `add_user.sql` file.

### Command example

Team:

```bash
ADD USER

psql -U your_username -d your_database -f add_user.sql  

REMOVE USER

psql -U your_username -d your_database -f remove_user.sql  

- **-U your_username** - connects you to PostgreSQL under the user `your_username`.

- **-d your_database** - connects you to the `your_database` database.
- **-f add_user.sql** - executes all SQL commands contained in the `add_user.sql` file.