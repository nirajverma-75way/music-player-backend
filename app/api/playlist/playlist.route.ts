import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as playlistController from "./playlist.controller";
import * as playlistValidator from "./playlist.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
  .get("/", playlistController.getAllPlaylist)
  .get("/:id", playlistController.getPlaylistById)
  .delete("/:id", roleAuth("ADMIN"), playlistController.deletePlaylist)
  .post(
    "/", roleAuth("ADMIN"),
    playlistValidator.createPlaylist,
    catchError,
    playlistController.createPlaylist,
  )
  .put(
    "/:id", roleAuth("ADMIN"),
    playlistValidator.updatePlaylist,
    catchError,
    playlistController.updatePlaylist,
  )
  .patch(
    "/:id", roleAuth("ADMIN"),
    playlistValidator.editPlaylist,
    catchError,
    playlistController.editPlaylist,
  );

export default router;
