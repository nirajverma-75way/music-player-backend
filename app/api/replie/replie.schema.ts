
import mongoose from "mongoose";
import { type IReplie } from "./replie.dto";

const Schema = mongoose.Schema;

const ReplieSchema = new Schema<IReplie>({
        userId: { type: String, required: true },
        postId: { type: String, required: true },
        parentId: { type: String, required: true },
        content: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IReplie>("replie", ReplieSchema);
