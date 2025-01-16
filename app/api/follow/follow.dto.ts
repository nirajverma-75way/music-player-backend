
import { type BaseSchema } from "../../common/dto/base.dto";

export interface IFollow extends BaseSchema {
        followerId: string;
        followingId: string;
}
