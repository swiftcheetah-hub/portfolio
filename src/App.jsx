import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Properties from './components/Properties'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Booking from './components/Booking'
import Contact from './components/Contact'
import PropertyDetails from './components/PropertyDetails'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar scrollY={scrollY} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Properties />
      <Reviews />
      <Gallery />
      <Blog />
      <Booking />
      <Contact />
    </>
  )
}

export default App

