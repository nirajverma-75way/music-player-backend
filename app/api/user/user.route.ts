
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as userController from "./user.controller";
import * as userValidator from "./user.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", roleAuth(), userController.getAllUser)
        .get("/ref-token", roleAuth(), catchError, userController.genRefToken)
        .get("/:id", roleAuth(), userController.getUserById)
        .delete("/:id", roleAuth(), userController.deleteUser)
        .post("/", userValidator.createUser, catchError, userController.createUser)
        .post("/login", userValidator.loginUser, catchError, userController.loginUser)
        .put("/:id", roleAuth(), userValidator.updateUser,  catchError, userController.updateUser)
        .patch("/:id", roleAuth(), userValidator.editUser,  catchError, userController.editUser)

export default router;

