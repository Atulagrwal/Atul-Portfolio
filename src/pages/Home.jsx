import profileImg from "../assets/atulak.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {

  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React Developer",
      "Web Developer"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="home">
      <div className="home-left">
        <h1>
          Hi, I am <span className="highlight">Atul</span>
        </h1>

        <h2 className="role">
          {text}
          <Cursor cursorStyle="|" />
        </h2>

        <p>
          I am a Frontend Developer with hands-on experience in building modern,
          responsive, and user-friendly web application using React.js. I also 
          have working knowledge of backend and cloud fundamentals.
        </p>

        <div className="home-buttons">
      <a href="/projects" className="btn primary">View Projects</a>
      <a href="/contact" className="btn secondary">Contact Me</a>
    </div>
  </div>

  {/* RIGHT */}
  <div className="home-right">
    <div className="profile-circle">
      <img src={profileImg} alt="Atul" />
    </div>
      </div>
    </div>
  );
}

export default Home;