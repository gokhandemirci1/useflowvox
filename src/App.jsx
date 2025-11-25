import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Services />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactForm />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </LanguageProvider>
  )
}

export default App




