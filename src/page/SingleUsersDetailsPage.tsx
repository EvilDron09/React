import {useLocation} from "react-router-dom";
import type {IUser} from "../model/IUser.ts";

export const SingleUsersDetailsPage = () => {
    const {state} =useLocation();
    const user = state as IUser
    return (
        <div>
            {JSON.stringify(state)}
            {user.email}
        </div>
    );
};
