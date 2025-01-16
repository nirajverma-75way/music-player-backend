
import { type BaseSchema } from "../../common/dto/base.dto";

export interface INotification extends BaseSchema {
        userId: string;
        refId: string;
        isRead?: boolean;
        type: "LIKE" | "COMMENT" | "FOLLOW";
        message: string
}
