import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaFilePdf,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact">
      <h1>Contact Me</h1>

      <div className="contact-container">
        {/* Phone */}
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <a href="tel:6299883261">+91 6299883261</a>
        </div>

        {/* Email */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:atulagarwal8221@gmail.com">
            atulagarwal8221@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <FaLinkedin className="contact-icon linkedin" />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/atul-kumar82"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <FaGithub className="contact-icon github" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/Atulagrwal"
            target="_blank"
            rel="noreferrer"
          >
            View Repositories
          </a>
        </div>

        {/* Instagram */}
        <div className="contact-card">
          <FaInstagram className="contact-icon instagram" />
          <h3>Instagram</h3>
          <a
            href="https://www.instagram.com/atulkumar4849/"
            target="_blank"
            rel="noreferrer"
          >
            Follow Me
          </a>
        </div>

        {/* Facebook */}
        <div className="contact-card">
          <FaFacebook className="contact-icon facebook" />
          <h3>Facebook</h3>
          <a
            href="https://www.facebook.com/profile.php?id=100007713275293"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </div>

        {/* Resume */}
        <div className="contact-card">
          <FaFilePdf className="contact-icon resume" />
          <h3>Resume</h3>
          <a
            href="https://drive.google.com/file/d/1FOT_f_vY99RTT2bhOTJvce7LJ4ubVJ_S/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;