
import * as PostService from "./post.service";
import * as likeService from "../like/like.service";
import * as commentService from "../comment/comment.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'
 
export const createPost = asyncHandler(async (req: Request, res: Response) => {
    req.body.mediaUrl = req?.file?.path;
    const result = await PostService.createPost(req.body);
    res.send(createResponse(result, "Post created sucssefully"))
});

export const updatePost = asyncHandler(async (req: Request, res: Response) => {
    const id = req?.user?._id || "";
    if(id === req.body.userId){
        const result = await PostService.updatePost(req.params.id, req.body);
        res.send(createResponse(result, "Post updated sucssefully"))
    }
    else{
        res.send(createResponse(null, "User trying to update other's data"))
    }
    
});

export const editPost = asyncHandler(async (req: Request, res: Response) => {
    const id = req?.user?._id || "";
    if(id === req.params.id){
        const result = await PostService.editPost(req.params.id, req.body);
        res.send(createResponse(result, "Post updated sucssefully"))
    }
    else{
        res.send(createResponse(null, "User trying to update other's data"))
    }
    
});

export const deletePost = asyncHandler(async (req: Request, res: Response) => {
    const id = req?.user?._id || "";
    if(id === req.params.id){
        const result = await PostService.deletePost(req.params.id);
        res.send(createResponse(result, "Post deleted sucssefully"))
    }
    else{
        res.send(createResponse(null, "User trying to delete other's data"))
    }
    
});


export const getPostById = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.getPostById(req.params.id);
    if(result !== null && result.data !== null){
        const like = await likeService.getAllLikeInPost(result?.data._id);
        const comment = await commentService.getAllCommentInPost(result?.data._id);
        res.send(createResponse({ ...result.data, like, comment }));
    }
    else{
        res.status(404).send(createResponse(null, "Post not found"));
    }

    
});


export const getAllPost = asyncHandler(async (req: Request, res: Response) => {
    const result = await PostService.getAllPost();
    const detailresult = await Promise.all(
        result?.data.map(async(data) =>{
            const like = await likeService.getAllLikeInPost(data._id);
            const comment = await commentService.getAllCommentInPost(data._id);
            return {
                ...data, like, comment
            }
        })
    )
    res.send(createResponse({total: result?.total, data: detailresult}))
});
