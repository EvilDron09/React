import {Link, Outlet} from "react-router-dom";

export const PostsComponent = () => {
    return (
        <>
            <ul>
                <li><Link to={'jsonplaceholder'}>Posts jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Posts dummyjson</Link></li>
            </ul>
            <Outlet/>
        </>

    );
};