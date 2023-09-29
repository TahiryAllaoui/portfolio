import '../style/App.scss'
import About from './About'
import Header from './Header'
import Project from './Project'
import Skills from './Skills'

function App() {
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      else {
        entry.target.classList.remove('show');
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((elmts) => observer.observe(elmts));

  return (
    <div className='app'>
      <div className="line"></div>
      <Header />
      <About className='hidden' />
      <Skills className='hidden' />
      <Project className='hidden' />
    </div>
  )
}

export default App
