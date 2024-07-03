import React from 'react';
import Slider from 'react-slick';
import './Skills.css';


const skills = [
    { name: "HTML", image: "html.png" },
    { name: "CSS", image: "css-3.png" },
    { name: "JavaScript", image: "js.png" },
    { name: "TypeScript", image: "ts.png" },
    { name: "React", image: "reactf.png" },
    { name: "Redux", image: "redux2.png" },
    { name: "Node.js", image: "nodejs2.png" },
    { name: "Styled-Components", image: "Styled-Components.png" },
    { name: "Java", image: "java.png" },
    { name: "PostgreSQL", image: "postgresql2.png" },
    { name: "MongoDB", image: "mongodb2.png" }, 
    { name: "SQL Server", image: "sqlserve.png" },
    { name: "Postman", image: "postman.png" },
    { name: "APIs REST", image: "api.png" },
    { name: "SOAP", image: "soapui2.jpeg" },
    { name: "ing", image: "ing.png" },
    { name: "github", image: "github.png" },
    { name: "grafana", image: "grafana.png" },
    { name: "json", image: "json.png" },
    { name: "xml", image: "xml.png" },
    { name: "visual-basico", image: "visual-basico.png" },
    { name: "apigee", image: "apigee.png" },
    { name: "swagger", image: "swagger.png" },

];

const Skills = () => {
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section id="skills" className="skills-section">
            <div className="skills-content">
                <h2>Mis Habilidades</h2>
                <div className="form-container">
                    <p>
                        Desde que comencé en el mundo de la programación, me ha interesado aprender herramientas para el Desarrollo Web, es aquí donde entran en juego estas poderosas herramientas, HTML5, CSS3, JavaScript y REACT JS, constantemente estoy aprendiendo en este entorno cambiante y agregando herramientas a mi repertorio, por temas laborales tuve la oportunidad de volcarme al desarrollo backend, ahora mismo me encuentro trabajando con .NET, en el mantenimiento y desarrollo de aplicaciones con WPF.
                    </p>
                    <a href="#contact" className="contact-button">Contáctame</a>
                </div>
            </div>
            <div className="skills-carousel">
                <Slider {...settings}>
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <img src={process.env.PUBLIC_URL + `/${skill.image}`} alt={skill.name} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Skills;
