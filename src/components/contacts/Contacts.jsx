import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dkwatson522@gmail.com</h5>
            <a href="mailto:dkwatson522@gmail.com">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
