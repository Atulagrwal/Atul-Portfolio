function Skills() {
  return (
    <section className="skills">

      <h2 className="skills-heading">Primary Skills</h2>
      <p className="skills-sub">Frontend / React </p>

      <div className="skills-grid">
        <Skill icon="devicon-html5-plain colored" name="HTML" />
        <Skill icon="devicon-css3-plain colored" name="CSS" />
        <Skill icon="devicon-javascript-plain colored" name="JavaScript" />
        <Skill icon="devicon-react-original colored" name="React" />
      </div>

      <h2 className="skills-heading">Secondary / Working Knowledge</h2>

      <div className="skills-grid">
        <Skill icon="devicon-java-plain colored" name="Java" />
        <Skill icon="devicon-spring-plain colored" name="Spring Boot" />
        <Skill icon="devicon-mongodb-plain colored" name="MongoDB" />
        <Skill icon="devicon-mysql-plain colored" name="MySQL" />
      </div>

      <h2 className="skills-heading">Tools & Cloud</h2>

      <div className="skills-grid">
        <Skill icon="devicon-github-plain coloured" name="Git & GitHub" />
        <Skill
          icon="devicon-amazonwebservices-plain-wordmark colored"
          name="AWS (Cloud Fundamentals)"
        />
      </div>

    </section>
  );
}

/* 👇 SAME FILE ke andar Skill component */
function Skill({ icon, name }) {
  return (
    <div className="skill-card">
      <i className={icon}></i>
      <span>{name}</span>
    </div>
  );
}

export default Skills;