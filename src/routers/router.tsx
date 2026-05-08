import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../page/UsersPage.tsx";
import {UserPage} from "../page/UserPage.tsx";
import {PostsPage} from "../page/PostsPage.tsx";

export const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'users/:id', element:<UserPage/>},
            {path:'posts', element:<PostsPage/>},
        ]}
])
