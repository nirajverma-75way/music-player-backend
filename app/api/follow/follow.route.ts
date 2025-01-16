
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as FollowController from "./follow.controller";
import * as FollowValidator from "./follow.validation";

const router = Router();

router
        .get("/", FollowController.getAllFollow)
        .get("/:id", FollowController.getFollowById)
        .delete("/:id", FollowController.deleteFollow)
        .post("/", FollowValidator.createFollow, catchError, FollowController.createFollow)
        .put("/:id", FollowValidator.updateFollow, catchError, FollowController.updateFollow)
        .patch("/:id", FollowValidator.editFollow, catchError, FollowController.editFollow)

export default router;

