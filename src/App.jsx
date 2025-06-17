import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'// includes carousel JS
import ProjectPage from './components/projectPage'


function App() {


  return (
      <>
        <Navbar />
        <Routes style={{ fontFamily : "PrimerFont" }} className=''>
          <Route path='/' element={ <Home /> } />
          <Route path='/contact' element = { <Contact /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/projects/:id' element={ <ProjectPage /> } />
        </Routes>
      </>

  )
}

export default App
