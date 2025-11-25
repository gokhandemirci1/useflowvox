import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = process.env.VITE_GA_MEASUREMENT_ID || 'G-Q8FN21CZH9'

// Google Analytics'i yükle
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    // Google Analytics script'ini ekle
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `
    document.head.appendChild(script2)
  }
}

// Sayfa görüntüleme takibi
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    })
  }
}

// Event takibi
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// React Router ile otomatik sayfa takibi
export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      trackPageView(location.pathname + location.search)
    }
  }, [location])
}

