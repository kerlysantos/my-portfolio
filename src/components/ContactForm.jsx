import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Mensaje:', message);
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contáctame</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Tu nombre" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Tu email" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea 
                            id="message" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="Tu mensaje" 
                            required 
                        />
                    </div>
                    <button type="submit" className="form-submit-btn">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
