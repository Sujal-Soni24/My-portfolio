import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Visabolt",
      description:
        "A responsive and modern frontend website built using HTML, CSS, and JavaScript. It showcases clean UI design, layout techniques, and interactive elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://your-visabolt-demo-link.com", // optional
      github: "https://github.com/yourgithubusername/visabolt",
    },
    {
      title: "Weather App",
      description:
        "A dynamic weather forecasting app built using JavaScript and OpenWeather API. It fetches real-time weather details based on user input.",
      tech: ["JavaScript", "API"],
      link: "https://your-weatherapp-demo-link.com",
      github: "https://github.com/yourgithubusername/weather-app",
    },
    {
      title: "React Portfolio",
      description:
        "This portfolio website built using React showcases my projects, skills, and resume. It demonstrates my understanding of component-based design and responsive layout.",
      tech: ["React", "CSS"],
      link: "#",
      github: "https://github.com/yourgithubusername/react-portfolio",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-item">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="C:\Visabolt project\visabolt.html" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
