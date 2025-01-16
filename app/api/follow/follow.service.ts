
import { type IFollow } from "./follow.dto";
import FollowSchema from "./follow.schema";

export const createFollow = async (data: IFollow) => {
    const result = await FollowSchema.create({ ...data, active: true });
    return result;
};

export const updateFollow = async (id: string, data: IFollow) => {
    const result = await FollowSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editFollow = async (id: string, data: Partial<IFollow>) => {
    const result = await FollowSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deleteFollow = async (id: string) => {
    const result = await FollowSchema.deleteOne({ _id: id });
    return result;
};

export const getFollowById = async (id: string) => {
    const result = await FollowSchema.findById(id).lean();
    return {data: result};
};

export const getAllFollow = async (filter: {}) => {
    const result = await FollowSchema.find(filter).lean();
    return {total: result.length,data: result};
};

