import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Error handling middleware

//Server running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});