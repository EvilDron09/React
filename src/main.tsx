
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routers/router.tsx";

// зв'язує проєкт з браузером
createRoot(document.getElementById('root')!).render(
   <RouterProvider router={router}/>
)
