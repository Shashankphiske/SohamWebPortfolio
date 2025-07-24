import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'// includes carousel JS
import ProjectPage from './components/projectPage'
import ScrollToTop from './components/ScrollToTop'
import Portfolio from './components/Portfolio'


function App() {


  return (
      <>
        <Navbar />
        <ScrollToTop />
        <Routes style={{ fontFamily : "PrimerFont" }} className=''>
          <Route path='/' element={ <Home /> } />
          <Route path='/contact' element = { <Contact /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/projects/:id' element={ <ProjectPage /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
        </Routes>
      </>

  )
}

export default App
