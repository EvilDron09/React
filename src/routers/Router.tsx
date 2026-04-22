import {createBrowserRouter} from "react-router-dom";
import {MainLayuot} from "../layuots/MainLayuot.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayuot/>,children:[
            {path:'users', element:<UsersPage/>,children:[
                    {path:':id/carts', element:<CartsPage/>}
                ]}
        ]}
])
