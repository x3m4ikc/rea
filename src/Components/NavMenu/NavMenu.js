import "./NavMenu.css"
import { NavLink } from 'react-router-dom';

const NavMenu = () => {

    return (
        <div className="nav-menu-holder">
            <ul className="navigation">
                <li className="navigation-item">
                    <NavLink to='/' className='link-item'>
                        <button className="nav-but">
                            <span className="nav-text">Главная</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to='/program' className='link-item'>
                        <button className="nav-but">
                            <span className="nav-text">Выбор программы</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to='/control' className='link-item'>
                        <button className="nav-but">                
                            <span className="nav-text">Управление</span>    
                        </button>
                    </NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to='/temperature' className='link-item'>
                        <button className="nav-but">
                            <span className="nav-text">Температура</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to='/humidity' className='link-item'>
                        <button className="nav-but">
                            <span className="nav-text">Влажность и CO₂</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to='/mixture' className='link-item'>
                        <button className="nav-but">
                            <span className="nav-text">Растворный узел</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to='/watering' className='link-item'>
                        <button className="nav-but">
                            <span className="nav-text">Расписание поливов</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to='/light' className='link-item'>
                        <button className="nav-but">
                            <span className="nav-text">Освещение</span>
                        </button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;