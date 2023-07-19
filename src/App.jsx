import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Ellipse1 from './components/Ellipse1/Ellipse1'
import Ellipse2 from './components/Ellipse2/Ellipse2'
import HomeView from './views/HomeView'
import { Routes, Route } from 'react-router-dom'
import AboutView from './views/About/AboutView'
import SkillsView from './views/Skills/SkillsView'
import ContactView from './views/Contact/ContactView'


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomeView/>}></Route>
      <Route path='/about' element={<AboutView/>}></Route>
      <Route path="/skills" element={<SkillsView/>}></Route>
      <Route path="/contact" element={<ContactView/>}></Route>
    </Routes>
    <Ellipse1></Ellipse1>
    </>
  )
}

export default App
