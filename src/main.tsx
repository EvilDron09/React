
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout.tsx";
import {APage} from "./pages/APage.tsx";
import {BPage} from "./pages/BPage.tsx";
import {HomePage} from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    // {path:'/',element:<div>main layout</div>},
    // {path:'/a',element:<div>layout a</div>},
    // {path:'/b',element:<div>layout w</div>}
    {
        path:'/',element:<MainLayout/>,
        children:[
            {path:'a', element:<APage/>},
            {path:'b', element:<BPage/>,
                children:[
                    {path:'1',element:<div>1</div>},
                    {path:'2',element:<div>2</div>},
                    {path:'3',element:<div>3</div>}
                ]},
            {path:'', element:<HomePage/>},
        ]
    },

])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)
    // .render(<BrowserRouter>
    //         <Routes>
    //             <Route path={'/'} element={<MainLayout/>}>
    //                 <Route path={''} element={<HomePage/>}/>
    //                 <Route path={'a'} element={<APage/>}/>
    //                 <Route path={'b'} element={<BPage/>}>
    //                     <Route path={'1'} element={<div>content 1</div>}/>
    //                     <Route path={'2'} element={<div>content 2</div>}/>
    //                     <Route path={'3'} element={<div>content 3</div>}/>
    //                 </Route>
    //             </Route>
    //
    //         </Routes>
    //     </BrowserRouter>)
