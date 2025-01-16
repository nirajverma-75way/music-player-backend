import * as PostService from "../post/post.service";
import * as NotificationController from "../notification/notification.controller";
import * as CommentService from "./comment.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { NextFunction, type Request, type Response } from 'express'

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
    
    res.send(createResponse(result, "Comment created sucssefully"))
});

export const updateComment = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.updateComment(req.params.id, req.body);
    res.send(createResponse(result, "Comment updated sucssefully"))
});

export const editComment = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.editComment(req.params.id, req.body);
    res.send(createResponse(result, "Comment updated sucssefully"))
});

export const deleteComment = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.deleteComment(req.params.id);
    res.send(createResponse(result, "Comment deleted sucssefully"))
});


export const getCommentById = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.getCommentById(req.params.id);
    res.send(createResponse(result))
});


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
