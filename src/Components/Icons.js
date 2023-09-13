import whats from "../assets/images/whatsapp.png";
import linkedin from "../assets/images/linkedin.png";
import git from "../assets/images/github.png";
import cv from "../assets/images/curriculum-vitae.png";
import "../Styles/Icons.css"

export default function Icons() {
  return (
    <>
      <div className="icones-div">
        <div className="icones-esq">
          <a href="https://wa.me/5519996162312" target="_blank">
            <img className="icones" src={whats} alt="WhatsApp Icon" />
          </a>
          <a href="https://www.linkedin.com/in/pedrozucolo/" target="_blank">
            <img className="icones" src={linkedin} alt="Linkedin Icon" />
          </a>
        </div>
        <div className="icones-dir">
          <a href="https://github.com/Zucoprince/" target="_blank">
            <img className="icones" src={git} alt="GitHub Icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/1gNRBzhP6eSiu6YZ_tMTwa2mUJKeyx0fM/view?usp=drive_link"
            target="_blank"
          >
            <img className="icones" src={cv} alt="Curriculum Icon" />
          </a>
        </div>
      </div>
    </>
  );
}
