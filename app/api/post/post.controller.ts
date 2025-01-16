import * as PostService from "./post.service";
import * as likeService from "../like/like.service";
import * as commentService from "../comment/comment.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

/**
 * Creates a new post with media.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} Sends a response with the created post data.
 */
export const createPost = asyncHandler(async (req: Request, res: Response) => {
    req.body.mediaUrl = req?.file?.path;
    const result = await PostService.createPost(req.body);
    res.send(createResponse(result, "Post created sucssefully"))
});

/**
 * Updates an existing post by its ID if the user is the post owner.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} Sends a response with the updated post data or an error message.
 */
export const updatePost = asyncHandler(async (req: Request, res: Response) => {
    const id = req?.user?._id || "";
    if (id === req.body.userId) {
        const result = await PostService.updatePost(req.params.id, req.body);
        res.send(createResponse(result, "Post updated sucssefully"))
    } else {
        res.send(createResponse(null, "User trying to update other's data"))
    }
});

/**
 * Partially updates an existing post by its ID if the user is the post owner.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} Sends a response with the updated post data or an error message.
 */
export const editPost = asyncHandler(async (req: Request, res: Response) => {
    const id = req?.user?._id || "";
    if (id === req.params.id) {
        const result = await PostService.editPost(req.params.id, req.body);
        res.send(createResponse(result, "Post updated sucssefully"))
    } else {
        res.send(createResponse(null, "User trying to update other's data"))
    }
});

/**
 * Deletes a post by its ID if the user is the post owner.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} Sends a response with the deletion result or an error message.
 */
export const deletePost = asyncHandler(async (req: Request, res: Response) => {
    const id = req?.user?._id || "";
    if (id === req.params.id) {
        const result = await PostService.deletePost(req.params.id);
        res.send(createResponse(result, "Post deleted sucssefully"))
    } else {
        res.send(createResponse(null, "User trying to delete other's data"))
    }
});

/**
 * Retrieves a post by its ID with associated likes and comments.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} Sends a response with the post data, likes, and comments, or an error message.
 */
export const getPostById = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.getPostById(req.params.id);
    if (result !== null && result.data !== null) {
        const like = await likeService.getAllLikeInPost(result?.data._id);
        const comment = await commentService.getAllCommentInPost(result?.data._id);
        res.send(createResponse({ ...result.data, like, comment }));
    } else {
        res.status(404).send(createResponse(null, "Post not found"));
    }
});

/**
 * Retrieves all posts with associated likes and comments.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} Sends a response with a list of posts, including total count, likes, and comments.
 */
export const getAllPost = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.getAllPost();
    const detailresult = await Promise.all(
        result?.data.map(async (data) => {
            const like = await likeService.getAllLikeInPost(data._id);
            const comment = await commentService.getAllCommentInPost(data._id);
            return {
                ...data, like, comment
            }
        })
    );
    res.send(createResponse({ total: result?.total, data: detailresult }));
});
