import type {IUsersDummyjson} from "../IUsersDummyjson.ts";

export interface IUsersArray{

        users: IUsersDummyjson[],
        total: number,
        skip: number,
        limit: number

}
