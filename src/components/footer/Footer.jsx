import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        DANIEL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/daniel-watson-mshi">
          <BsLinkedin />
        </a>
        <a href="https://github.com/dkwatson522">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Daniel Watson. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
