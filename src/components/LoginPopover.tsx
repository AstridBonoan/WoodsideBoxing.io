import { AuthSwitchLink } from './AuthForm'

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

export function LoginPopover() {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-label="Account"
        aria-haspopup="true"
        className="flex h-10 w-10 items-center justify-center rounded-sm text-white/85 transition-colors hover:bg-white/10 hover:text-gold"
      >
        <UserIcon />
      </button>

      <div className="pointer-events-none absolute top-full right-0 z-50 w-72 pt-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="rounded-sm border border-white/10 bg-forest-dark p-5 shadow-xl">
          <p className="font-display text-sm font-semibold tracking-wide text-white uppercase">Sign In</p>

          <a
            href="#signin"
            className="mt-4 block w-full rounded-sm bg-forest py-3 text-center text-sm font-semibold tracking-wide text-white transition-colors hover:bg-forest-light"
          >
            Sign In
          </a>

          <AuthSwitchLink prompt="Don't have an account?" href="#signup" label="Sign Up" />
        </div>
      </div>
    </div>
  )
}
