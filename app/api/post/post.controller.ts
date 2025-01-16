
import * as PostService from "./post.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

export const createPost = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.createPost(req.body);
    res.send(createResponse(result, "Post created sucssefully"))
});

export const updatePost = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.updatePost(req.params.id, req.body);
    res.send(createResponse(result, "Post updated sucssefully"))
});

export const editPost = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.editPost(req.params.id, req.body);
    res.send(createResponse(result, "Post updated sucssefully"))
});

export const deletePost = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.deletePost(req.params.id);
    res.send(createResponse(result, "Post deleted sucssefully"))
});


export const getPostById = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.getPostById(req.params.id);
    res.send(createResponse(result))
});


export const getAllPost = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.getAllPost();
    res.send(createResponse(result))
});
