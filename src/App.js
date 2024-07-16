import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbars'
import Home from './Home'
import Booknow from './Booknow'
import Ourcars from './Ourcars'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='book' element={<Booknow/>}/>
          <Route path='cars' element={<Ourcars/>}/>
          <Route path='about' element={<Aboutus/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    
    </div>
  )
}

export default App