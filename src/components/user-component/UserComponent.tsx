
import {useNavigate} from "react-router-dom";
import type {IUsersComponent} from "../../models/users-models/IUsersComponent.ts";



export const UserComponent = ({item}:IUsersComponent) => {
    const navigate = useNavigate();
    const toGoPosts = () =>{
        navigate(`/users/${item.id}/posts`)
    }
    return (
        <div>
            <p>{item.id} {item.name}</p>
            <button onClick={toGoPosts}>go to posts</button>
        </div>
    );
};
