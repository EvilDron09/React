import {UserComponent} from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../modules/IUser.ts";
import {getUsers} from "../../service/api.service.ts";

export const UsersComponent = () => {

        const [users, setUsers] = useState<IUser[]>([]);
        console.log('app')
        useEffect(()=>{
            getUsers()
                .then((response) =>{
                    setUsers(response)
                });
            return() =>{console.log('asd')}


        },[])
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};
