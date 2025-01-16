
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as NotificationController from "./notification.controller";
import * as NotificationValidator from "./notification.validation";

const router = Router();

router
        .get("/", NotificationController.getAllNotification)
        .get("/:id", NotificationController.getNotificationById)
        .delete("/:id", NotificationController.deleteNotification)
        .post("/", NotificationValidator.createNotification, catchError, NotificationController.createNotification)
        .put("/:id", NotificationValidator.updateNotification, catchError, NotificationController.updateNotification)
        .patch("/:id", NotificationValidator.editNotification, catchError, NotificationController.editNotification)

export default router;

