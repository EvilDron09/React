import type {IBaseResponse} from "./IBaseResponse.ts";
import type {IUser} from "./IUser.ts";

export interface IUserResponse extends IBaseResponse{
    users: IUser[];
}
