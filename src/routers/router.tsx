import {createBrowserRouter} from "react-router-dom";
import {MainLayouts} from "../layouts/MainLayouts.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayouts/>,children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>}
        ]}
])
