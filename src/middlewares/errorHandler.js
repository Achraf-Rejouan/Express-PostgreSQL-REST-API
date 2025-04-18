const errorHandling = (err, req, res, next) => {
  console.log(err.stack); // Log the error stack trace to the console for debugging
  res.status(500).json({
    status: 'error',
    code: 500,
    message: 'Internal Server Error',
    error: err.message, // Send the error message in the response
  });
}

export default errorHandling;