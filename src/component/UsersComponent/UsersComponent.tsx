import {Link, Outlet} from "react-router-dom";

export const UsersComponent = () => {
    return (
        <>
            <ul>
                <li><Link to={'jsonplaceholder'}>Users jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Users dummyjson</Link></li>
            </ul>
            <Outlet/>
        </>

    );
};