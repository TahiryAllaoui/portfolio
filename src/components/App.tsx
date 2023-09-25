import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../style/App.scss'
import Header from './Header'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/projects' element={<></>} />
          <Route path='/contact' element={<></>} />
          <Route path='/hiring' element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
