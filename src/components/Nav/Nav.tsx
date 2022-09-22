import Items from './Items';
import Logo from './Logo';
import './Nav.scss';

export const Nav = () => {
    return (
        <div className="Nav">
            <div className="Nav__logo">
                <Logo />
            </div>
            <div className="Nav__mid">
                
            </div>
            <div className="Nav__items">
                <Items />
            </div>
        </div>
    )
}

export default Nav;