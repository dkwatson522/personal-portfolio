import React from "react";
import "./footer.css";
import myLogo from "../../assets/dw_logo_2.jpg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <img src={myLogo} alt="logo" />
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
