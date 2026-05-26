const base = import.meta.env.BASE_URL

export const IMAGES = {
  logo: `${base}images/logo.png`,
  sparring: `${base}images/sparring.jpg`,
  exterior: `${base}images/gym-exterior.jpg`,
} as const
