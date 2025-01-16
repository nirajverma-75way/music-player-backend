
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as CommentController from "./comment.controller";
import * as CommentValidator from "./comment.validation";

const router = Router();

router
        .get("/", CommentController.getAllComment)
        .get("/:id", CommentController.getCommentById)
        .delete("/:id", CommentController.deleteComment)
        .post("/", CommentValidator.createComment, catchError, CommentController.createComment)
        .put("/:id", CommentValidator.updateComment, catchError, CommentController.updateComment)
        .patch("/:id", CommentValidator.editComment, catchError, CommentController.editComment)

export default router;

