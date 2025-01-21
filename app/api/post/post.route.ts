
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as PostController from "./post.controller";
import * as PostValidator from "./post.validation";
import { upload } from "../../common/middleware/multer.middleware";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", roleAuth(),  PostController.getAllPost)
        .get("/:id", roleAuth(),  PostController.getPostById)
        .delete("/:id", roleAuth(),  PostController.deletePost)
        .post("/",upload.single("mediaUrl"), PostValidator.createPost, catchError, PostController.createPost)
        .put("/:id", roleAuth(),  PostValidator.updatePost, catchError, PostController.updatePost)
        .patch("/:id", roleAuth(),  PostValidator.editPost, catchError, PostController.editPost)

export default router;

