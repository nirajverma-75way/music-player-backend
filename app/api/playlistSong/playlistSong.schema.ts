import mongoose from "mongoose";
import { type IPlaylistSong } from "./playlistSong.dto";

const Schema = mongoose.Schema;

const PlaylistSongSchema = new Schema<IPlaylistSong>(
  {
    playListId: { type: String, required: true },
    songId: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IPlaylistSong>(
  "playlistSong",
  PlaylistSongSchema,
);
