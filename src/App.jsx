import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>
      <div style={{ fontFamily : "PrimerFont" }} className=''>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
