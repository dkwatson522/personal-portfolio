import About from './About'
import Project from './Project'
/* This example requires Tailwind CSS v2.0+ */
export default function Container() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-3xl mx-auto">
        <About/>
        <Project/>
      </div>
    </div>
  )
}
