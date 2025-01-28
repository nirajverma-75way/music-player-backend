import mongoose from "mongoose";
import { type IPlaylist } from "./playlist.dto";

const Schema = mongoose.Schema;

const PlaylistSchema = new Schema<IPlaylist>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IPlaylist>("playlist", PlaylistSchema);
