type SectionHeaderProps = {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">{label}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl">{title}</h2>
      <div className={`mt-2 h-1 w-16 bg-forest-light ${centered ? 'mx-auto' : ''}`} />
      {description && <p className="mt-3 text-sm text-white/65 sm:text-base">{description}</p>}
    </div>
  )
}
