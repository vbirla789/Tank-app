import express from "express";
import {
  Logout,
  forgetPassword,
  loginUser,
  registerUser,
  userDetails,
} from "../controllers/userController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgetPassword);

router.route("/logout").post(Logout);

router.route("/me").get(isAuthenticatedUser, userDetails);

export default router;
