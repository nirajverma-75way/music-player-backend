
import { type BaseSchema } from "../../common/dto/base.dto";

export interface IReplie extends BaseSchema {
        userId: string;
        postId: string;
        parentId: string;
        content: string;
}
