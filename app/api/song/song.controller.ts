import * as songService from "./song.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";

/**
 * Creates a new song with the provided data and audio file.
 * @async
 * @param {Request} req - Express request object containing the song data in the body and the audio file.
 * @param {Response} res - Express response object to send the result of the creation operation.
 * @returns {void} Sends a response with the created song.
 */
export const createSong = asyncHandler(async (req: Request, res: Response) => {
  req.body.audioUrl = req?.file?.path;
  const result = await songService.createSong(req.body);
  res.send(createResponse(result, "Song created successfully"));
});

/**
 * Updates an existing song by its ID and optionally updates the audio file.
 * @async
 * @param {Request} req - Express request object containing the song ID in params, updated data in the body, and optional audio file.
 * @param {Response} res - Express response object to send the result of the update operation.
 * @returns {void} Sends a response with the updated song.
 */
export const updateSong = asyncHandler(async (req: Request, res: Response) => {
  if(req?.file?.path){
    req.body.audioUrl = req?.file?.path;
  }
  
  const result = await songService.updateSong(req.params.id, req.body);
  res.send(createResponse(result, "Song updated successfully"));
});

/**
 * Edits an existing song with partial data by its ID.
 * @async
 * @param {Request} req - Express request object containing the song ID in params and partial data in the body.
 * @param {Response} res - Express response object to send the result of the edit operation.
 * @returns {void} Sends a response with the edited song.
 */
export const editSong = asyncHandler(async (req: Request, res: Response) => {
  const result = await songService.editSong(req.params.id, req.body);
  res.send(createResponse(result, "Song updated successfully"));
});

/**
 * Deletes a song by its ID.
 * @async
 * @param {Request} req - Express request object containing the song ID in params.
 * @param {Response} res - Express response object to send the result of the delete operation.
 * @returns {void} Sends a response confirming the deletion of the song.
 */
export const deleteSong = asyncHandler(async (req: Request, res: Response) => {
  const result = await songService.deleteSong(req.params.id);
  res.send(createResponse(result, "Song deleted successfully"));
});

/**
 * Retrieves a song by its ID.
 * @async
 * @param {Request} req - Express request object containing the song ID in params.
 * @param {Response} res - Express response object to send the song data.
 * @returns {void} Sends the song data if found.
 */
export const getSongById = asyncHandler(async (req: Request, res: Response) => {
  const result = await songService.getSongById(req.params.id);
  res.send(createResponse(result));
});

/**
 * Retrieves all songs.
 * @async
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object to send the list of all songs.
 * @returns {void} Sends the list of all songs.
 */
export const getAllSong = asyncHandler(async (req: Request, res: Response) => {
  const result = await songService.getAllSong();
  res.send(createResponse(result));
});
