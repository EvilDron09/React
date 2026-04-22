import {useEffect, useState} from "react";
import type {IUser} from "../../models/user/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import type {IUserResponse} from "../../models/user/IUserResponse.ts";
import {userService} from "../../services/api-service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
       userService.getAllUser()
            .then(({users}: IUserResponse) => {
            setUsers(users)
        })

    }, []);
    return (
        <>
            {
                users.map(user =><UserComponent key={user.id} item={user}/>)
            }
        </>
    );
};
