import React from 'react';
import './Services.css';

const services = [
    {
        title: "Frontend Developer",
        description: "I offer you security and compliance when creating, designing, updating and maintaining advanced web portals on the client side (Front-end) through: HTML5, CSS3, JavaScript, and REACT JS. You'll love your Website."
    },
    {
        title: "Fully Responsive",
        description: "Your site will display properly on any device, including desktop computers, tablets, and mobile phones. A good and attractive web design helps you keep your leads on your site, which is the digital face of your business."
    },
    {
        title: "Backend Developer",
        description: "As a Backend Developer, I have prepared myself to build API's (Application Programming Interfaces), as well as developing applications with WPF (Windows Presentation Foundation), maintaining good coding practices, currently working with .NET."
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <h2>My Services</h2>
            <div className="service-list">
                {services.map((service, index) => (
                    <div className="card" key={index}>
                        <h3 className="heading">{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
