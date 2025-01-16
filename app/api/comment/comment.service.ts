import { type IComment } from "./comment.dto";
import CommentSchema from "./comment.schema";

/**
 * Creates a new comment in the database.
 * @param {IComment} data - The data for the comment to be created.
 * @returns {Promise<IComment>} The created comment document.
 */
export const createComment = async (data: IComment) => {
    const result = await CommentSchema.create({ ...data, active: true });
    return result;
};

/**
 * Updates an existing comment in the database by its ID.
 * @param {string} id - The ID of the comment to update.
 * @param {IComment} data - The updated data for the comment.
 * @returns {Promise<IComment | null>} The updated comment document, or null if not found.
 */
export const updateComment = async (id: string, data: IComment) => {
    const result = await CommentSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

/**
 * Partially updates an existing comment in the database by its ID.
 * @param {string} id - The ID of the comment to update.
 * @param {Partial<IComment>} data - The partial data to update the comment with.
 * @returns {Promise<IComment | null>} The updated comment document, or null if not found.
 */
export const editComment = async (id: string, data: Partial<IComment>) => {
    const result = await CommentSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

/**
 * Deletes a comment from the database by its ID.
 * @param {string} id - The ID of the comment to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the deletion operation.
 */
export const deleteComment = async (id: string) => {
    const result = await CommentSchema.deleteOne({ _id: id });
    return result;
};

/**
 * Retrieves a comment from the database by its ID.
 * @param {string} id - The ID of the comment to retrieve.
 * @returns {Promise<{ data: IComment | null }>} The comment document, or null if not found.
 */
export const getCommentById = async (id: string) => {
    const result = await CommentSchema.findById(id).lean();
    return {data: result};
};

/**
 * Retrieves all comments from the database with an optional filter.
 * @param {object} filter - The filter criteria for fetching comments.
 * @returns {Promise<{ total: number, data: IComment[] }>} The list of comments and their total count.
 */
export const getAllComment = async (filter: {}) => {
    const result = await CommentSchema.find(filter).lean();
    return {total: result.length, data: result};
};

/**
 * Retrieves all comments for a specific post by the post ID.
 * @param {string} id - The ID of the post.
 * @returns {Promise<{ total: number, data: IComment[] }>} The list of comments for the post and their total count.
 */
export const getAllCommentInPost = async (id: string) => {
    const result = await CommentSchema.find({postId: id}).lean();
    return {total: result.length, data: result};
};
