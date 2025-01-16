
import mongoose from "mongoose";
import { type ILike } from "./like.dto";

const Schema = mongoose.Schema;

const LikeSchema = new Schema<ILike>({
        userId: { type: String, required: true },
        postId: { type: String, required: true },
}, { timestamps: true });


export default mongoose.model<ILike>("like", LikeSchema);
