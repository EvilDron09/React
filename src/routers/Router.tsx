import { createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layuots/MainLayout.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {path:'users', element:<UserPage/>},
            {path:'users/:id/carts', element:<CartsPage/>}
        ]}
])
