
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as FollowController from "./follow.controller";
import * as FollowValidator from "./follow.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", roleAuth(),  FollowController.getAllFollow)
        .get("/:id", roleAuth(),  FollowController.getFollowById)
        .delete("/:id", roleAuth(),  FollowController.deleteFollow)
        .post("/", roleAuth(),  FollowValidator.createFollow, catchError, FollowController.createFollow)
        .put("/:id", roleAuth(),  FollowValidator.updateFollow, catchError, FollowController.updateFollow)
        .patch("/:id", roleAuth(),  FollowValidator.editFollow, catchError, FollowController.editFollow)

export default router;

