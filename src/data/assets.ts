const base = import.meta.env.BASE_URL
const v = '?v=2'

export const IMAGES = {
  logo: `${base}images/logo.png`,
  sparring: `${base}images/sparring.jpg`,
  exterior: `${base}images/gym-exterior.jpg`,
  introToBoxing: `${base}images/intro-to-boxing.jpg`,
  membership: {
    logo: `${base}images/logo.png`,
    sparring: `${base}images/amateur-fighter.jpg`,
    intro: `${base}images/intro-to-boxing.jpg`,
  },
  coaches: {
    'charlie-joseph': `${base}images/coaches/charlie-joseph.png${v}`,
    'manuel-calderon': `${base}images/coaches/manuel-calderon.png${v}`,
    'josh-bungalso': `${base}images/coaches/josh-bungalso.png${v}`,
    edgar: `${base}images/coaches/edgar.png${v}`,
    'frank-castillo-portrait': `${base}images/coaches/frank-castillo-portrait.png${v}`,
    'abel-gonzalez': `${base}images/coaches/abel-gonzalez.png${v}`,
  },
} as const
