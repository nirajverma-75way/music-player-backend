import * as playlistService from "./playlist.service";
import * as playlistSongService from "../playlistSong/playlistSong.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";

/**
 * Creates a new playlist and associates songs with it.
 * @async
 * @param {Request} req - Express request object containing the playlist data in the body.
 * @param {Response} res - Express response object to send the result of the operation.
 * @returns {void} Sends a response with the created playlist and associated songs.
 */
export const createPlaylist = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await playlistService.createPlaylist(req.body);
    if (result) {
      // Handle async operations in parallel for associating songs
      const playlistSongs = await Promise.all(req.body.songs.map((songId: string) =>
        {
          if (!songId || !result._id) {
            console.log("error");
            throw new Error("Missing songId or playListId.");
          }
          return playlistSongService.createPlaylistSong({
            playListId: result._id,
            songId: songId,
          });
        })
      );
    }
    res.send(createResponse(result, "Playlist created successfully"));
  }
);

/**
 * Updates an existing playlist and its associated songs.
 * @async
 * @param {Request} req - Express request object containing the playlist ID in params and updated data in the body.
 * @param {Response} res - Express response object to send the result of the update operation.
 * @returns {void} Sends a response with the updated playlist and its associated songs.
 */
export const updatePlaylist = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await playlistService.updatePlaylist(
      req.params.id,
      req.body
    );
    if (result) {
      // Handle async operations in parallel for updating songs
      await playlistSongService.deletePlaylistSongByPlaylist(req.params.id);
      const playlistSongs = await Promise.all(req.body.songs.map((songId: string) =>
        {
          if (!songId || !req.params.id) {
            console.log("error");
            throw new Error("Missing songId or playListId.");
          }
          return playlistSongService.createPlaylistSong({
            playListId: req.params.id,
            songId: songId,
          });
        })
      );
    }
    res.send(createResponse(result, "Playlist updated successfully"));
  }
);

/**
 * Edits an existing playlist.
 * @async
 * @param {Request} req - Express request object containing the playlist ID in params and updated data in the body.
 * @param {Response} res - Express response object to send the result of the edit operation.
 * @returns {void} Sends a response with the edited playlist.
 */
export const editPlaylist = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await playlistService.editPlaylist(req.params.id, req.body);
    res.send(createResponse(result, "Playlist updated successfully"));
  }
);

/**
 * Deletes a playlist and its associated songs.
 * @async
 * @param {Request} req - Express request object containing the playlist ID in params.
 * @param {Response} res - Express response object to send the result of the delete operation.
 * @returns {void} Sends a response confirming the deletion of the playlist.
 */
export const deletePlaylist = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await playlistService.deletePlaylist(req.params.id);
    if (result) await playlistSongService.deletePlaylistSongByPlaylist(req.params.id);
    res.send(createResponse(result, "Playlist deleted successfully"));
  }
);

/**
 * Retrieves a playlist by its ID.
 * @async
 * @param {Request} req - Express request object containing the playlist ID in params.
 * @param {Response} res - Express response object to send the playlist data.
 * @returns {void} Sends the playlist data if found.
 */
export const getPlaylistById = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await playlistService.getPlaylistById(req.params.id);
    res.send(createResponse(result));
  }
);

/**
 * Retrieves all playlists.
 * @async
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object to send the list of playlists.
 * @returns {void} Sends the list of all playlists.
 */
export const getAllPlaylist = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await playlistService.getAllPlaylist();
    res.send(createResponse(result));
  }
);
