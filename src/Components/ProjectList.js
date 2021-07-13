import Project from './Project'
// import { motion } from "framer-motion"

const projects = [
  {
    title: 'Weekly Fitness Tracker',
    info: 'Frontend Application used to track workouts on a weekly basis to collaborate with others',
    stack: ['Javascript','React'],
    gitCode: 'https://github.com/dkwatson522/rod-get-wright',
    siteURL: 'https://boring-kirch-f1160a.netlify.app/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1626152583/Portfolio/Screen_Shot_2021-07-13_at_1.02.24_AM_q1jsrc.png',
  },
  {
    title: 'Dunder Mifflin Employee Portal',
    info: 'Full-stack web application utilizing Ruby, Ruby on Rails, React and PostgreSQL to mock an employee portal.',
    stack: ['Ruby','Ruby on Rails','PostgreSQL', 'React'],
    gitCode: 'https://github.com/dkwatson522/dunder_mifflin_employee_portal',
    siteURL: 'https://stark-mountain-68376.herokuapp.com/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792087/Portfolio/Screen_Shot_2021-05-07_at_7.24.27_AM_vcozco.png',
  },
  {
    title: 'Sugar Spell Mock Website',
    info: 'Full-stack web application that makes use of NodeJS, Express and MongoDB to showcase a treats business.',
    stack: ['Javascript','NodeJS', 'Express', 'MongoDB','JQuery'],
    gitCode: 'https://github.com/dkwatson522/sugar-spells',
    siteURL: 'https://www.sugar-spell.com/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792087/Portfolio/Screen_Shot_2021-05-07_at_8.23.21_AM_vwnapj.png',
  },
  {
    title: 'Media Quiz',
    info: 'Web application that utilizes API calls to create dynamic quizzes based trending topics in entertainment.',
    stack: ['Javascript','JQuery'],
    gitCode: 'https://github.com/dkwatson522/dw-movie-guess',
    siteURL: 'https://www.mediaguess.com/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792088/Portfolio/Screen_Shot_2021-05-07_at_8.23.53_AM_bvivfr.png',
  }
]

const ProjectList = () => {
  const projectElements = projects.map(project => {
    return <Project key={project.title} {...project} />
  })
  return (
    <>
      <div className="overflow-hidden" id="projects">
        <div className="relative max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex justify-center">
              <h3
                className="my-2 text-base text-yellow-300 font-semibold tracking-wide uppercase text-center"
              >
                Projects
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-6 my-2">
              {projectElements}
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}
export default ProjectList
