import express from "express";
import userRoutes from "./api/user/user.route";
import postRoutes from "./api/post/post.route";
import likeRoutes from "./api/like/like.route";
import commentRoutes from "./api/comment/comment.route";
import replieRoutes from "./api/replie/replie.route";
import followRoutes from "./api/follow/follow.route";
import notificationRoutes from "./api/notification/notification.route";

import swaggerUi from "swagger-ui-express";
// import swaggerJsonFile from "../docs/swagger.json"
const swaggerDocument = require("./swagger/swagger.json");


// routes
const router = express.Router();

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/like", likeRoutes);
router.use("/comments", commentRoutes);
router.use("/replies", replieRoutes);
router.use("/follow", followRoutes);
router.use("/notifications", notificationRoutes);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;