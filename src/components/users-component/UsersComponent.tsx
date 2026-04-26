import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import type {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../service/api-service.ts";
import type {IUserResponse} from "../../models/IUserResponse.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {

    const [seachParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = seachParams.get('page') || '1';
        getUsers(currentPage).then(({users}:IUserResponse) =>
        setUsers(users));
    }, [seachParams]);
    return (
        <>
            {
                users.map((user:IUser) => <UserComponent key={user.id} item={user}/>)
            }
        </>
    );
};
