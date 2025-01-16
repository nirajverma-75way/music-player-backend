
import { type BaseSchema } from "../../common/dto/base.dto";

export interface IPost extends BaseSchema {
        content: string;
        userId: string;
        mediaUrl?: boolean;
}
