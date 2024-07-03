import React, { useState } from 'react';
import './ProjectList.css';

const ProjectList = () => {
    const [projects] = useState([
        {
            id: 1,
            name: 'Calculadora Interactiva',
            description: 'Calculadora interactiva construida con React.',
            link: 'https://kerlysantos.github.io/Calculadora-Interactiva/',
            image: 'calculadora.png'
        },
        {
            id: 2,
            name: 'Clinica Odontologica',
            description: 'Sistema de reserva de turnos para una clínica odontológica usando Java-Spring Boot.',
            link: 'https://github.com/kerlysantos/ClinicaOdontologica',
            image: 'clinicaconreact.png'
        },
        {
            id: 3,
            name: 'ProyectoFinal-Green-Bike',
            description: 'Proyecto final integrando múltiples aspectos tanto el frontend y backend para el sistema de reservas de Bicicletas.',
            link: 'https://github.com/kerlysantos/ProyectoFinal-Green-Biken',
            image: 'fondogreebiken.png'
        }
    ]);

    return (
        <section>
            <h2>Proyectos</h2>
            <div className="project-list">
                {projects.map(project => (
                    <div className="card" key={project.id}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3 className="heading">{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="read-more-button">
                            Leer más
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectList;
