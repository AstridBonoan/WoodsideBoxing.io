import { useEffect, useState } from 'react'

export type AppPage = 'home' | 'merchandise' | 'cart'

const SHOP_HASHES = new Set(['merchandise', 'cart'])

function getPageFromHash(): AppPage {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'merchandise') return 'merchandise'
  if (hash === 'cart') return 'cart'
  return 'home'
}

function getSectionHash(): string | null {
  const hash = window.location.hash.replace('#', '')
  if (!hash || SHOP_HASHES.has(hash)) return null
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
