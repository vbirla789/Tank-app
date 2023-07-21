import express from "express";
import {
  Logout,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getSingleUser,
  loginUser,
  registerUser,
  updateProfile,
  updateRole,
  userDetails,
} from "../controllers/userController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgetPassword);

router.route("/logout").post(Logout);

router.route("/me").get(isAuthenticatedUser, userDetails);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

router
  .route("/admin/users/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateRole)
  .post(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

export default router;
