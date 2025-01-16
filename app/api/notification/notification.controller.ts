
import * as UserService from "../user/user.service";
import * as NotificationService from "./notification.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'
import { sendEmail } from "../../common/services/email.service";

export const createNotification = asyncHandler(async (req: Request, res: Response) => {
    const userDetail = await UserService.getUserById(req.body.userId);
    if (!userDetail) {
        // If user is not found, send an error response
        res.status(404).json({ message: 'User not found' });
      }
      // Step 3: Send email notification
      const mailStatus = await sendEmail({
        from: process.env.MAIL_EMAIL,
        to: userDetail?.email,
        subject: `${req.body.type} | Social-Media`,
        text: req.body.message,
        html: `<h2>Hi ${userDetail?.name},</h2><h3>New Notification</h3><br/><p>You have got ${req.body.message}</p>`,
      });
      console.log(mailStatus)
      if (mailStatus.error) {
        // Log email failure and return an error response
        console.error('Email failed:', mailStatus.error);
        res.status(500).json({ message: 'Failed to send email notification' });
      }   
      const result = await NotificationService.createNotification(req.body);
    return
    //res.send(createResponse(result, "Notification created sucssefully"))
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
    const query = req.query;
    const queryObject: Record<string, any> = {};
    if (query?.userId) {
    queryObject.userId = query.userId;
    }
    if (query?.refId) {
    queryObject.refId = query.refId;
    }
    const result = await NotificationService.getAllNotification(queryObject);
    res.send(createResponse(result))
});
