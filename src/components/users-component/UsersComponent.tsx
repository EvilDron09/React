import {useCallback, useMemo,} from "react";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {useFetch} from "../../hooks/useFetch.tsx";

export const UsersComponent = () => {
    console.log('users');
    const users = useFetch();

    const arr = useMemo(() => {
        return [11,22,33];
    },[]);

    const foo = useCallback(() =>{
        console.log(('test'));
    },[]);


    return (
        <div>

            {
                users.map(user => <UserComponent item={user} foo={foo} arr={arr}/>)
            }
        </div>
    );
};

