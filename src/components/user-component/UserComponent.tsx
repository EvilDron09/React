
import type {IUser} from "../../models/IUser.ts";

type UserComponentProps ={
    item:IUser
}

export const UserComponent = ({item}:UserComponentProps) => {
    return (
        <div>
            {item.id} {item.username}
        </div>
    );
};
