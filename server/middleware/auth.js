import ErrorHandler from "../utils/errorHandler.js";
import { asyncError } from "./catchAsyncError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userModels.js";

export const isAuthenticatedUser = asyncError(async (req, res, next) => {
  // const { token } = req.cookies;
  const token = req.headers.authorization;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const decodeData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodeData.id);

  next();
});

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }

    next();
  };
};
