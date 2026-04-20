import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../page/UsersPage.tsx";
import {PostsPage} from "../page/PostsPage.tsx";
import {CommentsPage} from "../page/CommentsPage.tsx";
import {UsersDummyjsonPage} from "../page/dummyjson-page/UsersDummyjsonPage.tsx";
import {UsersJsonplaceholderPage} from "../page/jsonplaceholder-page/UsersJsonplaceholderPage.tsx";
import {CommentsJsonplaceholderPage} from "../page/jsonplaceholder-page/CommentsJsonplaceholderPage.tsx";
import {CommentsDummyjsonPage} from "../page/dummyjson-page/CommentsDummyjsonPage.tsx";
import {PostsJsonplaceholderPage} from "../page/jsonplaceholder-page/PostsJsonplaceholderPage.tsx";
import {PostsDummyjsonPage} from "../page/dummyjson-page/PostsDummyjsonPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element:<App/>,children:[
            {path:'users', element:<UsersPage/>,children:[
                    {path:'dummyjson', element:<UsersDummyjsonPage/>},
                    {path:'jsonplaceholder', element:<UsersJsonplaceholderPage/>}
                ]},
            {path:'posts', element:<PostsPage/>, children:[
                    {path:'dummyjson', element:<PostsDummyjsonPage/>},
                    {path:'jsonplaceholder', element:<PostsJsonplaceholderPage/>}
                ]},
            {path:'comments', element:<CommentsPage/>, children:[
                    {path:'dummyjson', element:<CommentsDummyjsonPage/>},
                    {path:'jsonplaceholder', element:<CommentsJsonplaceholderPage/>}
                ]}
        ]}
])

