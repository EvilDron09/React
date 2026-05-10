import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import  {userSliceActions} from "../redux/userSlice/userSlice.ts";
import {UserComponent} from "../components/user-component/UserComponent.tsx";

export const UserPage = () => {

    const {id} =useParams();

    const {user,loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(id) dispatch(userSliceActions.loadUser(id))
    }, [id]);
    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {user && <div><UserComponent item={user}/></div>}
        </div>
    );
};
