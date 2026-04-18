import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersComponent} from "../component/UsersComponent/UsersComponent.tsx";
import {PostsComponent} from "../component/PostsComponent/PostsComponent.tsx";
import {CommentsComponent} from "../component/CommentsComponent/CommentsComponent.tsx";
import {UsersElementDummyjson} from "../component/UsersComponent/UsersElement/UsersElementDummyjson.tsx";
import {UsersElementJsonplaceholder} from "../component/UsersComponent/UsersElement/UsersElementJsonplaceholder.tsx";
import {PostsElementJsonplaceholder} from "../component/PostsComponent/PostsElement/PostsElementJsonplaceholder.tsx";
import {PostsElementDummyjson} from "../component/PostsComponent/PostsElement/PostsElementDummyjson.tsx";
import {CommentsElementDummyjson} from "../component/CommentsComponent/CommentsElement/CommentsElementDummyjson.tsx";
import {
    CommentsElementJsonplaceholder
} from "../component/CommentsComponent/CommentsElement/CommentsElementJsonplaceholder.tsx";

export const router = createBrowserRouter([
    {path:'/',element:<App/>, children:[
            {path:'users', element:<UsersComponent/>, children:[
                    {path:'jsonplaceholder',element:<UsersElementJsonplaceholder/>},
                    {path:'dummyjson', element:<UsersElementDummyjson/>}
                ]},
            {path:'posts', element:<PostsComponent/>, children:[
                    {path:'jsonplaceholder',element:<PostsElementJsonplaceholder/>},
                    {path:'dummyjson', element:<PostsElementDummyjson/>}
                ]},
            {path:'comments', element:<CommentsComponent/>,children:[
                    {path:'jsonplaceholder',element:<CommentsElementJsonplaceholder/>},
                    {path:'dummyjson', element:<CommentsElementDummyjson/>}
                ]}
        ]},


])
