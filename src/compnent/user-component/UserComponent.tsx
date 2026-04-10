import type {FC} from "react";
import type {IUser} from "../../modules/IUser.ts";

type UserPropType = {
    item:IUser
    foo:(item:IUser) => void
}

export const UserComponent:FC<UserPropType> = ({item,foo}) => {
    return (
       <>
           <p>{item.name}</p>
           <button onClick={()=>{
                foo(item)
           }}>deteils</button>
       </>

    );
};
