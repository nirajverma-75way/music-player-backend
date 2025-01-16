import { type IPost } from "./post.dto";
import PostSchema from "./post.schema";

/**
 * Creates a new post.
 * @param {IPost} data - The data for the post to be created.
 * @returns {Promise<IPost>} Resolves with the created post.
 */
export const createPost = async (data: IPost) => {
    const result = await PostSchema.create({ ...data, active: true });
    return result;
};

/**
 * Updates an existing post by its ID.
 * @param {string} id - The ID of the post to update.
 * @param {IPost} data - The data to update the post with.
 * @returns {Promise<IPost>} Resolves with the updated post.
 */
export const updatePost = async (id: string, data: IPost) => {
    const result = await PostSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

/**
 * Partially updates an existing post by its ID.
 * @param {string} id - The ID of the post to update.
 * @param {Partial<IPost>} data - The partial data to update the post with.
 * @returns {Promise<IPost>} Resolves with the updated post.
 */
export const editPost = async (id: string, data: Partial<IPost>) => {
    const result = await PostSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

/**
 * Deletes a post by its ID.
 * @param {string} id - The ID of the post to delete.
 * @returns {Promise<any>} Resolves with the result of the deletion operation.
 */
export const deletePost = async (id: string) => {
    const result = await PostSchema.deleteOne({ _id: id });
    return result;
};

/**
 * Retrieves a post by its ID.
 * @param {string} id - The ID of the post to retrieve.
 * @returns {Promise<{ data: IPost }>} Resolves with the post data if found.
 */
export const getPostById = async (id: string) => {
    const result = await PostSchema.findById(id).lean();
    return { data: result };
};

/**
 * Retrieves all posts.
 * @returns {Promise<{ total: number, data: IPost[] }>} Resolves with the total number of posts and the list of posts.
 */
export const getAllPost = async () => {
    const result = await PostSchema.find({}).lean();
    return { total: result.length, data: result };
};
