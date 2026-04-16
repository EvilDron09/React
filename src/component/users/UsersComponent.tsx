import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserType ={
    item:IUser
}

export const UsersComponent:FC<UserType> = ({item}) => {
    const navigation = useNavigate();
    const handleOnClick = () =>{
        navigation('details', {state:item});
    }
    return (

        <div><Link to={'details'} state={item}>{item.username}</Link>
            <button onClick={handleOnClick}>details</button>
        </div>


    );
};
