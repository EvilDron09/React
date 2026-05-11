import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userAction} from "../redux/slice/userSlice.ts";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";

export const UsersPage = () => {
    const dispatch = useAppDispatch();

    const {users} = useAppSelector(({userSlice}) => userSlice);


    useEffect(() => {
        dispatch(userAction.loadUsers())
    }, []);
    return (
        <section>
            {
                users.map(user =><UsersComponent key={user.id} user={user}/>)
            }
        </section>
    );
};
