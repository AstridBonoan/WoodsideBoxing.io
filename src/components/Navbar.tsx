import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { NAV_ACTIONS, NAV_LINKS } from '../data/site'
import { Logo } from './Logo'

function UserIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { count: cartCount } = useCart()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/30 bg-forest-dark">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="shrink-0">
          <Logo size="sm" />
        </a>

        <ul className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/85 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={NAV_ACTIONS.login.href}
            aria-label={NAV_ACTIONS.login.label}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-white/85 transition-colors hover:bg-white/10 hover:text-gold"
          >
            <UserIcon />
          </a>
          <a
            href={NAV_ACTIONS.cart.href}
            aria-label={`${NAV_ACTIONS.cart.label} (${cartCount} items)`}
            className="relative flex h-10 w-10 items-center justify-center rounded-sm text-white/85 transition-colors hover:bg-white/10 hover:text-gold"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-charcoal">
                {cartCount}
              </span>
            )}
          </a>
          <a
            href="#programs"
            className="rounded-sm bg-forest px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-forest-light"
          >
            Join the Gym
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 lg:ml-0 lg:hidden"
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
            <li className="flex items-center gap-4 border-t border-white/10 pt-4">
              <a
                href={NAV_ACTIONS.login.href}
                aria-label={NAV_ACTIONS.login.label}
                className="flex items-center gap-2 text-white/90"
                onClick={() => setOpen(false)}
              >
                <UserIcon />
                <span>{NAV_ACTIONS.login.label}</span>
              </a>
              <a
                href={NAV_ACTIONS.cart.href}
                aria-label={`${NAV_ACTIONS.cart.label} (${cartCount} items)`}
                className="relative flex items-center gap-2 text-white/90"
                onClick={() => setOpen(false)}
              >
                <CartIcon />
                <span>{NAV_ACTIONS.cart.label}</span>
                {cartCount > 0 && (
                  <span className="rounded-full bg-gold px-1.5 py-0.5 text-xs font-bold text-charcoal">
                    {cartCount}
                  </span>
                )}
              </a>
            </li>
            <li className="pt-4">
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
