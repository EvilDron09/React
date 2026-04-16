import './MenuStyle.ts'
import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={''}>home</Link></li>
            <li><Link to={'users'}>users</Link></li>
            <li><Link to={'posts'}>posts</Link></li>
        </ul>
    );
};
