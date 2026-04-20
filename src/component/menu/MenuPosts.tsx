import {Link} from "react-router-dom";

export const MenuPosts = () => {
    return (
        <ul>
            <li><Link to={'dummyjson'}>Post Dummyjson</Link></li>
            <li><Link to={'jsonplaceholder'}>Post Jsonplaceholder</Link></li>
        </ul>
    );
};
