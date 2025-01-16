
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as userController from "./user.controller";
import * as userValidator from "./user.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", userController.getAllUser)
        .get("/:id", userController.getUserById)
        .delete("/:id", roleAuth(), userController.deleteUser)
        .post("/", userValidator.createUser, catchError, userController.createUser)
        .post("/login", userValidator.loginUser, catchError, userController.loginUser)
        .put("/:id", userValidator.updateUser, roleAuth(),  catchError, userController.updateUser)
        .patch("/:id", userValidator.editUser, roleAuth(),  catchError, userController.editUser)

export default router;

