import { IMAGES } from '../data/assets'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const heights = {
  sm: 'h-10',
  md: 'h-14',
  lg: 'h-24',
} as const

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <img
      src={IMAGES.logo}
      alt="Woodside Boxing Academy"
      className={`${heights[size]} w-auto object-contain ${className}`}
    />
  )
}
