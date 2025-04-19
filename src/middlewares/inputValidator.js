import joi from 'joi';

const userScheme = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
});
const validateUser = (req, res, next) => {
    const { error } = userScheme.validate(req.body); // Validate the request body against the schema
    if (error) {
        return res.status(400).json({ // If validation fails, send a 400 response with the error message
            status: 400,
            message: error.details[0].message,
        });
    }
    next(); // If validation passes, proceed to the next middleware or route handler
}
export default validateUser; // Export the validation middleware for use in routes