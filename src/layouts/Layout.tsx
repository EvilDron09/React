import {Menu} from "../component/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
        <Menu/>
            <hr/>
            <Outlet/>
        </>
    );
};
