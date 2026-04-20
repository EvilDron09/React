import {useEffect, useState} from "react";
import type {IUsersJsonplaceholder} from "../../../models/jsonplaceholder/IUsersJsonplaceholder.ts";
import {usersServiceJsonplaceholder} from "../../../service/jsonplaceholder/api-service-jsonplaceholder.ts";
import {UserJsonplaceholder} from "../user-jsonplaceholder/UserJsonplaceholder.tsx";

export const UsersJsonplaceholder = () => {
    const [users, setUsers] = useState<IUsersJsonplaceholder[]>([]);
    useEffect(() => {
        usersServiceJsonplaceholder.getUsersJsonplaceholder().then((allUsers)=>{
            setUsers(allUsers);
        })
    }, []);
    return (
        <>
            {
                users.map(user =><UserJsonplaceholder key={user.id} item={user}/>)
            }
        </>
    );
};
