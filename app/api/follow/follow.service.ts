import { type IFollow } from "./follow.dto";
import FollowSchema from "./follow.schema";

/**
 * Creates a new follow record in the database.
 * @param {IFollow} data - The data for the follow record to be created.
 * @returns {Promise<IFollow>} The created follow document.
 */
export const createFollow = async (data: IFollow) => {
    const result = await FollowSchema.create({ ...data, active: true });
    return result;
};

/**
 * Updates an existing follow record in the database by its ID.
 * @param {string} id - The ID of the follow record to update.
 * @param {IFollow} data - The updated data for the follow record.
 * @returns {Promise<IFollow | null>} The updated follow document, or null if not found.
 */
export const updateFollow = async (id: string, data: IFollow) => {
    const result = await FollowSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

/**
 * Partially updates an existing follow record in the database by its ID.
 * @param {string} id - The ID of the follow record to update.
 * @param {Partial<IFollow>} data - The partial data to update the follow record with.
 * @returns {Promise<IFollow | null>} The updated follow document, or null if not found.
 */
export const editFollow = async (id: string, data: Partial<IFollow>) => {
    const result = await FollowSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

/**
 * Deletes a follow record from the database by its ID.
 * @param {string} id - The ID of the follow record to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the deletion operation.
 */
export const deleteFollow = async (id: string) => {
    const result = await FollowSchema.deleteOne({ _id: id });
    return result;
};

/**
 * Retrieves a follow record from the database by its ID.
 * @param {string} id - The ID of the follow record to retrieve.
 * @returns {Promise<{ data: IFollow | null }>} The follow document, or null if not found.
 */
export const getFollowById = async (id: string) => {
    const result = await FollowSchema.findById(id).lean();
    return {data: result};
};

/**
 * Retrieves all follow records from the database with an optional filter.
 * @param {object} filter - The filter criteria for fetching follow records.
 * @returns {Promise<{ total: number, data: IFollow[] }>} The list of follow records and their total count.
 */
export const getAllFollow = async (filter: {}) => {
    const result = await FollowSchema.find(filter).lean();
    return {total: result.length, data: result};
};
