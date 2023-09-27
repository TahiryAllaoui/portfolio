import '../style/App.scss'
import About from './About'
import Header from './Header'
import Project from './Project'
import Skills from './Skills'

function App() {

  return (
    <div className='app'>
      <div className="line"></div>
      <Header />
      <About />
      <Skills />
      <Project />
    </div>
  )
}

export default App
