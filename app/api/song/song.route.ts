import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as songController from "./song.controller";
import * as songValidator from "./song.validation";
import { upload } from "../../common/middleware/multer.middleware";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
  .get("/", songController.getAllSong)
  .get("/:id", songController.getSongById)
  .delete("/:id",roleAuth("ADMIN"), songController.deleteSong)
  .post("/",roleAuth("ADMIN"), upload.single("audioUrl"), songValidator.createSong, catchError, songController.createSong)
  .put("/:id",roleAuth("ADMIN"), upload.single("audioUrl"), songValidator.updateSong, catchError, songController.updateSong)
  .patch("/:id",roleAuth("ADMIN"), songValidator.editSong, catchError, songController.editSong);

export default router;
