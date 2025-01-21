
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as ReplieController from "./replie.controller";
import * as ReplieValidator from "./replie.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", roleAuth(), ReplieController.getAllReplie)
        .get("/:id", roleAuth(), ReplieController.getReplieById)
        .delete("/:id", roleAuth(), ReplieController.deleteReplie)
        .post("/", roleAuth(), ReplieValidator.createReplie, catchError, ReplieController.createReplie)
        .put("/:id", roleAuth(), ReplieValidator.updateReplie, catchError, ReplieController.updateReplie)
        .patch("/:id", roleAuth(), ReplieValidator.editReplie, catchError, ReplieController.editReplie)

export default router;

