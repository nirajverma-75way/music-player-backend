import * as PostService from "../post/post.service";
import * as NotificationController from "../notification/notification.controller";
import * as LikeService from "./like.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { NextFunction, type Request, type Response } from 'express'

export const createLike = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const result = await LikeService.createLike(req.body);
    const postDetail = await PostService.getPostById(req.body.postId);
    const notificationRequest = {
        userId: postDetail?.data?.userId,
        refId: result?._id,
        type: "LIKE",       
        message: `A new like was created`,  
    };
    const notificationDetail = await NotificationController.createNotification({ body: notificationRequest } as Request, res,next);  // Call with the appropriate request and response
    
    res.send(createResponse(result, "Like created sucssefully"))
});

export const updateLike = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.updateLike(req.params.id, req.body);
    res.send(createResponse(result, "Like updated sucssefully"))
});

export const editLike = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.editLike(req.params.id, req.body);
    res.send(createResponse(result, "Like updated sucssefully"))
});

export const deleteLike = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.deleteLike(req.params.id);
    res.send(createResponse(result, "Like deleted sucssefully"))
});


export const getLikeById = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.getLikeById(req.params.id);
    res.send(createResponse(result))
});


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
