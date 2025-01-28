import mongoose from "mongoose";
import { type ILikeSong } from "./likeSong.dto";

const Schema = mongoose.Schema;

const LikeSongSchema = new Schema<ILikeSong>(
  {
    userId: { type: String, required: true },
    songId: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<ILikeSong>("likeSong", LikeSongSchema);
