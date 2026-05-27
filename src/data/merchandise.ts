const base = import.meta.env.BASE_URL

export const MERCH_IMAGES = {
  hoodieWorn: `${base}images/merchandise/hoodie-worn.png`,
  hoodieFlat: `${base}images/merchandise/hoodie-flat.png`,
  tankGreyGreen: `${base}images/merchandise/tank-grey-green.png`,
  tankGreenWhite: `${base}images/merchandise/tank-green-white.png`,
} as const

export const PRODUCTS = {
  hoodie: {
    id: 'hoodie',
    name: 'Hoodie',
    price: 40,
    images: [MERCH_IMAGES.hoodieWorn, MERCH_IMAGES.hoodieFlat] as const,
  },
  tank: {
    id: 'tank',
    name: 'Tank Top',
    price: 25,
    variants: [
      { id: 'tank-grey-green', label: 'Grey/Green', image: MERCH_IMAGES.tankGreyGreen },
      { id: 'tank-green-white', label: 'Green/White', image: MERCH_IMAGES.tankGreenWhite },
    ] as const,
  },
} as const

export type CartLineId = 'hoodie' | 'tank-grey-green' | 'tank-green-white'

export type CartItem = {
  id: CartLineId
  name: string
  variant?: string
  price: number
  quantity: number
  image: string
}
