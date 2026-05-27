import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { PRODUCTS } from '../data/merchandise'
import { Footer } from './Footer'
import { SectionHeader } from './SectionHeader'

function ProductImages({ primary, secondary, alt }: { primary: string; secondary: string; alt: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-forest-dark/40">
      <img src={primary} alt={alt} className="h-full w-full object-cover object-top transition-opacity duration-300 group-hover:opacity-0" />
      <img
        src={secondary}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  )
}

export function Merchandise() {
  const { addItem } = useCart()
  const [tankVariant, setTankVariant] = useState<(typeof PRODUCTS.tank.variants)[number]['id']>('tank-grey-green')

  const selectedTank =
    PRODUCTS.tank.variants.find((variant) => variant.id === tankVariant) ?? PRODUCTS.tank.variants[0]
  const otherTank =
    PRODUCTS.tank.variants.find((variant) => variant.id !== tankVariant) ?? PRODUCTS.tank.variants[1]

  return (
    <>
      <main className="min-h-screen bg-charcoal pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            label="Shop"
            title="Merchandise"
            description="Rep the gym. Limited items available in-house."
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            <article className="group overflow-hidden rounded-sm border border-white/10 bg-matte">
              <ProductImages
                primary={PRODUCTS.hoodie.images[0]}
                secondary={PRODUCTS.hoodie.images[1]}
                alt={PRODUCTS.hoodie.name}
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-wide text-white uppercase">
                    {PRODUCTS.hoodie.name}
                  </h3>
                  <p className="font-display text-2xl font-bold text-gold">${PRODUCTS.hoodie.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      id: 'hoodie',
                      name: PRODUCTS.hoodie.name,
                      price: PRODUCTS.hoodie.price,
                      image: PRODUCTS.hoodie.images[0],
                    })
                  }
                  className="mt-4 w-full rounded-sm bg-forest py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-forest-light"
                >
                  Add to Cart
                </button>
              </div>
            </article>

            <article className="group overflow-hidden rounded-sm border border-white/10 bg-matte">
              <ProductImages
                primary={selectedTank.image}
                secondary={otherTank.image}
                alt={`${PRODUCTS.tank.name} — ${selectedTank.label}`}
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-wide text-white uppercase">
                    {PRODUCTS.tank.name}
                  </h3>
                  <p className="font-display text-2xl font-bold text-gold">${PRODUCTS.tank.price}</p>
                </div>
                <fieldset className="mt-4">
                  <legend className="sr-only">Color</legend>
                  <div className="flex gap-2">
                    {PRODUCTS.tank.variants.map((variant) => (
                      <button
                        key={variant.id}
                        type="button"
                        onClick={() => setTankVariant(variant.id)}
                        className={`rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors ${
                          tankVariant === variant.id
                            ? 'border-forest-light bg-forest/30 text-white'
                            : 'border-white/20 text-white/70 hover:border-white/40'
                        }`}
                      >
                        {variant.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      id: selectedTank.id,
                      name: PRODUCTS.tank.name,
                      variant: selectedTank.label,
                      price: PRODUCTS.tank.price,
                      image: selectedTank.image,
                    })
                  }
                  className="mt-4 w-full rounded-sm bg-forest py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-forest-light"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
