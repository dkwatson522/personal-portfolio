/* This example requires Tailwind CSS v2.0+ */
import { GlobeIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const projects = [
  {
    title: 'Dunder Mifflin Employee Portal',
    stack: 'Full Stack',
    tools: ['Ruby','Ruby on Rails','PostgreSQL', 'React'],
    gitCode: 'https://github.com/dkwatson522/dunder_mifflin_employee_portal',
    siteURL: 'https://stark-mountain-68376.herokuapp.com/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792087/Portfolio/Screen_Shot_2021-05-07_at_7.24.27_AM_vcozco.png',
  },
  {
    title: 'Sugar Spell Mock Website',
    stack: 'Full Stack',
    tools: ['Javascript','NodeJS', 'Express', 'MongoDB','JQuery'],
    gitCode: 'https://github.com/dkwatson522/sugar-spells',
    siteURL: 'https://www.sugar-spell.com/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792087/Portfolio/Screen_Shot_2021-05-07_at_8.23.21_AM_vwnapj.png',
  },
  {
    title: 'Media Quiz',
    stack: 'Front-End',
    tools: ['Javascript','JQuery'],
    gitCode: 'https://github.com/dkwatson522/dw-movie-guess',
    siteURL: 'https://www.mediaguess.com/',
    previewImage:
      'https://res.cloudinary.com/dpwmzblvv/image/upload/v1620792088/Portfolio/Screen_Shot_2021-05-07_at_8.23.53_AM_bvivfr.png',
  }
]

export default function Project() {
  return (
    <>
      <div className="overflow-hidden" id="projects">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="my-2 text-base text-yellow-300 font-semibold tracking-wide uppercase">
              Projects
            </h3>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-6">
              {projects.map((project) => (
                <li
                  key={project.gitCode}
                  className="col-span-1 flex flex-col text-center bg-gray-100 rounded-lg shadow divide-y divide-gray-200"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <a
                    href={project.siteURL}
                    className="flex-1 inline-flex items-center justify-center py-4"
                    target="_blank"
                    rel="noreferrer">
                      <img className="w-64 h-64 flex-shrink-0 mx-auto bg-black rounded-sm object-cover" src={project.previewImage} alt="" />
                    </a>

                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{project.title}</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                      <dt className="sr-only">Stack</dt>
                      <dd className="text-gray-500 text-sm">{project.stack}</dd>
                      <dt className="sr-only">Tools</dt>
                      <dd className="flex flex-row flex-wrap justify-center mt-3 ">
                        {project.tools.map((tool) => (
                          <span className="m-1 px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                            {tool}
                          </span>
                        ))}

                      </dd>
                    </dl>
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                      <div className="w-0 flex-1 flex">
                        <a
                          href={project.gitCode}
                          className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon className="w-5 h-5 text-blue-400" icon={["fab", "github"]} />
                          <span className="ml-3">Link to Github</span>
                        </a>
                      </div>
                      <div className="-ml-px w-0 flex-1 flex">
                        <a
                          href={project.siteURL}
                          className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GlobeIcon className="w-5 h-5 text-green-600" aria-hidden="true" />
                          <span className="ml-3">Link to Site</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </>

  )
}
