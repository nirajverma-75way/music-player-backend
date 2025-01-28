import { type IPlaylistSong } from "./playlistSong.dto";
import PlaylistSongSchema from "./playlistSong.schema";

/**
 * Creates a new playlist song.
 * @async
 * @param {Partial<IPlaylistSong>} data - The data for the new playlist song.
 * @returns {Promise<IPlaylistSong>} The created playlist song.
 */
export const createPlaylistSong = async (data: Partial<IPlaylistSong>) => {
  console.log(data);
  const result = await PlaylistSongSchema.create({ ...data, active: true });
  return result;
};

/**
 * Updates an existing playlist song by its ID.
 * @async
 * @param {string} id - The ID of the playlist song to update.
 * @param {IPlaylistSong} data - The updated playlist song data.
 * @returns {Promise<IPlaylistSong>} The updated playlist song.
 */
export const updatePlaylistSong = async (id: string, data: IPlaylistSong) => {
  const result = await PlaylistSongSchema.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

/**
 * Edits an existing playlist song with partial data by its ID.
 * @async
 * @param {string} id - The ID of the playlist song to edit.
 * @param {Partial<IPlaylistSong>} data - The partial data to update for the playlist song.
 * @returns {Promise<IPlaylistSong>} The edited playlist song.
 */
export const editPlaylistSong = async (
  id: string,
  data: Partial<IPlaylistSong>,
) => {
  const result = await PlaylistSongSchema.findOneAndUpdate({ _id: id }, data);
  return result;
};

/**
 * Deletes a playlist song by its ID.
 * @async
 * @param {string} id - The ID of the playlist song to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the delete operation.
 */
export const deletePlaylistSong = async (id: string) => {
  const result = await PlaylistSongSchema.deleteOne({ _id: id });
  return result;
};

/**
 * Deletes all playlist songs associated with a given playlist ID.
 * @async
 * @param {string} id - The ID of the playlist for which the songs should be deleted.
 * @returns {Promise<{ deletedCount: number }>} The result of the delete operation.
 */
export const deletePlaylistSongByPlaylist = async (id: string) => {
  const result = await PlaylistSongSchema.deleteOne({ playListId: id });
  return result;
};

/**
 * Retrieves a playlist song by its ID.
 * @async
 * @param {string} id - The ID of the playlist song to retrieve.
 * @returns {Promise<IPlaylistSong | null>} The playlist song with the given ID, or null if not found.
 */
export const getPlaylistSongById = async (id: string) => {
  const result = await PlaylistSongSchema.findById(id).lean();
  return result;
};

/**
 * Retrieves all playlist songs.
 * @async
 * @returns {Promise<IPlaylistSong[]>} A list of all playlist songs.
 */
export const getAllPlaylistSong = async () => {
  const result = await PlaylistSongSchema.find({}).lean();
  return result;
};
