
import mongoose from "mongoose";
import { type IComment } from "./comment.dto";

const Schema = mongoose.Schema;

const CommentSchema = new Schema<IComment>({
        userId: { type: String, required: true },
        postId: { type: String, required: true },
        content: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IComment>("comment", CommentSchema);
