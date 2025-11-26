import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { trackEvent } from '../hooks/useAnalytics'

const ContactForm = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    workEmail: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    phoneNumber: '',
    country: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // Sayfa yüklendiğinde formun başına scroll et (App.jsx'teki ScrollToTop ile birlikte)
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 10)
    
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = t.contactForm.errors.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = t.contactForm.errors.emailInvalid
    }
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = t.contactForm.errors.firstNameRequired
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = t.contactForm.errors.lastNameRequired
    }
    
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = t.contactForm.errors.jobTitleRequired
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = t.contactForm.errors.phoneRequired
    }
    
    if (!formData.country.trim()) {
      newErrors.country = t.contactForm.errors.countryRequired
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Google Sheets Web App URL
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxHhXFwv8Chl7DN5AYNhHeA9-ikrbx7bal4vbNWQS2zvWgosCwvdROeHvM72hqTVogKtw/exec'
    
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script için no-cors gerekli
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      // no-cors modunda response okunamaz, bu yüzden direkt başarı kabul ediyoruz
      console.log('Form submitted successfully:', formData)
      
      // Google Analytics event tracking
      trackEvent('form_submit', 'contact', 'contact_form', 1)
      
      setIsSubmitting(false)
      
      // Formu temizle
      setFormData({
        workEmail: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        phoneNumber: '',
        country: ''
      })
      
      // Başarı mesajını göster
      setShowSuccessMessage(true)
      
      // 3 saniye sonra ana sayfaya yönlendir
      setTimeout(() => {
        setShowSuccessMessage(false)
        navigate('/')
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      alert(language === 'en' ? 'An error occurred. Please try again later.' : 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-space-darker via-space-dark to-space-darker relative overflow-hidden py-24">
      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 max-w-md w-full mx-4 border border-green-500/30 shadow-2xl transform transition-all animate-scaleIn">
            <div className="text-center">
              {/* Success Icon */}
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mb-6">
                <svg
                  className="h-10 w-10 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              
              {/* Success Message */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'en' ? 'Success!' : 'Başarılı!'}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {t.contactForm.successMessage}
              </p>
              
              {/* Loading indicator */}
              <div className="flex justify-center">
                <div className="w-12 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-500/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {t.contactForm.title}
              </span>
            </h1>
            <p className="text-gray-300">
              {t.contactForm.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.contactForm.firstName} <span className="text-red-400">{t.contactForm.required}</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.firstName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-purple-500/30 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                  placeholder={t.contactForm.firstNamePlaceholder}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.contactForm.lastName} <span className="text-red-400">{t.contactForm.required}</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.lastName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-purple-500/30 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                  placeholder={t.contactForm.lastNamePlaceholder}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium text-gray-300 mb-2">
                {t.contactForm.workEmail} <span className="text-red-400">{t.contactForm.required}</span>
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.workEmail
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-purple-500/30 focus:ring-purple-500 focus:border-purple-500'
                }`}
                placeholder={t.contactForm.emailPlaceholder}
              />
              {errors.workEmail && (
                <p className="mt-1 text-sm text-red-400">{errors.workEmail}</p>
              )}
            </div>

            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300 mb-2">
                {t.contactForm.jobTitle} <span className="text-red-400">{t.contactForm.required}</span>
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.jobTitle
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-purple-500/30 focus:ring-purple-500 focus:border-purple-500'
                }`}
                placeholder={t.contactForm.jobTitlePlaceholder}
              />
              {errors.jobTitle && (
                <p className="mt-1 text-sm text-red-400">{errors.jobTitle}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                {t.contactForm.phoneNumber} <span className="text-red-400">{t.contactForm.required}</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phoneNumber
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-purple-500/30 focus:ring-purple-500 focus:border-purple-500'
                }`}
                placeholder={t.contactForm.phonePlaceholder}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-400">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                {t.contactForm.country} <span className="text-red-400">{t.contactForm.required}</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.country
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-purple-500/30 focus:ring-purple-500 focus:border-purple-500'
                }`}
                placeholder={t.contactForm.countryPlaceholder}
              />
              {errors.country && (
                <p className="mt-1 text-sm text-red-400">{errors.country}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="relative z-10">
                  {isSubmitting ? t.contactForm.submitting : t.contactForm.submit}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-purple-500 hover:bg-purple-500/20 transition-all transform hover:scale-105"
              >
                {t.contactForm.cancel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

