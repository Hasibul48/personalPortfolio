import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Page404 from './Pages/Page404'


function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />

          <Route path='*' element={<Page404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
