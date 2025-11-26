import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const SEO = ({ title, description, keywords }) => {
  const location = useLocation()
  const { language } = useLanguage()
  const baseUrl = 'https://useflowvox.com'
  const currentUrl = `${baseUrl}${location.pathname}`

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)

    // Update Open Graph URL
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', currentUrl)
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title)
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description)
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title)
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description)
    }
  }, [title, description, keywords, currentUrl])

  return null
}

export default SEO

