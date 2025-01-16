
import * as NotificationService from "./notification.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

export const createNotification = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.createNotification(req.body);
    res.send(createResponse(result, "Notification created sucssefully"))
});

export const updateNotification = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.updateNotification(req.params.id, req.body);
    res.send(createResponse(result, "Notification updated sucssefully"))
});

export const editNotification = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.editNotification(req.params.id, req.body);
    res.send(createResponse(result, "Notification updated sucssefully"))
});

export const deleteNotification = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.deleteNotification(req.params.id);
    res.send(createResponse(result, "Notification deleted sucssefully"))
});


export const getNotificationById = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.getNotificationById(req.params.id);
    res.send(createResponse(result))
});


export const getAllNotification = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.getAllNotification();
    res.send(createResponse(result))
});
