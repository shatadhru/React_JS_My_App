import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; 
import "../Page_Component_Css/Home_Page_Body_Components.css";

function Home_Page_Body_Components() {
  return (
    <div className="Home_Body_texts_and_buttons_box">
      <div className="heading_main_text">
        <h1>
          Finding A Professional <span>MERN</span> Stack Web Developer???
        </h1>
        <p>
          I am a Web Developer & UI Designer. Specially creating dynamic,
          user-friendly websites that meet your business needs. My goal is to
          deliver top-notch web solutions that not only look great but also
          function seamlessly.
        </p>
        <button className="gradient-button">Get Started</button> 
      </div>
      <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
        </div>
    </div>
  );
}

export default Home_Page_Body_Components;
