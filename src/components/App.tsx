import { useState } from 'react'
import '../style/App.scss'
import About from './About'
import Header from './Header'
import Project from './Project'
import Skills from './Skills'

function App() {
  const [nameClass, setNameClass] = useState('');
  setTimeout(() => {
    setNameClass('hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
  }, 10)
  

  return (
    <div className='app'>
      <div className="line"></div>
      <Header />
      <About className={nameClass} />
      <Skills className={nameClass}  />
      <Project className={nameClass}  />
    </div>
  )
}

export default App
