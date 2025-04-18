import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js'; // Import the database connection pool
import userRoutes from './routes/userRoutes.js'; // Import user routes
import errorHandling from './middlewares/errorHandler.js'; // Import error handling middleware
import createUserTable from './data/createUserTable.js'; // Import the function to create user table

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());
app.use(errorHandling);

// Routes
app.use('/api', userRoutes); // Use user routes for API requests


//Error handling middleware

// Create the user table if it doesn't exist
createUserTable();

//Testing POSTGRESQL connection
app.get('/', async (req, res) => {
  const result = await pool.query("SELECT current_database()"); // Get a client from the pool
  res.send(`The database name is : ${result.rows[0].current_database}`); // Send the database name as a response
  });

//Server running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});