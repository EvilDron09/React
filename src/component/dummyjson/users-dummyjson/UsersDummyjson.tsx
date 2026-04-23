import {useEffect, useState} from "react";
import type {IUsersDummyjson} from "../../../models/dummyjson/IUsersDummyjson.ts";
import {usersServiceDummyjson} from "../../../service/dummyjson/api-service-dummyjson.ts";
import {UserDummyjson} from "../user-dummyjson/UserDummyjson.tsx";
import type {IUsersResponse} from "../../../models/dummyjson/ResponseElement/IUsersResponse.ts";

export const UsersDummyjson = () => {
    const [users, setUsers] = useState<IUsersDummyjson[]>([]);
    useEffect(() => {
        usersServiceDummyjson.getUsersServiceDummyjson().then(({users}:IUsersResponse) =>{
            setUsers(users);
        })
    }, []);
    return (
        <>
            {
                users.map(user =><UserDummyjson key={user.id} item={user}/>)
            }
        </>
    );
};
