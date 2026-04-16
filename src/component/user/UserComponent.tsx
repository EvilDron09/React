import {useEffect, useState} from "react";
import type {IUser} from "../../model/IUser.ts";
import {usersService} from "../../service/api-service.ts";
import {UsersComponent} from "../users/UsersComponent.tsx";




export const UserComponent = () => {
    const [users, setUser] = useState<IUser[]>([]);
    useEffect(() => {
        usersService.getUsers().then((allUsers) =>{
            setUser(allUsers)
        })
    }, []);
    return (
        <>
            {
                users.map(user => <UsersComponent key={user.id} item={user}/>)
            }
        </>
    );
};
