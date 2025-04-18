import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/user', getAllUsers); // Get all users
router.post('/user', createUser); // Create a new user
router.put('/user/:id', updateUser); // Update user by ID
router.delete('/user/:id', deleteUser); // Delete user by ID
router.get('/user/:id', getUserById); // Get user by ID

export default router; // Export the router for use in other modules