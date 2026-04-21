import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";

export const MainLayouts = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};
