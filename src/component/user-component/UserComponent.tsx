import type {IUser} from "../../models/IUser.ts";

interface IUserComponent {
    item:IUser
}

export const UserComponent = ({item}:IUserComponent) => {
    return (
        <div>
            <p>{item.id}: {item.name}</p>
        </div>
    );
};
