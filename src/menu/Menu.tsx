import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/a'}>a</Link></li>
                <li><Link to={'/b'}>b</Link></li>
            </ul>
        </div>
    );
};
