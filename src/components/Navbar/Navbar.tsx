import { useState } from 'react';
import './Navbar.sass';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState<number>(3);

    const navList = [
        { id: 1, text: 'NavItem1' }, 
        { id: 2, text: 'NavItem2' }, 
        { id: 3, text: 'NavItem3' }
    ];

    return (
        <nav className='navbar'>
            <ul className="navbar__list">
                {
                    navList.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => { setActiveNav(item.id) }}
                            className={`navbar__list-item ${activeNav === item.id ? 'navbar__list-item_active' : ''}`}
                        >
                            <span className={`navbar__text ${activeNav === item.id ? 'navbar__text_active' : ''}`}>{item.text}</span>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar;