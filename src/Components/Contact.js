import { MailIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  return (
    <div className="overflow-hidden" id="contact">
      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="sr-only">Contact me</h2>


          <div className="grid grid-cols-1 ">
            {/* Contact information */}
            <div className="relative overflow-hidden py-10 xl:p-12 rounded-lg">
              <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">CONTACT INFORMATION</h2>
              <p className="mt-6 text-base text-gray-300 max-w-3xl">
                If you would like to learn more information about me, please use one of the contacts below!
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-gray-300">
                  <MailIcon className="flex-shrink-0 w-6 h-6 text-yellow-300" aria-hidden="true" />
                  <span className="ml-3">DKWATSON522@GMAIL.COM</span>
                </dd>
              </dl>
              <ul className="mt-8 flex space-x-12">
                <li>
                  <a className="text-yellow-200 hover:text-yellow-100" href="https://www.linkedin.com/in/daniel-watson-mshi/" target="_blank" rel="noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon className="text-3xl text-yellow-300 hover:text-yellow-500" icon={["fab", "linkedin"]} />
                  </a>
                </li>
                <li>
                  <a className="text-yellow-200 hover:text-yellow-100" href="https://github.com/dkwatson522" target="_blank" rel="noreferrer">
                    <span className="sr-only">GitHub</span>
                    <FontAwesomeIcon className="text-3xl text-yellow-300 hover:text-yellow-500" icon={["fab", "github"]} />
                  </a>
                </li>
                <li>
                  <a className="text-yellow-200 hover:text-yellow-100" href="https://twitter.com/_dannykw" target="_blank" rel="noreferrer">
                    <span className="sr-only">Twitter</span>
                    <FontAwesomeIcon className="text-3xl text-yellow-300 hover:text-yellow-500" icon={["fab", "twitter"]} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
