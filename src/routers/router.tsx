import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {PostPage} from "../pages/PostPage.tsx";

export const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'users/:id', element:<UserPage/>},
            {path:'users/:userId/posts', element:<PostsPage/>},
            {path:'users/:userId/posts/:id', element:<PostPage/>}
        ]}
])
