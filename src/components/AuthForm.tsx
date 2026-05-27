type AuthFieldProps = {
  id: string
  label: string
  type?: string
  autoComplete?: string
}

export function AuthField({ id, label, type = 'text', autoComplete }: AuthFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium tracking-wide text-white/70 uppercase">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        className="w-full rounded-sm border border-white/15 bg-charcoal px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-forest-light focus:outline-none"
      />
    </div>
  )
}

export function AuthSubmit({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="w-full rounded-sm bg-forest py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-forest-light"
    >
      {label}
    </button>
  )
}

export function AuthSwitchLink({ prompt, href, label }: { prompt: string; href: string; label: string }) {
  return (
    <p className="border-t border-white/10 pt-4 text-center text-sm text-white/60">
      {prompt}{' '}
      <a href={href} className="font-medium text-gold transition-colors hover:text-white">
        {label}
      </a>
    </p>
  )
}
