import {useEffect, useState} from "react";
import type {IUsersDummyjson} from "../../../models/dummyjson/IUsersDummyjson.ts";
import {usersServiceDummyjson} from "../../../service/dummyjson/api-service-dummyjson.ts";
import {UserDummyjson} from "../user-dummyjson/UserDummyjson.tsx";

export const UsersDummyjson = () => {
    const [users, setUsers] = useState<IUsersDummyjson[]>([]);
    useEffect(() => {
        usersServiceDummyjson.getUsersServiceDummyjson().then((allUsers) =>{
            setUsers(allUsers);
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
