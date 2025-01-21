
import { type BaseSchema } from "../../common/dto/base.dto";

export interface IUser extends BaseSchema {
        name: string;
        bio?: string;
        username: string;
        email: string;
        password: string;
        accessToken?: string;
        refreshToken?: string;
}
