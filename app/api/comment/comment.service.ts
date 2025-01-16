
import { type IComment } from "./comment.dto";
import CommentSchema from "./comment.schema";

export const createComment = async (data: IComment) => {
    const result = await CommentSchema.create({ ...data, active: true });
    return result;
};

export const updateComment = async (id: string, data: IComment) => {
    const result = await CommentSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editComment = async (id: string, data: Partial<IComment>) => {
    const result = await CommentSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deleteComment = async (id: string) => {
    const result = await CommentSchema.deleteOne({ _id: id });
    return result;
};

export const getCommentById = async (id: string) => {
    const result = await CommentSchema.findById(id).lean();
    return result;
};

export const getAllComment = async () => {
    const result = await CommentSchema.find({}).lean();
    return result;
};
export const getCommentByEmail = async (email: string) => {
    const result = await CommentSchema.findOne({ email }).lean();
    return result;
}

