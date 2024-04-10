import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio_screenshot.png";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Personal Portfolio</h3>
          <small className="text-light">React</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dkwatson522/dw-movie-guess"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://res.cloudinary.com/dpwmzblvv/image/upload/v1626152583/Portfolio/Screen_Shot_2021-07-13_at_1.02.24_AM_q1jsrc.png"
              alt=""
            />
          </div>
          <h3>Weekly Fitness Tracker</h3>
          <small className="text-light">React</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dkwatson522/rod-get-wright"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://boring-kirch-f1160a.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792087/Portfolio/Screen_Shot_2021-05-07_at_7.24.27_AM_vcozco.png"
              alt=""
            />
          </div>
          <h3>Dunder Mifflin Employee Portal</h3>
          <small className="text-light">
            Ruby on Rails | PostgreSQL | React
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dkwatson522/dunder_mifflin_employee_portal"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            {/* <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792087/Portfolio/Screen_Shot_2021-05-07_at_8.23.21_AM_vwnapj.png"
              alt=""
            />
          </div>
          <h3>Sugar Spell Mock Website</h3>
          <small className="text-light">
            MongoDB | Express | NodeJS | JQuery
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dkwatson522/sugar-spells"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://sugar-spells-nodejs.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792088/Portfolio/Screen_Shot_2021-05-07_at_8.23.53_AM_bvivfr.png"
              alt=""
            />
          </div>
          <h3>Media Quiz</h3>
          <small className="text-light">Javascript | JQuery</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dkwatson522/dw-movie-guess"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://www.mediaguess.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
