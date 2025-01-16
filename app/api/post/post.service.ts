
import { type IPost } from "./post.dto";
import PostSchema from "./post.schema";

export const createPost = async (data: IPost) => {
    const result = await PostSchema.create({ ...data, active: true });
    return result;
};

export const updatePost = async (id: string, data: IPost) => {
    const result = await PostSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editPost = async (id: string, data: Partial<IPost>) => {
    const result = await PostSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deletePost = async (id: string) => {
    const result = await PostSchema.deleteOne({ _id: id });
    return result;
};

export const getPostById = async (id: string) => {
    const result = await PostSchema.findById(id).lean();
    return {data: result};
};

export const getAllPost = async () => {
    const result = await PostSchema.find({}).lean();
    return {total: result.length, data: result};
};

