
import mongoose from "mongoose";
import { type IFollow } from "./follow.dto";

const Schema = mongoose.Schema;

const FollowSchema = new Schema<IFollow>({
        followerId: { type: String, required: true },
        followingId: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IFollow>("follow", FollowSchema);
