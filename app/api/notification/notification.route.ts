
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as NotificationController from "./notification.controller";
import * as NotificationValidator from "./notification.validation";
import { roleAuth } from "../../common/middleware/role-auth.middleware";

const router = Router();

router
        .get("/", roleAuth(),  NotificationController.getAllNotification)
        .get("/:id", roleAuth(),  NotificationController.getNotificationById)
        .delete("/:id", roleAuth(),  NotificationController.deleteNotification)
        .post("/", roleAuth(),  NotificationValidator.createNotification, catchError, NotificationController.createNotification)
        .put("/:id", roleAuth(),  NotificationValidator.updateNotification, catchError, NotificationController.updateNotification)
        .patch("/:id", roleAuth(),  NotificationValidator.editNotification, catchError, NotificationController.editNotification)

export default router;

