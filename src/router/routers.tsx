import {createBrowserRouter, } from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePege} from "../page/HomePege.tsx";
import {UsersPage} from "../page/UsersPage.tsx";
import {PostsPage} from "../page/PostsPage.tsx";


export const routes = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
            {index:true, element:<HomePege/>},
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
        ]}
])
