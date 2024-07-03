import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <div className="container">
                <div className="logo">
              
                </div>
                <nav className={isOpen ? 'nav open' : 'nav'}>
                    <ul>
                        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500}>Sobre Mí</Link></li>
                        <li><Link to="portfolio" smooth={true} duration={500}>Mi Portafolio</Link></li>
                        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                        <li><Link to="contact" smooth={true} duration={500}>Contacto</Link></li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
}

export default Header;
