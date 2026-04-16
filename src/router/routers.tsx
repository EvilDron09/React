import {createBrowserRouter, } from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePege} from "../page/HomePege.tsx";
import {UsersPage} from "../page/UsersPage.tsx";
import {PostsPage} from "../page/PostsPage.tsx";
import {SingleUsersDetailsPage} from "../page/SingleUsersDetailsPage.tsx";


export const routes = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
            {index:true, element:<HomePege/>},
            {path:'users', element:<UsersPage/>},
            {path:'users/details', element:<SingleUsersDetailsPage/>},
            {path:'posts', element:<PostsPage/>},
        ]}
])
