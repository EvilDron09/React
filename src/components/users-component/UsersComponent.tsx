import {useEffect, useState} from "react";
import type {IUser} from "../../models/user/IUser.ts";
import {userService} from "../../service/api-service.ts";
import type {IUserResponse} from "../../models/user/IUserResponse.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUser().then(({users}:IUserResponse)=>{
            setUsers(users)
        })
    }, []);
    return (
        <>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </>
    );
};
