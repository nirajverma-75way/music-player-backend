
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as CommentController from "./comment.controller";
import * as CommentValidator from "./comment.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", roleAuth(),  CommentController.getAllComment)
        .get("/:id", roleAuth(),  CommentController.getCommentById)
        .delete("/:id", roleAuth(),  CommentController.deleteComment)
        .post("/", roleAuth(),  CommentValidator.createComment, catchError, CommentController.createComment)
        .put("/:id", roleAuth(),  CommentValidator.updateComment, catchError, CommentController.updateComment)
        .patch("/:id", roleAuth(),  CommentValidator.editComment, catchError, CommentController.editComment)

export default router;

