const base = import.meta.env.BASE_URL

export const IMAGES = {
  logo: `${base}images/logo.png`,
  sparring: `${base}images/sparring.jpg`,
  exterior: `${base}images/gym-exterior.jpg`,
  coaches: {
    'charlie-joseph': `${base}images/coaches/charlie-joseph.png`,
    'manuel-calderon': `${base}images/coaches/manuel-calderon.png`,
    'josh-bungalso': `${base}images/coaches/josh-bungalso.png`,
    edgar: `${base}images/coaches/edgar.png`,
    'frank-castillo': `${base}images/coaches/frank-castillo.png`,
  },
} as const
