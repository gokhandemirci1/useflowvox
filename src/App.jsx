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
import SEO from './components/SEO'

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
                <SEO
                  title="FlowVox AI - Shape the Future with Artificial Intelligence"
                  description="Transform your business with innovative AI solutions, natural language processing, data analytics, automation systems, and custom software development. Leading AI company in Turkey."
                  keywords="artificial intelligence, AI solutions, machine learning, NLP, natural language processing, data analytics, automation, custom software development, AI consulting, digital transformation, FlowVox, AI Turkey, Izmir AI"
                />
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
                <SEO
                  title="Contact FlowVox AI - Schedule a Meeting with Our Sales Team"
                  description="Schedule a meeting with FlowVox AI sales team. Get in touch to learn how our AI solutions can transform your business. Contact us today."
                  keywords="contact FlowVox AI, schedule meeting, AI consultation, FlowVox contact, AI services inquiry"
                />
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




