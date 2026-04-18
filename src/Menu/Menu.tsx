import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}>Users</Link></li>
            <li><Link to={'Posts'}>Posts</Link></li>
            <li><Link to={'Comments'}>Comments</Link></li>
        </ul>
    );
};