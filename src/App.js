import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './Accueil'
import Footer from './Footer'
import Navbar from './Navbar'
import './App.css'
import NotFound from './errorPages/NotFound'
import ServerError from './errorPages/ServerError'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" Component={Accueil} />
            <Route path="*" Component={NotFound} />
            <Route path="/500" Component={ServerError} />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </div>
  )
}

export default App
