import React from "react";
import "../styles/MainPage.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";
import Me from "../assets/Me.jpg";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-content">
        <img
          src={Me} /* Replace with your photo path */
          alt="Adel Pazoki"
          className="profile-photo"
        />
        <div className="description">
          <div className="social-icons">
            <a
              href="https://github.com/Adelpzk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/adel-pazoki-toroudi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/adelpzk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="mailto:apazokit@uwaterloo.ca">
              <FaEnvelope />
            </a>
          </div>
          <p>
            👷🏻 Hey, my name is Adel and I am an Engineering student at the University of Waterloo.
            I have a passion for building things, solving problems, and continuously improving myself.
          </p>
          <p>
            💯 My mission is to create tools that help others better their lives. 
            I am motivated by working on products that truly push the boundaries of technology, 
            are innovative, and help us humans understand the world better and improve ourselves.
          </p>
          <p>
            
          </p>
          <p>
            🏋️‍♂️ I am dedicated to continuous self-improvement and maintaining my health,
            as I believe a healthy body supports a healthy mind.
          </p>
          <p>
            💻 I am currently looking for New Grad positions, 
            and I have previously Interned at Capital One, theScore, Geotab, Toyota, and Thomson Reuters.
          </p>
          <p>☕️ Reach out if you want to have a chat!</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
