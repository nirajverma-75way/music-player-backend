import { type ILike } from "./like.dto";
import LikeSchema from "./like.schema";

/**
 * Creates a new like record in the database.
 * @param {ILike} data - The data for the like record to be created.
 * @returns {Promise<ILike>} The created like document.
 */
export const createLike = async (data: ILike) => {
    const result = await LikeSchema.create({ ...data, active: true });
    return result;
};

/**
 * Updates an existing like record in the database by its ID.
 * @param {string} id - The ID of the like record to update.
 * @param {ILike} data - The updated data for the like record.
 * @returns {Promise<ILike | null>} The updated like document, or null if not found.
 */
export const updateLike = async (id: string, data: ILike) => {
    const result = await LikeSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

/**
 * Partially updates an existing like record in the database by its ID.
 * @param {string} id - The ID of the like record to update.
 * @param {Partial<ILike>} data - The partial data to update the like record with.
 * @returns {Promise<ILike | null>} The updated like document, or null if not found.
 */
export const editLike = async (id: string, data: Partial<ILike>) => {
    const result = await LikeSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

/**
 * Deletes a like record from the database by its ID.
 * @param {string} id - The ID of the like record to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the deletion operation.
 */
export const deleteLike = async (id: string) => {
    const result = await LikeSchema.deleteOne({ _id: id });
    return result;
};

/**
 * Retrieves a like record from the database by its ID.
 * @param {string} id - The ID of the like record to retrieve.
 * @returns {Promise<{ data: ILike | null }>} The like document, or null if not found.
 */
export const getLikeById = async (id: string) => {
    const result = await LikeSchema.findById(id).lean();
    return {data: result};
};

/**
 * Retrieves all like records for a specific post.
 * @param {string} id - The ID of the post for which likes are being retrieved.
 * @returns {Promise<{ total: number, data: ILike[] }>} The list of like records for the post and their total count.
 */
export const getAllLikeInPost = async (id: string) => {
    const result = await LikeSchema.find({ postId: id }).lean();
    return { total: result.length, data: result };
};

/**
 * Retrieves all like records from the database based on the provided filter criteria.
 * @param {object} queryObject - The filter criteria for fetching like records.
 * @returns {Promise<{ total: number, data: ILike[] }>} The list of like records and their total count.
 */
export const getAllLike = async (queryObject: {}) => {
    const result = await LikeSchema.find(queryObject).lean();
    return { total: result.length, data: result };
};
