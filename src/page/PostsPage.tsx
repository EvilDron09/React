import { Outlet } from "react-router-dom";
import {MenuPosts} from "../component/menu/MenuPosts.tsx";

export const PostsPage = () => {
    return (
        <>
            <MenuPosts/>
            <Outlet/>
        </>
    );
};
