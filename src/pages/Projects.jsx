import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaTasks,
  FaTeamspeak,
  FaUser,
  FaBook,
  FaCloudSun
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Projects = () => {
  return (
    <section className="section projects">
      <h1>My Projects</h1>

      <div className="projects-container">

        {/* ================= Project 1 ================= */}
        <div className="project-card">
          <h2>
            <FaTasks
            className="project-title-icon" /> Task Manager Web App</h2>
          <p>
            A task management application where users can add, delete,
            update and manage tasks efficiently.
          </p>

          <div className="tech-icons">
            <FaReact />
            <FaHtml5 />
            <FaCss3Alt />
            <FaJs />
            <FaNodeJs />
            <SiExpress />
            <SiMongodb />
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/Atulagrwal/task-manager"
              target="_blank"
              rel="noreferrer"
              className="btn github"
            >
              <FaGithub /> GitHub Code
            </a>
          </div>
        </div>

        {/* ================= Project 2 ================= */}
        <div className="project-card">
          <h2>
            <FaUser
            className="project-title-icon" /> Personal Portfolio Website</h2>
          <p>
            A responsive personal portfolio built using React with modern UI
            and smooth navigation.
          </p>

          <div className="tech-icons">
            <FaReact />
            <FaHtml5 />
            <FaCss3Alt />
            <FaJs />
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/Atulagrwal"
              target="_blank"
              rel="noreferrer"
              className="btn github"
            >
              <FaGithub /> GitHub Profile
            </a>

            <a
              href="http://192.168.1.11:5174/"
              target="_blank"
              rel="noreferrer"
              className="btn live"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

        {/* ================= Project 3 ================= */}
        <div className="project-card">
          <h2>
            <FaBook
            className="project-title-icon" /> Online Book Store</h2>
          <p>
            An online book store web application where users can browse books
            and view details.
          </p>

          <div className="tech-icons">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJs />
            <FaNodeJs />
            <SiExpress />
            <SiMongodb />
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/Atulagrwal/Book_Store"
              target="_blank"
              rel="noreferrer"
              className="btn github"
            >
              <FaGithub /> GitHub Code
            </a>
          </div>
        </div>

        {/* ================= Project 4 ================= */}
        <div className="project-card">
          <h2>
            <FaCloudSun
            className="project-title-icon" /> Weather Web App</h2>
          <p>
            A weather application that shows real-time temperature
            using Weather API.
          </p>

          <div className="tech-icons">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJs />
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/Atulagrwal/Weather-webApp"
              target="_blank"
              rel="noreferrer"
              className="btn github"
            >
              <FaGithub /> GitHub Code
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;