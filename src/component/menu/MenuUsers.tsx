import {Link} from "react-router-dom";

export const MenuUsers = () => {
    return (
        <ul>
            <li><Link to={'dummyjson'}>Users Dummyjson</Link></li>
            <li><Link to={'jsonplaceholder'}>Users Jsonplaceholder</Link></li>
        </ul>
    );
};
