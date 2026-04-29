import {Link} from "react-router-dom";

export const MenyCart = () => {
    return (
        <ul>
            <li><Link to={'cars'}>cars</Link></li>
            <li><Link to={'cars/create'}>create</Link></li>
        </ul>
    );
};
