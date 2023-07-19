import ErrorHandler from "../utils/errorHandler.js";

export const Error = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  err.message = err.message || "Internal server error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
