
import mongoose from "mongoose";
import { type INotification } from "./notification.dto";

const Schema = mongoose.Schema;

const NotificationSchema = new Schema<INotification>({
        userId: { type: String, required: true },
        refId: { type: String, required: true },
        isRead: { type: Boolean, required: false, default: false },
        type: { type: String, required: true, enum: ["LIKE" , "COMMENT" , "FOLLOW"] },
        message: { type: String, required: true },
}, { timestamps: true });


export default mongoose.model<INotification>("notification", NotificationSchema);
