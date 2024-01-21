import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <div className='nav-container'>
                <div className='brand'>
                    <h1>Abdullah Ahmad</h1>
                </div>
                <div className='menu-icon' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
                </div>
                <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
                    <a className='nav-link' href='#'>Home</a>
                    <a className='nav-link' href='#'>About</a>
                    <a className='nav-link' href='#'>Services</a>
                    <a className='nav-link' href='#'>Portfolio</a>
                    <a className='nav-link' href='#'>Contact Me</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
