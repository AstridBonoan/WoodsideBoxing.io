import { useEffect, useState } from 'react'

export type AppPage = 'home' | 'merchandise' | 'cart'

function getPageFromHash(): AppPage {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'merchandise') return 'merchandise'
  if (hash === 'cart') return 'cart'
  return 'home'
}

export function useHashPage() {
  const [page, setPage] = useState<AppPage>(getPageFromHash)

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return page
}
