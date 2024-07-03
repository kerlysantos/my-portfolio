import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import About from './components/About';
import Home from './components/Home';
import './styles.css';
import './components/ProjectList.css';
import './components/About.css';
import './components/Services.css';
import './components/ContactForm.css';
import './components/Home.css'; // Importar los estilos de Home
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Home /> {/* Añadir Home aquí */}
                <About />
                <section id="portfolio">
                    <ProjectList />
                </section>
                <Skills />
           
                <ContactForm />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
