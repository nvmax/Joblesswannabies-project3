import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Nav() {
    return (
        <nav className='nav-grid nav-style'>
            <div className='gird-col-span-2 nav-title font-Coolvetica'>Garmin</div>
            <ul className='nav-list-grid nav-list-style font-Poppins'>
                <li><a>Signup</a></li>
                <li><a>Login</a></li>
                <li><a>Browse</a></li>
                <li><i className="fas fa-shopping-cart nav-icon-style"></i></li>
            </ul>
        </nav>
    )
}

export default Nav;