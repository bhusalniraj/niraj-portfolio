import React from 'react'
import Navbar from './components/Navabar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
     
      
    </div>
  )
}
