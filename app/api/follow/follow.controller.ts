import * as PostService from "../post/post.service";
import * as NotificationController from "../notification/notification.controller";
import * as FollowService from "./follow.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { NextFunction, type Request, type Response } from 'express'

export const createFollow = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const result = await FollowService.createFollow(req.body);
    const notificationRequest = {
        userId: req.body.followingId,
        refId: result?._id,
        type: "FOLLOW",       
        message: `A new user followed you`,  
    };
    const notificationDetail = await NotificationController.createNotification({ body: notificationRequest } as Request, res,next);  // Call with the appropriate request and response
        
    res.send(createResponse(result, "Follow created sucssefully"))
});

export const updateFollow = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.updateFollow(req.params.id, req.body);
    res.send(createResponse(result, "Follow updated sucssefully"))
});

export const editFollow = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.editFollow(req.params.id, req.body);
    res.send(createResponse(result, "Follow updated sucssefully"))
});

export const deleteFollow = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.deleteFollow(req.params.id);
    res.send(createResponse(result, "Follow deleted sucssefully"))
});


export const getFollowById = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.getFollowById(req.params.id);
    res.send(createResponse(result))
});


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
