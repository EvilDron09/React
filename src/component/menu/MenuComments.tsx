import {Link} from "react-router-dom";

export const MenuComments = () => {
    return (
        <ul>
            <li><Link to={'dummyjson'}>Comments Dummyjson</Link></li>
            <li><Link to={'jsonplaceholder'}>Comments Jsonplaceholder</Link></li>
        </ul>
    );
};
