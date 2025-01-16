import * as PostService from "../post/post.service";
import * as NotificationController from "../notification/notification.controller";
import * as FollowService from "./follow.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { NextFunction, type Request, type Response } from 'express'

/**
 * Creates a new follow record and sends a notification to the followed user.
 * @param {Request} req - The request object containing the follow data.
 * @param {Response} res - The response object for sending the result.
 * @param {NextFunction} next - The next middleware function in the request-response cycle.
 * @returns {Promise<void>} Sends the created follow and a success message.
 */
export const createFollow = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const result = await FollowService.createFollow(req.body);
    const notificationRequest = {
        userId: req.body.followingId,
        refId: result?._id,
        type: "FOLLOW",       
        message: `A new user followed you`,  
    };
    const notificationDetail = await NotificationController.createNotification({ body: notificationRequest } as Request, res, next);  // Call with the appropriate request and response
        
    res.send(createResponse(result, "Follow created successfully"))
});

/**
 * Updates a follow record by its ID.
 * @param {Request} req - The request object containing the follow data to update.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the updated follow record and a success message.
 */
export const updateFollow = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.updateFollow(req.params.id, req.body);
    res.send(createResponse(result, "Follow updated successfully"))
});

/**
 * Partially updates a follow record by its ID.
 * @param {Request} req - The request object containing the partial follow data to update.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the updated follow record and a success message.
 */
export const editFollow = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.editFollow(req.params.id, req.body);
    res.send(createResponse(result, "Follow updated successfully"))
});

/**
 * Deletes a follow record by its ID.
 * @param {Request} req - The request object containing the follow ID to delete.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the result of the deletion and a success message.
 */
export const deleteFollow = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.deleteFollow(req.params.id);
    res.send(createResponse(result, "Follow deleted successfully"))
});

/**
 * Retrieves a follow record by its ID.
 * @param {Request} req - The request object containing the follow ID to retrieve.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the retrieved follow record.
 */
export const getFollowById = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.getFollowById(req.params.id);
    res.send(createResponse(result))
});

/**
 * Retrieves all follow records based on optional filters.
 * @param {Request} req - The request object containing optional query filters (followerId, followingId).
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the list of follow records based on the filters.
 */
export const getAllFollow = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query;
    const queryObject: Record<string, any> = {};
    if (query?.followerId) {
        queryObject.followerId = query.followerId;
    }
    if (query?.followingId) {
        queryObject.followingId = query.followingId;
    }
    const result = await FollowService.getAllFollow(queryObject);
    res.send(createResponse(result))
});
