import {Outlet} from "react-router-dom";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";

export const UserPage = () => {
    return (
        <>
            <Outlet/>
            <UsersComponent/>
        </>
    );
};
