import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";
// основна сторінка
export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};
