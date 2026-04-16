import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";

type UserType ={
    item:IUser
}

export const UsersComponent:FC<UserType> = ({item}) => {
    return (
        <div>{item.username}</div>
    );
};
