// import { CameraIcon } from '@heroicons/react/solid'

export default function About() {
  return (
    <div className="overflow-hidden" id="about">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">Meet the Developer</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Daniel Watson
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
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
                  {/*<figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2">Photograph by Marcus O’Leary</span>
                  </figcaption>*/}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-300">
                Hello, my name is Daniel Watson and I am a full-stack software engineer.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                I enjoy building projects and exploring the many tasks that coding makes possible.
              </p>
              <p>
                My interest in coding initially came out of curiousity of how applications and web pages are built. What I soon learned is that this curiousity woud be a valuable tool in continuously wanting to learn more once I was exposed to just the tip of the iceberg.
              </p>
              <p className="">
                <img
                  className="my-2 mx-auto rounded-md shadow-lg object-cover object-center w-64 h-40"
                  src="../../iceberg.jpeg"
                  alt=""
                  width={1184}
                  height={1376}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
