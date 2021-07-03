import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"


export default function About() {
  return (
    <motion.div className="overflow-hidden" id="about" layout>
      <div className="relative max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
        <motion.div
          className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
          animate={{ x: 200 }}
          transition={{
            x: { type: "spring", stiffness: 200 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 350 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div>
            <motion.h2
              className="text-base text-yellow-300 font-semibold tracking-tight uppercase text-gray-900 sm:text-4xl"
              
            >
              Daniel Watson
            </motion.h2>
          </div>
        </motion.div >
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <motion.div
              animate={{ scale: 1.0 }}
              transition={{ duration: 0.5 }}
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
            </motion.div>
            <div className="mx-auto flex justify-center mt-2">
              <FontAwesomeIcon className="text-9xl text-yellow-300 text-center" icon={["fas", "laptop-code"]} />
            </div>

          </div>
          <div className="mt-8 lg:mt-0 px-2">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-300">
                Hello, my name is Daniel Watson and I am a full-stack software engineer.
              </p>
            </div>
            <div className="mt-5 max-w-prose text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                I enjoy building projects and exploring the many tasks that coding makes possible.
              </p>
              <p>
                My interest in coding initially came out of curiousity of how applications and web pages were built. I soon learned that this curiousity woud be a valuable tool in continuously wanting to learn more once I was exposed to coding. I look forward to working collaboritively and gaining knowledge from other experienced software engineers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
