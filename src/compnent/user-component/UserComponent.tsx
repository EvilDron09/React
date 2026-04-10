import type {FC} from "react";
import type {IUser} from "../../modules/IUser.ts";

type UserPropType = {
    item:IUser
}

export const UserComponent:FC<UserPropType> = ({item}) => {
    return (
        <p>{item.name}</p>
    );
};
