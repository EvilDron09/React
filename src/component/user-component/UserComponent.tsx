import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserType = {
    item:IUser
}

export const UserComponent:FC<UserType> = ({item}) => {
    return (
        <>
            <div>{item.last_name} {item.first_name}</div>
            <img src={item.avatar} alt={item.first_name}/>
        </>

    );
};
