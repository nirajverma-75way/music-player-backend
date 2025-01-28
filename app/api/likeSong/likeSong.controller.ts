import * as likesongService from "./likeSong.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express';

/**
 * Creates a new like for a song.
 * @async
 * @function
 * @param {Request} req - Express request object containing the like data in the body.
 * @param {Response} res - Express response object to send the result of the operation.
 * @returns {void} Sends a response with the created like song.
 */
export const createLikeSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await likesongService.createLikeSong(req.body);
    res.send(createResponse(result, "LikeSong created successfully"))
});

/**
 * Updates an existing like for a song.
 * @async
 * @function
 * @param {Request} req - Express request object containing the like song ID in params and the updated data in the body.
 * @param {Response} res - Express response object to send the result of the update.
 * @returns {void} Sends a response with the updated like song.
 */
export const updateLikeSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await likesongService.updateLikeSong(req.params.id, req.body);
    res.send(createResponse(result, "LikeSong updated successfully"))
});

/**
 * Edits an existing like for a song.
 * @async
 * @function
 * @param {Request} req - Express request object containing the like song ID in params and the updated data in the body.
 * @param {Response} res - Express response object to send the result of the edit.
 * @returns {void} Sends a response with the edited like song.
 */
export const editLikeSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await likesongService.editLikeSong(req.params.id, req.body);
    res.send(createResponse(result, "LikeSong updated successfully"))
});

/**
 * Deletes a like for a song.
 * @async
 * @function
 * @param {Request} req - Express request object containing the like song ID in params.
 * @param {Response} res - Express response object to send the result of the delete operation.
 * @returns {void} Sends a response confirming the deletion of the like song.
 */
export const deleteLikeSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await likesongService.deleteLikeSong(req.params.id);
    res.send(createResponse(result, "LikeSong deleted successfully"))
});

/**
 * Retrieves a like for a song by its ID.
 * @async
 * @function
 * @param {Request} req - Express request object containing the like song ID in params.
 * @param {Response} res - Express response object to send the like song data.
 * @returns {void} Sends the like song data if found.
 */
export const getLikeSongById = asyncHandler(async (req: Request, res: Response) => {
    const result = await likesongService.getLikeSongById(req.params.id);
    res.send(createResponse(result))
});

/**
 * Retrieves all like songs.
 * @async
 * @function
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object to send the list of like songs.
 * @returns {void} Sends the list of all like songs.
 */
export const getAllLikeSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await likesongService.getAllLikeSong();
    res.send(createResponse(result))
});
