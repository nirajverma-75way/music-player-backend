import { type ISong } from "./song.dto";
import SongSchema from "./song.schema";

/**
 * Creates a new song.
 * @async
 * @param {ISong} data - The data for the new song.
 * @returns {Promise<ISong>} The created song.
 */
export const createSong = async (data: ISong) => {
  const result = await SongSchema.create({ ...data, active: true });
  return result;
};

/**
 * Updates an existing song by its ID.
 * @async
 * @param {string} id - The ID of the song to update.
 * @param {ISong} data - The updated song data.
 * @returns {Promise<ISong>} The updated song.
 */
export const updateSong = async (id: string, data: ISong) => {
  const result = await SongSchema.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

/**
 * Edits an existing song with partial data by its ID.
 * @async
 * @param {string} id - The ID of the song to edit.
 * @param {Partial<ISong>} data - The partial data to update for the song.
 * @returns {Promise<ISong>} The edited song.
 */
export const editSong = async (id: string, data: Partial<ISong>) => {
  const result = await SongSchema.findOneAndUpdate({ _id: id }, data);
  return result;
};

/**
 * Deletes a song by its ID.
 * @async
 * @param {string} id - The ID of the song to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the delete operation.
 */
export const deleteSong = async (id: string) => {
  const result = await SongSchema.deleteOne({ _id: id });
  return result;
};

/**
 * Retrieves a song by its ID.
 * @async
 * @param {string} id - The ID of the song to retrieve.
 * @returns {Promise<ISong | null>} The song with the given ID, or null if not found.
 */
export const getSongById = async (id: string) => {
  const result = await SongSchema.findById(id).lean();
  return result;
};

/**
 * Retrieves all songs.
 * @async
 * @returns {Promise<ISong[]>} A list of all songs.
 */
export const getAllSong = async () => {
  const result = await SongSchema.find({}).lean();
  return result;
};
