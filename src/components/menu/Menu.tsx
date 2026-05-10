import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>Users</Link></li>
            </ul>
        </div>
    );
};
