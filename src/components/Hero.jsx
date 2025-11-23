import React, { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const starsRef = useRef(null)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const createStars = () => {
      if (!starsRef.current) return
      
      const stars = starsRef.current
      stars.innerHTML = ''
      
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div')
        star.className = 'star'
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.width = `${Math.random() * 3 + 1}px`
        star.style.height = star.style.width
        star.style.animationDelay = `${Math.random() * 3}s`
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`)
        stars.appendChild(star)
      }
    }
    
    createStars()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-space-darker via-space-dark to-space-darker"
    >
      {/* Animated Stars Background */}
      <div ref={starsRef} className="stars absolute inset-0"></div>

      {/* Nebula Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            {/* Logo */}
            {!logoError && (
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  {/* Animated glow rings */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-cyan-500/40 rounded-full blur-2xl animate-pulse group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* Logo with modern effects */}
                  <div className="relative">
                    <img 
                      src="/images/logo.jpeg" 
                      alt="FlowVox AI Logo" 
                      className="h-32 md:h-40 lg:h-48 w-auto relative z-10 drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] brightness-110 contrast-110 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_40px_rgba(147,51,234,1)]"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.4)) drop-shadow(0 0 60px rgba(6, 182, 212, 0.3))',
                      }}
                      onError={() => setLogoError(true)}
                    />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            )}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {logoError && (
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block mb-4">
                  FlowVox AI
                </span>
              )}
              <span className="text-white drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]">
                Shape the Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We take your business to the next level with artificial intelligence technologies.
              <br />
              <span className="text-cyan-400">Innovative solutions</span>, <span className="text-purple-400">smart systems</span>, <span className="text-pink-400">unlimited potential</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('services')}
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 animate-glow"
            >
              <span className="relative z-10">Discover What We Do</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-purple-500 hover:bg-purple-500/20 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
            >
              About Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
