import {useFetch} from "../../hooks/useFetch.tsx";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users', []);

    return (
        <>
            {users.map(user => <UserComponent item={user} key={user.id}/>)}
        </>
    );
};
