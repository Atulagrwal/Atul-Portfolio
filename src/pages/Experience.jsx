import React from "react";
import { FaBrain, FaLaptopCode, FaCloud } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="section experience">
      <h1>My Experience</h1>

      <div className="projects-container">

        {/* Machine Learning Intern */}
        <div className="project-card">
          <h2>
            <FaBrain /> Machine Learning Intern (Academic)
          </h2>
          <p>
            Worked on machine learning concepts and hands-on implementation using Python.
            Performed data preprocessing, feature engineering, and model evaluation.
          </p>

          <ul>
            <li>Python, TensorFlow, Scikit-learn</li>
            <li>Model building & evaluation</li>
            <li>Data preprocessing</li>
          </ul>

          <div className="project-buttons">
            <a
              href="https://drive.google.com/file/d/1sNwdWILwyx7Pjxqo4SNMLp7mVuGwZsDi/view"
              target="_blank"
              rel="noreferrer"
              className="btn live"
            >
              View Certificate
            </a>
          </div>
        </div>

        {/* Frontend Web Developer Intern */}
        <div className="project-card">
          <h2>
            <FaLaptopCode /> Frontend Web Developer Intern
          </h2>
          <p>
            Worked on frontend development using modern web technologies and frameworks.
            Built responsive UI and improved UX.
          </p>

          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Responsive UI / UX</li>
          </ul>

          <div className="project-buttons">
            <a
              href="https://drive.google.com/file/d/1I15ouC9Fp6HfOpl0SldFsj-jjIn00wMP/view"
              target="_blank"
              rel="noreferrer"
              className="btn live"
            >
              View Certificate
            </a>
          </div>
        </div>

        {/* Project & Cloud Experience */}
        <div className="project-card">
          <h2>
            <FaCloud /> Project & Cloud Experience
          </h2>
          <p>
            Hands-on experience with full stack MERN applications and cloud fundamentals.
          </p>

          <ul>
            <li>MongoDB, Express, Node.js</li>
            <li>MERN stack projects</li>
            <li>AWS Cloud fundamentals</li>
          </ul>

          <div className="project-buttons">
            <a
              href="https://drive.google.com/file/d/1Y0zaiW9uY24rohZ0YOK_Pw6gkRbJ6THI/view"
              target="_blank"
              rel="noreferrer"
              className="btn live"
            >
              AWS Certificate
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;