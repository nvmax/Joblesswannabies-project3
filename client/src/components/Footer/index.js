import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer-grid footer-style font-Poppins'>
            <div className='footer-list-style'>
                <li className='footer-list-item-styling'><Link to='/Home'>Home</Link></li>
                <li className='footer-list-item-styling'><Link to='/Browse'>Browse</Link></li>
                <li className='footer-list-item-styling'><Link to='/Login'>Login</Link></li>
                <li className='footer-list-item-styling'><Link to='/Signup'>Signup</Link></li>
            </div>
            <div className='footer-list-style font-Poppins'>
                <h2 className='footer-title font-Coolvetica'>Garmin</h2>
                <li>2568 Bradtke Hills Suite 895</li>
                <li>South Orieton, NE 66593-7128</li>
                <li>774-364-7731</li>
            </div>
            <div className='footer-list-style font-Poppins'>
                <li>Love the look of our website?</li>
                <li href='https://github.com/nvmax/Joblesswannabies-project3'>Visit github</li>
            </div>
        </footer>
    )
}

export default Footer;