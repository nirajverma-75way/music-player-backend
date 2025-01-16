
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as ReplieController from "./replie.controller";
import * as ReplieValidator from "./replie.validation";

const router = Router();

router
        .get("/", ReplieController.getAllReplie)
        .get("/:id", ReplieController.getReplieById)
        .delete("/:id", ReplieController.deleteReplie)
        .post("/", ReplieValidator.createReplie, catchError, ReplieController.createReplie)
        .put("/:id", ReplieValidator.updateReplie, catchError, ReplieController.updateReplie)
        .patch("/:id", ReplieValidator.editReplie, catchError, ReplieController.editReplie)

export default router;

