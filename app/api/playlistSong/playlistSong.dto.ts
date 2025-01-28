import { type BaseSchema } from "../../common/dto/base.dto";

export interface IPlaylistSong extends BaseSchema {
  playListId: string;
  songId: string;
}
