import { type BaseSchema } from "../../common/dto/base.dto";

export interface ILikeSong extends BaseSchema {
  userId: string;
  songId: string;
}
