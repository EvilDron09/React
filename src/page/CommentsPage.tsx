import {MenuComments} from "../component/menu/MenuComments.tsx";
import {Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <>
            <MenuComments/>
            <Outlet/>
        </>
    );
};
