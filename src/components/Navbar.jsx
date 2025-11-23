import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-space-dark/95 backdrop-blur-md shadow-lg border-b border-purple-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {!logoError ? (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50 blur-xl rounded-full opacity-75"></div>
                <img 
                  src="/images/logo.jpeg" 
                  alt="FlowVox AI Logo" 
                  className="h-[75px] w-[75px] rounded-full relative z-10 drop-shadow-[0_0_15px_rgba(147,51,234,0.6)] brightness-110 contrast-110 object-cover"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5)) drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))',
                  }}
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                FlowVox AI
              </h1>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all font-medium shadow-lg shadow-purple-500/30"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-space-dark/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-purple-500/20">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all text-center"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
