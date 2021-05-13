import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub)

function App() {
  return (
    <>
      <Navbar/>
      <Container/>
    </>
  )
}

export default App;
