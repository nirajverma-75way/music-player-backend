import * as UserService from "../user/user.service";
import * as NotificationService from "./notification.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'
import { sendEmail } from "../../common/services/email.service";

/**
 * Creates a new notification and sends an email notification to the user.
 * @param {Request} req - The request object containing the notification data.
 * @param {Response} res - The response object used to send the response back to the client.
 * @returns {Promise<void>} Resolves with no value if successful, or an error response if failed.
 */
export const createNotification = asyncHandler(async (req: Request, res: Response) => {
    const userDetail = await UserService.getUserById(req.body.userId);
    if (!userDetail) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    const mailStatus = await sendEmail({
        from: process.env.MAIL_EMAIL,
        to: userDetail?.email,
        subject: `${req.body.type} | Social-Media`,
        text: req.body.message,
        html: `<h2>Hi ${userDetail?.name},</h2><h3>New Notification</h3><br/><p>You have got ${req.body.message}</p>`,
    });
    
    console.log(mailStatus)
    if (mailStatus.error) {
        console.error('Email failed:', mailStatus.error);
        res.status(500).json({ message: 'Failed to send email notification' });
        return;
    }

    const result = await NotificationService.createNotification(req.body);
    // Uncomment below line to send a success response after creating the notification
    // res.send(createResponse(result, "Notification created successfully"));
});

/**
 * Updates an existing notification by its ID.
 * @param {Request} req - The request object containing the notification data and ID.
 * @param {Response} res - The response object used to send the response back to the client.
 * @returns {Promise<void>} Resolves with no value if successful.
 */
export const updateNotification = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.updateNotification(req.params.id, req.body);
    res.send(createResponse(result, "Notification updated successfully"));
});

/**
 * Partially updates an existing notification by its ID.
 * @param {Request} req - The request object containing the partial notification data and ID.
 * @param {Response} res - The response object used to send the response back to the client.
 * @returns {Promise<void>} Resolves with no value if successful.
 */
export const editNotification = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.editNotification(req.params.id, req.body);
    res.send(createResponse(result, "Notification updated successfully"));
});

/**
 * Deletes a notification by its ID.
 * @param {Request} req - The request object containing the notification ID.
 * @param {Response} res - The response object used to send the response back to the client.
 * @returns {Promise<void>} Resolves with no value if successful.
 */
export const deleteNotification = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.deleteNotification(req.params.id);
    res.send(createResponse(result, "Notification deleted successfully"));
});

/**
 * Retrieves a notification by its ID.
 * @param {Request} req - The request object containing the notification ID.
 * @param {Response} res - The response object used to send the response back to the client.
 * @returns {Promise<void>} Resolves with the notification data if successful.
 */
export const getNotificationById = asyncHandler(async (req: Request, res: Response) => {
    const result = await NotificationService.getNotificationById(req.params.id);
    res.send(createResponse(result));
});

/**
 * Retrieves all notifications based on query parameters.
 * @param {Request} req - The request object containing query parameters to filter notifications.
 * @param {Response} res - The response object used to send the response back to the client.
 * @returns {Promise<void>} Resolves with a list of notifications if successful.
 */
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
    res.send(createResponse(result));
});
