import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function About() {
  return (
    <div className="overflow-hidden" id="about" layout>
      <div className="relative max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
        <div
          className="flex justify-center mx-auto text-base max-w-prose lg:gap-8 lg:max-w-none"
        >
          <div>
            <h2
              className="text-base text-yellow-300 font-semibold tracking-tight uppercase text-gray-900 sm:text-4xl"

            >
              Daniel Watson
            </h2>
          </div>
        </div >
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div
              className="relative text-base mx-auto max-w-prose lg:max-w-none"
            >
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://res.cloudinary.com/dpwmzblvv/image/upload/v1621222397/Portfolio/0X8A7900_lcpix0.jpg"
                    alt=""
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
            <div className="mx-auto flex justify-center mt-2">
              <FontAwesomeIcon className="text-9xl text-yellow-300 text-center" icon={["fas", "laptop-code"]} />
            </div>

          </div>
          <div className="mt-8 lg:mt-0 px-2">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-300">
                Hello! I'm Daniel Watson, a passionate full-stack software engineer.
              </p>
            </div>
            <div className="mt-5 max-w-prose text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                I thrive on the challenge and creativity that come with building diverse projects through coding. My journey into the world of software development was sparked by a deep curiosity about the inner workings of applications and web pages. This curiosity transformed into a powerful driving force, propelling me to delve deeper and continuously expand my knowledge in the field.
              </p>
              <p>
                As I navigate this ever-evolving landscape, I eagerly anticipate the opportunities to collaborate with other seasoned software engineers. I believe that teamwork not only accelerates personal growth but also leads to the creation of more innovative and robust solutions.
              </p>
              <p>
                I look forward to contributing my skills and learning from the collective wisdom of the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
