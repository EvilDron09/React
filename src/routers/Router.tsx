import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersComponent} from "../component/users/UsersComponent.tsx";
import {PostsComponent} from "../component/posts/PostsComponent.tsx";
import {CommentsComponent} from "../component/comments/CommentsComponent.tsx";
import {ProductsComponent} from "../component/products/ProductsComponent.tsx";

 export const router = createBrowserRouter([
    {path:'/', element:<App/>, children:[
            {path:'users', element: <UsersComponent/>},
            {path:'posts', element: <PostsComponent/>},
            {path:'comments', element: <CommentsComponent/>},
            {path:'products', element: <ProductsComponent/>},
        ]}
])
