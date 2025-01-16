
import { type BaseSchema } from "../../common/dto/base.dto";

export interface ILike extends BaseSchema {
        userId: string;
        postId: string;
}
