
import * as LikeService from "./like.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

export const createLike = asyncHandler(async (req: Request, res: Response) => {
    const result = await LikeService.createLike(req.body);
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
