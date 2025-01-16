import * as PostService from "../post/post.service";
import * as NotificationController from "../notification/notification.controller";
import * as CommentService from "./comment.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { NextFunction, type Request, type Response } from 'express'

/**
 * Creates a new comment and sends a notification to the post owner.
 * @param {Request} req - The request object containing the comment data.
 * @param {Response} res - The response object for sending the result.
 * @param {NextFunction} next - The next middleware function in the request-response cycle.
 * @returns {Promise<void>} Sends the created comment and a success message.
 */
export const createComment = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const result = await CommentService.createComment(req.body);
    const postDetail = await PostService.getPostById(req.body.postId);
    const notificationRequest = {
        userId: postDetail?.data?.userId,
        refId: result?._id,
        type: "COMMENT",       
        message: `A new comment was created: ${req.body.content}`,  
    };
    const notificationDetail = await NotificationController.createNotification({ body: notificationRequest } as Request, res,next);  // Call with the appropriate request and response
    
    res.send(createResponse(result, "Comment created successfully"))
});

/**
 * Updates a comment by its ID.
 * @param {Request} req - The request object containing the comment data to update.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the updated comment and a success message.
 */
export const updateComment = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.updateComment(req.params.id, req.body);
    res.send(createResponse(result, "Comment updated successfully"))
});

/**
 * Partially updates a comment by its ID.
 * @param {Request} req - The request object containing the partial comment data to update.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the updated comment and a success message.
 */
export const editComment = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.editComment(req.params.id, req.body);
    res.send(createResponse(result, "Comment updated successfully"))
});

/**
 * Deletes a comment by its ID.
 * @param {Request} req - The request object containing the comment ID to delete.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the deletion result and a success message.
 */
export const deleteComment = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.deleteComment(req.params.id);
    res.send(createResponse(result, "Comment deleted successfully"))
});

/**
 * Retrieves a comment by its ID.
 * @param {Request} req - The request object containing the comment ID to retrieve.
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the retrieved comment.
 */
export const getCommentById = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.getCommentById(req.params.id);
    res.send(createResponse(result))
});

/**
 * Retrieves all comments based on optional filters.
 * @param {Request} req - The request object containing optional query filters (userId, postId).
 * @param {Response} res - The response object for sending the result.
 * @returns {Promise<void>} Sends the list of comments based on the filters.
 */
export const getAllComment = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query;
    const queryObject: Record<string, any> = {};
    if (query?.userId) {
        queryObject.userId = query.userId;
    }
    if (query?.postId) {
        queryObject.postId = query.postId;
    }
    const result = await CommentService.getAllComment(queryObject);
    res.send(createResponse(result))
});
