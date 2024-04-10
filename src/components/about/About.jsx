import React from "react";
import "./about.css";
import myImage from "../../assets/profile_pic_0.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <LiaSchoolSolid className="about__icon" />
              <h5>Bootcamps</h5>
              <small>
                <ul>
                  <li>
                    <span className="about__card__title">
                      All Aboard Bootcamp
                    </span>
                    <span className="about__card__description">
                      Gained expertise in Ruby, Ruby on Rails, SQLite,
                      JavaScript, HTML, and CSS.
                    </span>
                  </li>
                  <li>
                    <span className="about__card__title">General Assembly</span>
                    <span className="about__card__description">
                      Mastered JavaScript essentials: OOP, DOM manipulation, API
                      communication, and jQuery.
                    </span>
                  </li>
                </ul>
              </small>
            </article>
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degrees</h5>
              <small>
                <ul>
                  <li>
                    <span className="about__card__title">
                      Master of Science Health Informatics
                    </span>
                    <span className="about__card__description">
                      Brandeis University
                    </span>
                  </li>
                  <li>
                    <span className="about__card__title">
                      Bachelor of Arts Sociology
                    </span>
                    <span className="about__card__description">
                      CUNY Queens College
                    </span>
                  </li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a passionate <b>backend engineer</b>. I thrive on the challenge
            and creativity that come with building diverse projects through
            coding. My journey into the world of software development was
            sparked by a deep curiosity about the inner workings of applications
            and web pages. This curiosity transformed into a powerful driving
            force, propelling me to delve deeper and continuously expand my
            knowledge in the field. As I navigate this ever-evolving landscape,
            I eagerly anticipate the opportunities to collaborate with other
            seasoned software engineers. I believe that teamwork not only
            accelerates personal growth but also leads to the creation of more
            innovative and robust solutions. I look forward to contributing my
            skills and learning from the collective wisdom of the community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
