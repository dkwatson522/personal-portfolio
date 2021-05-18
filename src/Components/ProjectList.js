
// import { GlobeIcon } from '@heroicons/react/solid'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './Project'

const projects = [
  {
    title: 'Dunder Mifflin Employee Portal',
    stack: 'Full-stack web application utilizing Ruby, Ruby on Rails, React and PostgreSQL to mock an employee portal.',
    tools: ['Ruby','Ruby on Rails','PostgreSQL', 'React'],
    gitCode: 'https://github.com/dkwatson522/dunder_mifflin_employee_portal',
    siteURL: 'https://stark-mountain-68376.herokuapp.com/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792087/Portfolio/Screen_Shot_2021-05-07_at_7.24.27_AM_vcozco.png',
  },
  {
    title: 'Sugar Spell Mock Website',
    stack: 'Full-stack web application that makes use of NodeJS, Express and MongoDB to showcase a treats business.',
    tools: ['Javascript','NodeJS', 'Express', 'MongoDB','JQuery'],
    gitCode: 'https://github.com/dkwatson522/sugar-spells',
    siteURL: 'https://www.sugar-spell.com/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792087/Portfolio/Screen_Shot_2021-05-07_at_8.23.21_AM_vwnapj.png',
  },
  {
    title: 'Media Quiz',
    stack: 'Web application that utilizes API calls to create dynamic quizzes based trending topics in entertainment.',
    tools: ['Javascript','JQuery'],
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
        <div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div>
            <div>
              <h3 className="my-2 text-base text-yellow-300 font-semibold tracking-wide uppercase">
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
