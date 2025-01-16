import { type IReplie } from "./replie.dto";
import ReplieSchema from "./replie.schema";

/**
 * Creates a new replie.
 * @param {IReplie} data - The data for the new replie.
 * @returns {Promise<IReplie>} The created replie object.
 */
export const createReplie = async (data: IReplie) => {
    const result = await ReplieSchema.create({ ...data, active: true });
    return result;
};

/**
 * Updates an existing replie by its ID.
 * @param {string} id - The ID of the replie to update.
 * @param {IReplie} data - The data to update the replie with.
 * @returns {Promise<IReplie>} The updated replie object.
 */
export const updateReplie = async (id: string, data: IReplie) => {
    const result = await ReplieSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

/**
 * Partially updates an existing replie by its ID.
 * @param {string} id - The ID of the replie to update.
 * @param {Partial<IReplie>} data - The data to update the replie with.
 * @returns {Promise<IReplie>} The updated replie object.
 */
export const editReplie = async (id: string, data: Partial<IReplie>) => {
    const result = await ReplieSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

/**
 * Deletes a replie by its ID.
 * @param {string} id - The ID of the replie to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the delete operation.
 */
export const deleteReplie = async (id: string) => {
    const result = await ReplieSchema.deleteOne({ _id: id });
    return result;
};

/**
 * Retrieves a replie by its ID.
 * @param {string} id - The ID of the replie to retrieve.
 * @returns {Promise<{ data: IReplie | null }>} The retrieved replie object or null if not found.
 */
export const getReplieById = async (id: string) => {
    const result = await ReplieSchema.findById(id).lean();
    return { data: result };
};

/**
 * Retrieves all replie objects based on the provided query filter.
 * @param {object} queryObject - The filter criteria to retrieve the replie objects.
 * @returns {Promise<{ total: number, data: IReplie[] }>} The list of retrieved replie objects and their total count.
 */
export const getAllReplie = async (queryObject: {}) => {
    const result = await ReplieSchema.find(queryObject).lean();
    return { total: result.length, data: result };
};
