import mongoose from "mongoose";
import { type ISong } from "./song.dto";

const Schema = mongoose.Schema;

const SongSchema = new Schema<ISong>(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    genre: { type: String, required: true },
    lyrics: { type: String, required: true },
    audioUrl: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<ISong>("song", SongSchema);
