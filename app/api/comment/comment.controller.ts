
import * as CommentService from "./comment.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

export const createComment = asyncHandler(async (req: Request, res: Response) => {
    const result = await CommentService.createComment(req.body);
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
    const result = await CommentService.getAllComment();
    res.send(createResponse(result))
});
