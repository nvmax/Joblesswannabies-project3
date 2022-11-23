import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

function Success() {
    if (Auth.loggedIn()) {
        return (
            <nav className='nav-grid nav-style'>
            <Link to='/' className='gird-col-span-2 nav-title font-Coolvetica'>Garmin</Link>
            <ul className='nav-list-grid nav-list-style font-Poppins'>
                <li>
                    <a href='/' onClick={() => Auth.logout()}>Logout</a>
                </li>
                <li><Link className='nav-list-item-styling' to="/browse" >Browse</Link></li>
                <li><Cart /></li>
            </ul>
        </nav>
        );
    } else {
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
        );
    }
}

export default Nav;

