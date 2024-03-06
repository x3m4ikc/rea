import "./NavMenu.css"
// import { NavLink } from 'react-router-dom';

const NavMenu = () => {

    return (
        <div className="nav-menu-holder">
            <ul className="navigation">
                <li className="navigation-item">
                    <button>
                        {/* <NavLink to='/' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                            <span className="nav=text">Главная</span>
                        </NavLink> */}
                        <a>
                            <span>Главная</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button>
                        <a>
                            <span>Главная</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button>
                        <a>
                            <span>Главная</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button>
                        <a>
                            <span>Главная</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button>
                        <a>
                            <span>Главная</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button>
                        <a>
                            <span>Главная</span>
                        </a>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;