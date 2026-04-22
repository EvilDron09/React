import {type FC} from "react";
import type {IUser} from "../../models/user/IUser.ts";
import {useNavigate} from "react-router-dom";


type UserComponentType ={
    item:IUser
}
export const UserComponent:FC<UserComponentType> = ({item}) => {
    const navigation = useNavigate()
    const onButtonClickNavigation = () => {
        navigation('/users/'+item.id+'/carts')
    }

    return (
        <div className={"my-5"}>
            {item.username}: {item.email}
            <button className={"border-2"} onClick={onButtonClickNavigation}>Click me</button>
        </div>
    );
};
