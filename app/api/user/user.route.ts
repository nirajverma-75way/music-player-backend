import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as userController from "./user.controller";
import * as userValidator from "./user.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
  .get("/", roleAuth("ADMIN"),  userController.getAllUser)
  .get("/ref-token",  catchError, userController.genRefToken)
  .get("/:id",  userController.getUserById)
  .delete("/:id", roleAuth("ADMIN"),  userController.deleteUser)
  .post("/", userValidator.createUser, catchError, userController.createUser)
  .post("/login", userValidator.loginUser, catchError, userController.loginUser)
  .post(
    "/forgot-password",
    userValidator.forgotPassword,
    catchError,
    userController.forgotPassword,
  )
  .post(
    "/reset-password",
    
    userValidator.resetPassword,
    catchError,
    userController.resetPassword,
  )
  .put(
    "/:id", 
    userValidator.updateUser,
    catchError,
    userController.updateUser,
  )
  .patch(
    "/:id", 
    userValidator.editUser,
    catchError,
    userController.editUser,
  );

export default router;
