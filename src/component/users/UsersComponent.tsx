import {useEffect, useState} from "react";
import type {IUser} from "../../model/IUser.ts";
import {usersService} from "../../service/api-service.ts";
import { UserComponent } from "../user/UserComponent.tsx";





export const UsersComponent = () => {
    const [users, setUser] = useState<IUser[]>([]);
    useEffect(() => {
        usersService.getUsers().then((allUsers) =>{
            setUser(allUsers)
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
