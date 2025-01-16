
import { type ILike } from "./like.dto";
import LikeSchema from "./like.schema";

export const createLike = async (data: ILike) => {
    const result = await LikeSchema.create({ ...data, active: true });
    return result;
};

export const updateLike = async (id: string, data: ILike) => {
    const result = await LikeSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editLike = async (id: string, data: Partial<ILike>) => {
    const result = await LikeSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deleteLike = async (id: string) => {
    const result = await LikeSchema.deleteOne({ _id: id });
    return result;
};

export const getLikeById = async (id: string) => {
    const result = await LikeSchema.findById(id).lean();
    return result;
};

export const getAllLike = async () => {
    const result = await LikeSchema.find({}).lean();
    return result;
};
export const getLikeByEmail = async (email: string) => {
    const result = await LikeSchema.findOne({ email }).lean();
    return result;
}

