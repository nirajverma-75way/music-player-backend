
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as playlistsongController from "./playlistSong.controller";
import * as playlistsongValidator from "./playlistSong.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", playlistsongController.getAllPlaylistSong)
        .get("/:id", playlistsongController.getPlaylistSongById)
        .delete("/:id",roleAuth("ADMIN"), playlistsongController.deletePlaylistSong)
        .post("/",roleAuth("ADMIN"), playlistsongValidator.createPlaylistSong, catchError, playlistsongController.createPlaylistSong)
        .put("/:id",roleAuth("ADMIN"), playlistsongValidator.updatePlaylistSong, catchError, playlistsongController.updatePlaylistSong)
        .patch("/:id",roleAuth("ADMIN"), playlistsongValidator.editPlaylistSong, catchError, playlistsongController.editPlaylistSong)

export default router;

