import {Link, Outlet} from "react-router-dom";

export const CommentsComponent = () => {
    return (
        <>
            <ul>
                <li><Link to={'jsonplaceholder'}>Comments jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Comments dummyjson</Link></li>
            </ul>
            <Outlet/>
        </>

    );
};