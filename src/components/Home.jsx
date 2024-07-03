import React from 'react';
import { ReactTyped } from 'react-typed'; // Cambiar la importación a ReactTyped
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1>Hola, mi nombre es <br /><span className="highlight">Kerly Santos</span></h1>
                <h2>Soy  
                    <ReactTyped
                        strings={['Backend Developer', 'Frontend Developer']}
                        typeSpeed={90}
                        backSpeed={90}
                        loop
                    />
                </h2>
                <Link to="contact" smooth={true} duration={900} className="hire-me-btn">Contactame aqui</Link>
            </div>
        </section>
    );
}

export default Home;
