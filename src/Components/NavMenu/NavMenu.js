import "./NavMenu.css"
// import { NavLink } from 'react-router-dom';

const NavMenu = () => {

    return (
        <div className="nav-menu-holder">
            <ul className="navigation">
                <li className="navigation-item">
                    <button className="nav-but">
                        {/* <NavLink to='/' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                            <span className="nav=text">Главная</span>
                        </NavLink> */}
                        <a>
                            <span className="nav-text">Главная</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button className="nav-but">
                        <a>
                            <span className="nav-text">Выбор программы</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button className="nav-but">
                        <a>
                            <span className="nav-text">Управление</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button className="nav-but">
                        <a>
                            <span className="nav-text">Температура</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button className="nav-but active">
                        <a>
                            <span className="nav-text">Влажность и CO₂</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button className="nav-but">
                        <a>
                            <span className="nav-text">Растворный узел</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button className="nav-but">
                        <a>
                            <span className="nav-text">Расписание поливов</span>
                        </a>
                    </button>
                </li>
                <li className="navigation-item">
                    <button className="nav-but">
                        <a>
                            <span className="nav-text">Освещение</span>
                        </a>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;