
import * as FollowService from "./follow.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

export const createFollow = asyncHandler(async (req: Request, res: Response) => {
    const result = await FollowService.createFollow(req.body);
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
    const result = await FollowService.getAllFollow();
    res.send(createResponse(result))
});
