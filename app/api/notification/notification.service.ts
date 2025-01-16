
import { type INotification } from "./notification.dto";
import NotificationSchema from "./notification.schema";

export const createNotification = async (data: INotification) => {
    const result = await NotificationSchema.create({ ...data, active: true });
    return result;
};

export const updateNotification = async (id: string, data: INotification) => {
    const result = await NotificationSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editNotification = async (id: string, data: Partial<INotification>) => {
    const result = await NotificationSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deleteNotification = async (id: string) => {
    const result = await NotificationSchema.deleteOne({ _id: id });
    return result;
};

export const getNotificationById = async (id: string) => {
    const result = await NotificationSchema.findById(id).lean();
    return result;
};

export const getAllNotification = async () => {
    const result = await NotificationSchema.find({}).lean();
    return result;
};
export const getNotificationByEmail = async (email: string) => {
    const result = await NotificationSchema.findOne({ email }).lean();
    return result;
}

