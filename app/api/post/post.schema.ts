
import mongoose from "mongoose";
import { type IPost } from "./post.dto";

const Schema = mongoose.Schema;

const PostSchema = new Schema<IPost>({
        content: { type: String, required: true },
        userId: { type: String, required: true },
        mediaUrl: { type: String },
}, { timestamps: true });


export default mongoose.model<IPost>("post", PostSchema);
