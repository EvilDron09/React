import {Outlet} from "react-router-dom";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";
import {MenuUser} from "../components/menu/MenuUser.tsx";

export const PaginationLayout = () => {
    return (
        <>
            <Outlet/>
            <PaginationComponent/>
            <MenuUser/>
        </>
    );
};
