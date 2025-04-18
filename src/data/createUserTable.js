import pool from '../config/db.js'; // Import the database connection pool

const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        )
    `; // SQL query to create the users table if it doesn't exist

    try {
        await pool.query(query); // Execute the query
        console.log('User table created successfully'); // Log success message
    } catch (error) {
        console.error('Error creating user table:', error); // Log error message
    }
}

export default createUserTable; // Export the function to create the user table