import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/site'
import { Logo } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/30 bg-forest-dark">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="shrink-0">
          <Logo size="sm" />
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#2a1f14]/90 transition-colors hover:text-[#1a1208] hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#programs"
          className="hidden rounded-sm bg-forest px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-forest-light lg:inline-block"
        >
          Join the Gym
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-forest/30 bg-forest-dark lg:hidden">
          <ul className="flex flex-col px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-base font-medium text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#programs"
                className="block rounded-sm bg-forest py-3 text-center font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Join the Gym
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
