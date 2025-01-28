import { type IPlaylist } from "./playlist.dto";
import PlaylistSchema from "./playlist.schema";

/**
 * Creates a new playlist.
 * @async
 * @param {IPlaylist} data - The data for the new playlist.
 * @returns {Promise<IPlaylist>} The created playlist.
 */
export const createPlaylist = async (data: IPlaylist) => {
  const result = await PlaylistSchema.create({ ...data, active: true });
  return result;
};

/**
 * Updates an existing playlist by its ID.
 * @async
 * @param {string} id - The ID of the playlist to update.
 * @param {IPlaylist} data - The updated playlist data.
 * @returns {Promise<IPlaylist>} The updated playlist.
 */
export const updatePlaylist = async (id: string, data: IPlaylist) => {
  const result = await PlaylistSchema.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

/**
 * Edits an existing playlist with partial data by its ID.
 * @async
 * @param {string} id - The ID of the playlist to edit.
 * @param {Partial<IPlaylist>} data - The partial data to update for the playlist.
 * @returns {Promise<IPlaylist>} The edited playlist.
 */
export const editPlaylist = async (id: string, data: Partial<IPlaylist>) => {
  const result = await PlaylistSchema.findOneAndUpdate({ _id: id }, data);
  return result;
};

/**
 * Deletes a playlist by its ID.
 * @async
 * @param {string} id - The ID of the playlist to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the delete operation.
 */
export const deletePlaylist = async (id: string) => {
  const result = await PlaylistSchema.deleteOne({ _id: id });
  return result;
};

/**
 * Retrieves a playlist by its ID.
 * @async
 * @param {string} id - The ID of the playlist to retrieve.
 * @returns {Promise<IPlaylist | null>} The playlist with the given ID, or null if not found.
 */
export const getPlaylistById = async (id: string) => {
  const result = await PlaylistSchema.findById(id).lean();
  return result;
};

/**
 * Retrieves all playlists.
 * @async
 * @returns {Promise<IPlaylist[]>} A list of all playlists.
 */
export const getAllPlaylist = async () => {
  const result = await PlaylistSchema.find({}).lean();
  return result;
};
