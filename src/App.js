import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faGithub, faLinkedin)

function App() {
  return (
    <>
      <Navbar/>
      <Container/>
    </>
  )
}

export default App;
