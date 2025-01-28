
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as likesongController from "./likeSong.controller";
import * as likesongValidator from "./likeSong.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", likesongController.getAllLikeSong)
        .get("/:id", likesongController.getLikeSongById)
        .delete("/:id",roleAuth("ADMIN"), likesongController.deleteLikeSong)
        .post("/",roleAuth("ADMIN"), likesongValidator.createLikeSong, catchError, likesongController.createLikeSong)
        .put("/:id",roleAuth("ADMIN"), likesongValidator.updateLikeSong, catchError, likesongController.updateLikeSong)
        .patch("/:id",roleAuth("ADMIN"), likesongValidator.editLikeSong, catchError, likesongController.editLikeSong)

export default router;

