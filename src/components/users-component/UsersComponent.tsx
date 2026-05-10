import type {IUsersComponent} from "../../models/users-models/IUsersComponent.ts";
import {useNavigate} from "react-router-dom";


export const UsersComponent = ({item}:IUsersComponent) => {
    const navigate = useNavigate();
    const toGoUser = (id:number) =>{
        navigate(`/users/${id}`)
    }
    return (
        <div>
           <p>{item.id} {item.name}</p>
            <button key={item.id} onClick={() => toGoUser(item.id)}>go to user</button>
        </div>
    );
};
