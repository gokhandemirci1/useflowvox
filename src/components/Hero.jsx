import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
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
                <div className="relative group cursor-pointer">
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  
                  {/* Orbiting particles container */}
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
                    {/* Outer orbit - Particles */}
                    <div className="absolute" style={{ width: '200px', height: '200px', animation: 'orbit 20s linear infinite' }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/80"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/80"></div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-400/70"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg shadow-pink-400/70"></div>
                    </div>
                    
                    {/* Middle orbit - Particles (reverse) */}
                    <div className="absolute" style={{ width: '160px', height: '160px', animation: 'orbit 15s linear infinite reverse' }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/80"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/80"></div>
                    </div>
                    
                    {/* Inner orbit - Small particles */}
                    <div className="absolute" style={{ width: '130px', height: '130px', animation: 'orbit 25s linear infinite' }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 shadow-lg shadow-purple-300/60"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-pink-300 to-cyan-300 shadow-lg shadow-pink-300/60"></div>
                    </div>
                  </div>
                  
                  {/* Orbiting trace lines - SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" style={{ width: '250px', height: '250px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <defs>
                      <linearGradient id="orbitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="orbitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Outer orbit trace */}
                    <circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="none"
                      stroke="url(#orbitGradient1)"
                      strokeWidth="1"
                      strokeDasharray="8 4"
                      opacity="0.4"
                    />
                    {/* Middle orbit trace */}
                    <circle
                      cx="100"
                      cy="100"
                      r="77"
                      fill="none"
                      stroke="url(#orbitGradient2)"
                      strokeWidth="1"
                      strokeDasharray="8 4"
                      opacity="0.4"
                    />
                    {/* Inner orbit trace */}
                    <circle
                      cx="100"
                      cy="100"
                      r="62"
                      fill="none"
                      stroke="url(#orbitGradient1)"
                      strokeWidth="0.5"
                      strokeDasharray="6 3"
                      opacity="0.3"
                    />
                  </svg>
                  
                  {/* Logo container with modern 3D effect */}
                  <div className="relative transform transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 animate-float">
                    {/* Glass morphism effect */}
                    <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full p-4 md:p-5 lg:p-6 border border-white/20 group-hover:border-white/40 shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-500">
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Logo with modern styling */}
                      <div className="relative z-10">
                        <img 
                          src="/images/logo.jpeg" 
                          alt="FlowVox AI Logo" 
                          className="h-24 md:h-32 lg:h-40 w-24 md:w-32 lg:w-40 rounded-full object-cover transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110 ring-2 ring-white/10 group-hover:ring-white/30"
                          style={{
                            filter: 'drop-shadow(0 8px 32px rgba(147, 51, 234, 0.3)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.2))',
                            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                          }}
                          onError={() => setLogoError(true)}
                        />
                      </div>
                      
                      {/* Animated border rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 group-hover:border-purple-400/50 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                      <div className="absolute inset-0 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-500 scale-125 opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer"></div>
                    </div>
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
                {t.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
              <br />
              <span className="text-cyan-400">{t.hero.innovative}</span>, <span className="text-purple-400">{t.hero.smart}</span>, <span className="text-pink-400">{t.hero.unlimited}</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('services')}
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 animate-glow"
            >
              <span className="relative z-10">{t.hero.discoverButton}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-purple-500 hover:bg-purple-500/20 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
            >
              {t.hero.aboutButton}
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
