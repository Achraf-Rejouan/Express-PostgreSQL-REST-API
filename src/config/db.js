import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); 
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})  // Create a connection pool to the PostgreSQL database

pool.on('connect', () => {
  console.log('Connected to the database'); // Log a message when connected to the database
})

export default pool; // Export the connection pool for use in other modules