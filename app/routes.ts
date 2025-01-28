import express from "express";
import userRoutes from "./api/user/user.route";
import songRoutes from "./api/song/song.route";
import playlistRoutes from "./api/playlist/playlist.route";
import playlistSongRoutes from "./api/playlistSong/playlistSong.route";
import likeSongRoutes from "./api/likeSong/likeSong.route";

import swaggerUi from "swagger-ui-express";
// import swaggerJsonFile from "../docs/swagger.json"
const swaggerDocument = require("./swagger/swagger.json");

// routes
const router = express.Router();

router.use("/users", userRoutes);
router.use("/songs", songRoutes);
router.use("/playlist", playlistRoutes);
router.use("/playlist-song", playlistSongRoutes);
router.use("/like-song", likeSongRoutes);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
