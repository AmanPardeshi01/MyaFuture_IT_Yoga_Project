import React, { useState } from 'react';
//Importing css file gfngfndgngh
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img src="/images/logo2.png" alt="Mann Moksha Logo" className="logo" />
                </div>
                
                <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                    <div className="menu-header">
                        <button className="close-menu" onClick={toggleMenu}>
                            ×
                        </button>
                    </div>
                    <a href="#about">About</a>
                    <a href="#classes">Classes</a>
                    <a href="#contact">Contact</a>
                    <a href="#services">Services</a>
                </nav>
        
                <button className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? '×' : '☰'}
                </button>
            </div>
        </header>
    );
};

export default Navbar;