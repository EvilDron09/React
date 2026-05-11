import type {IUser} from "../../models/IUser.ts";

interface IUsersComponent {
    user:IUser;
}

export const UsersComponent = ({user}:IUsersComponent) => {
    return (
        <div>
            <p>{user.id} {user.name}</p>
        </div>
    );
};
