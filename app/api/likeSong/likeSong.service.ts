import { type ILikeSong } from "./likeSong.dto";
import LikeSongSchema from "./likeSong.schema";

/**
 * Creates a new like for a song.
 * @async
 * @param {ILikeSong} data - The data for the new like song.
 * @returns {Promise<ILikeSong>} The created like song.
 */
export const createLikeSong = async (data: ILikeSong) => {
  const result = await LikeSongSchema.create({ ...data, active: true });
  return result;
};

/**
 * Updates an existing like for a song.
 * @async
 * @param {string} id - The ID of the like song to update.
 * @param {ILikeSong} data - The updated data for the like song.
 * @returns {Promise<ILikeSong>} The updated like song.
 */
export const updateLikeSong = async (id: string, data: ILikeSong) => {
  const result = await LikeSongSchema.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

/**
 * Edits an existing like for a song with partial data.
 * @async
 * @param {string} id - The ID of the like song to edit.
 * @param {Partial<ILikeSong>} data - The partial data to update for the like song.
 * @returns {Promise<ILikeSong>} The edited like song.
 */
export const editLikeSong = async (id: string, data: Partial<ILikeSong>) => {
  const result = await LikeSongSchema.findOneAndUpdate({ _id: id }, data);
  return result;
};

/**
 * Deletes a like for a song by its ID.
 * @async
 * @param {string} id - The ID of the like song to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the delete operation.
 */
export const deleteLikeSong = async (id: string) => {
  const result = await LikeSongSchema.deleteOne({ _id: id });
  return result;
};

/**
 * Retrieves a like for a song by its ID.
 * @async
 * @param {string} id - The ID of the like song to retrieve.
 * @returns {Promise<ILikeSong | null>} The like song with the given ID, or null if not found.
 */
export const getLikeSongById = async (id: string) => {
  const result = await LikeSongSchema.findById(id).lean();
  return result;
};

/**
 * Retrieves all like songs from the database.
 * @async
 * @returns {Promise<ILikeSong[]>} A list of all like songs.
 */
export const getAllLikeSong = async () => {
  const result = await LikeSongSchema.find({}).lean();
  return result;
};
