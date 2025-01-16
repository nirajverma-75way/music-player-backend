
import { type BaseSchema } from "../../common/dto/base.dto";

export interface IComment extends BaseSchema {
        userId: string;
        postId: string;
        content: string;
}
