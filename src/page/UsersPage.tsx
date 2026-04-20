
import {MenuUsers} from "../component/menu/MenuUsers.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <MenuUsers/>
            <Outlet/>
        </>
    );
};
