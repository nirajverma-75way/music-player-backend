import * as PostService from "../post/post.service";
import * as NotificationController from "../notification/notification.controller";
import * as LikeService from "./like.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { NextFunction, type Request, type Response } from 'express'

/**
 * Creates a new like record and sends a notification to the user whose post was liked.
 * @param {Request} req - The request object containing the like data.
 * @param {Response} res - The response object for sending the result.
 * @param {NextFunction} next - The next middleware function in the request-response cycle.
 * @returns {Promise<void>} Sends the created like and a success message.
 */
export const createLike = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const result = await LikeService.createLike(req.body);
    const postDetail = await PostService.getPostById(req.body.postId);
    const notificationRequest = {
        userId: postDetail?.data?.userId,
        refId: result?._id,
        type: "LIKE",       
        message: `A new like was created`,  
    };
    const notificationDetail = await NotificationController.createNotification({ body: notificationRequest } as Request, res, next);  // Call with the appropriate request and response
    
    res.send(createResponse(result, "Like created successfully"))
});

/**
 * Updates an existing like record by its ID.
 * @param {Request} req - The request object containing the like data to update.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the updated like record and a success message.
 */
export const updateLike = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.updateLike(req.params.id, req.body);
    res.send(createResponse(result, "Like updated successfully"))
});

/**
 * Partially updates an existing like record by its ID.
 * @param {Request} req - The request object containing the partial like data to update.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the updated like record and a success message.
 */
export const editLike = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.editLike(req.params.id, req.body);
    res.send(createResponse(result, "Like updated successfully"))
});

/**
 * Deletes a like record by its ID.
 * @param {Request} req - The request object containing the like ID to delete.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the result of the deletion and a success message.
 */
export const deleteLike = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.deleteLike(req.params.id);
    res.send(createResponse(result, "Like deleted successfully"))
});

/**
 * Retrieves a like record by its ID.
 * @param {Request} req - The request object containing the like ID to retrieve.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the retrieved like record.
 */
export const getLikeById = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.getLikeById(req.params.id);
    res.send(createResponse(result))
});

/**
 * Retrieves all like records based on optional filters (userId and postId).
 * @param {Request} req - The request object containing optional query filters (userId, postId).
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the list of like records based on the filters.
 */
export const getAllLike = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query;
    const queryObject: Record<string, any> = {};
    if (query?.userId) {
        queryObject.userId = query.userId;
    }
    if (query?.postId) {
        queryObject.postId = query.postId;
    }
    const result = await LikeService.getAllLike(queryObject);
    res.send(createResponse(result))
});
