

import {useEffect} from "react";
import {userSliceActions} from "../redux/userSlice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";

export const UsersPage = () => {
    const {users,loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(userSliceActions.loadUsers())
    }, []);

    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {
                users.map(user =><UsersComponent item={user} key={user.id}/>)
            }
        </div>
    );
};
