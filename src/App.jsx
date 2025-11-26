import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { initGA, usePageTracking } from './hooks/useAnalytics'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

// Route değiştiğinde scroll yap
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  // Google Analytics'i başlat
  useEffect(() => {
    initGA()
  }, [])

  // Sayfa değişikliklerini takip et
  usePageTracking()

  return (
    <LanguageProvider>
      <ScrollToTop />
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




