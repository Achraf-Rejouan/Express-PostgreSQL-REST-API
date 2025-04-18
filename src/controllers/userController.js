import { createUserService, deleteUserService, updateUserService, getUserByIdService, getAllUsersService } from "../models/userModel.js";

const handelResponse = (res, status, message, data = null) => { 
  res.status(status).json({
    status: status,
    message: message,
    data: data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body; 
    try {
        const newUsers = await createUserService(name, email);
        handelResponse(res, 201, "User created successfully", newUsers);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService();
        handelResponse(res, 200, "Users fetched successfully", users);
    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id); // Fetch the user by ID
        if (!user) return handelResponse(res, 404, "User not found"); // If user not found, send 404 response
        handelResponse(res, 200, "User fetched successfully", user); // Send the user data in the response
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const user = await updateUserService(req.params.id, req.body.name, req.body.email); // Update the user by ID
        if (!user) return handelResponse(res, 404, "User not found"); // If user not found, send 404 response
        handelResponse(res, 200, "User updated successfully", user); // Send the updated user data in the response
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await deleteUserService(req.params.id, req.body.name, req.body.email); // Update the user by ID
        if (!user) return handelResponse(res, 404, "User not found"); // If user not found, send 404 response
        handelResponse(res, 200, "User deleted successfully", deleteUser); // Send the updated user data in the response
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
}