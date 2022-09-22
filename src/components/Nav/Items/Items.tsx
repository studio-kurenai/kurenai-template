import { Link } from 'react-router-dom';
import './Items.scss';

const Items = () => {
    return (
        <div className="items">
            
            <Link className="items__btn" to="/">
                About
            </Link>
            
            <Link className="items__btn" to="/store">
                Store
            </Link>
            <Link className="items__btn" to="/store">
                Contact
            </Link>
            <Link className="items__btn" to="/login">
                Login
            </Link>

        </div>
    )
}

export default Items;
