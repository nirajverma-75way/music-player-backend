
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as LikeController from "./like.controller";
import * as LikeValidator from "./like.validation";

const router = Router();

router
        .get("/", LikeController.getAllLike)
        .get("/:id", LikeController.getLikeById)
        .delete("/:id", LikeController.deleteLike)
        .post("/", LikeValidator.createLike, catchError, LikeController.createLike)
        .put("/:id", LikeValidator.updateLike, catchError, LikeController.updateLike)
        .patch("/:id", LikeValidator.editLike, catchError, LikeController.editLike)

export default router;

