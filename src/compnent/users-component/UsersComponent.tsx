import {UserComponent} from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../modules/IUser.ts";
import {getUsers} from "../../service/api.service.ts";

export const UsersComponent = () => {

        const [users, setUsers] = useState<IUser[]>([]);
        const [item, setItem] = useState<IUser|null>(null);
        useEffect(()=>{
            getUsers()
                .then((response) =>{
                    setUsers(response)
                });
            return() =>{console.log('asd')}


        },[]);
        const foo =(item:IUser) =>{
            setItem(item);
        }
    return (
        <div>
            item && <div>{JSON.stringify(item)}</div>
            {
                users.map(user => <UserComponent foo={foo} key={user.id} item={user}/>)
            }
        </div>
    );
};
