import Accueil from './Accueil'
import Footer from './Footer'
import './App.css'
import LanguageSkill from './LanguageSkill'
import Experiences from './Experiences'
import Infos from './Infos'
import Contact from './Contact'
import Formation from './Formation'
import Portfolio from './Portfolio'
import React from 'react'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <Formation />
      <LanguageSkill />
      <Experiences />
      <Portfolio />
      <Infos />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
