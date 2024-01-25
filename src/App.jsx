import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Header from './components/Head/Header'
import Card from './components/Card/Card'
import Addown from './components/Addown/Addown'
import Testimonials from './components/Testimonials/Testimonials'
import Getstarted from './components/getstarted/Getstarted'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Card/>
      <Addown/>
      <Testimonials/>
      <Getstarted/>
      <Footer/>
    </div>
  )
}

export default App
