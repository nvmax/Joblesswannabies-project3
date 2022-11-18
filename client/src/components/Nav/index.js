import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/index';
import './style.css'

function Nav() {
    return (
        <nav className='nav-grid nav-style'>
            <Link to='/' className='gird-col-span-2 nav-title font-Coolvetica'>Garmin</Link>
            <ul className='nav-list-grid nav-list-style font-Poppins'>
                <li><Link className='nav-list-item-styling' to="/signup">Signup</Link></li>
                <li><Link className='nav-list-item-styling' to="/login">Login</Link></li>
                <li><Link className='nav-list-item-styling' to="/browse" >Browse</Link></li>
                <li><Cart /></li>
            </ul>
        </nav>
    )
}

export default Nav;