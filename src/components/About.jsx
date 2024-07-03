import React from 'react';

import { ReactTyped } from 'react-typed';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2>Sobre Mí

                    </h2>
                    <ReactTyped
                        strings={['Backend Developer', 'Frontend Developer']}
                        typeSpeed={90}
                        backSpeed={90}
                        loop
                        className="typed-text"
                    />
                    <p>Hola, soy Kerly, estudiante de desarrollo web apasionada por aprender y crear aplicaciones web. Me especializo en frontend y backend, y disfruto trabajando con tecnologías modernas para construir soluciones innovadoras.</p>
                    <p>En mi portafolio, encontrarás proyectos que muestran mis habilidades en HTML, CSS, JavaScript, React, Node.js, y más. Siempre estoy buscando nuevas oportunidades para mejorar mis habilidades y aprender nuevas tecnologías.</p>
                    <a href="/CVKerlySantos_compressed.pdf" download="Kerly_CV.pdf" className="download-cv-btn">Descargar CV</a>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/kerly-katiuska-santos-prieto-/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/kerlysantos" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        
                    </div>
                </div>
                <div className="about-photo">
                    <img src="/kerlyperfil.jpg" alt="Kerly" className="profile-image" />
                </div>
            </div>
        </section>
    );
}

export default About;
