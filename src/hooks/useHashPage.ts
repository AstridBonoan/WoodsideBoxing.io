import { useEffect, useState } from 'react'

export type AppPage = 'home' | 'merchandise' | 'cart' | 'signin' | 'signup'

const ROUTE_HASHES = new Set(['merchandise', 'cart', 'signin', 'signup', 'login'])

function getPageFromHash(): AppPage {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'merchandise') return 'merchandise'
  if (hash === 'cart') return 'cart'
  if (hash === 'signin' || hash === 'login') return 'signin'
  if (hash === 'signup') return 'signup'
  return 'home'
}

function getSectionHash(): string | null {
  const hash = window.location.hash.replace('#', '')
  if (!hash || ROUTE_HASHES.has(hash)) return null
  return hash
}

function scrollToSection(id: string) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

export function useHashPage() {
  const [page, setPage] = useState<AppPage>(getPageFromHash)
  const [sectionHash, setSectionHash] = useState<string | null>(getSectionHash)

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash())
      setSectionHash(getSectionHash())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (page !== 'home' || !sectionHash) return
    scrollToSection(sectionHash)
  }, [page, sectionHash])

  return page
}
