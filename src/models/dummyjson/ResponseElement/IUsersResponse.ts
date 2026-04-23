import type {IUsersDummyjson} from "../IUsersDummyjson.ts";

export interface IUsersResponse {

        users: IUsersDummyjson[],
        total: number,
        skip: number,
        limit: number

}
