import * as playlistsongService from "./playlistSong.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

/**
 * Creates a new playlist song.
 * @async
 * @param {Request} req - Express request object containing the playlist song data in the body.
 * @param {Response} res - Express response object to send the result of the operation.
 * @returns {void} Sends a response with the created playlist song.
 */
export const createPlaylistSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await playlistsongService.createPlaylistSong(req.body);
    res.send(createResponse(result, "PlaylistSong created successfully"));
});

/**
 * Updates an existing playlist song.
 * @async
 * @param {Request} req - Express request object containing the playlist song ID in params and updated data in the body.
 * @param {Response} res - Express response object to send the result of the update operation.
 * @returns {void} Sends a response with the updated playlist song.
 */
export const updatePlaylistSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await playlistsongService.updatePlaylistSong(req.params.id, req.body);
    res.send(createResponse(result, "PlaylistSong updated successfully"));
});

/**
 * Edits an existing playlist song with partial data.
 * @async
 * @param {Request} req - Express request object containing the playlist song ID in params and partial data in the body.
 * @param {Response} res - Express response object to send the result of the edit operation.
 * @returns {void} Sends a response with the edited playlist song.
 */
export const editPlaylistSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await playlistsongService.editPlaylistSong(req.params.id, req.body);
    res.send(createResponse(result, "PlaylistSong updated successfully"));
});

/**
 * Deletes a playlist song by its ID.
 * @async
 * @param {Request} req - Express request object containing the playlist song ID in params.
 * @param {Response} res - Express response object to send the result of the delete operation.
 * @returns {void} Sends a response confirming the deletion of the playlist song.
 */
export const deletePlaylistSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await playlistsongService.deletePlaylistSong(req.params.id);
    res.send(createResponse(result, "PlaylistSong deleted successfully"));
});

/**
 * Retrieves a playlist song by its ID.
 * @async
 * @param {Request} req - Express request object containing the playlist song ID in params.
 * @param {Response} res - Express response object to send the playlist song data.
 * @returns {void} Sends the playlist song data if found.
 */
export const getPlaylistSongById = asyncHandler(async (req: Request, res: Response) => {
    const result = await playlistsongService.getPlaylistSongById(req.params.id);
    res.send(createResponse(result));
});

/**
 * Retrieves all playlist songs.
 * @async
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object to send the list of playlist songs.
 * @returns {void} Sends the list of all playlist songs.
 */
export const getAllPlaylistSong = asyncHandler(async (req: Request, res: Response) => {
    const result = await playlistsongService.getAllPlaylistSong();
    res.send(createResponse(result));
});
