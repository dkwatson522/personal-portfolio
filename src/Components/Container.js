import About from './About'
import Project from './Project'
import Contact from './Contact'
/* This example requires Tailwind CSS v2.0+ */
export default function Container() {
  return (
    <div className="bg-gray-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-500 rounded-md">
        <About/>
        <Project/>
        <Contact/>
      </div>
    </div>
  )
}
