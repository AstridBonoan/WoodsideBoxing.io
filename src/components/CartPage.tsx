import { useCart } from '../context/CartContext'
import { Footer } from './Footer'
import { SectionHeader } from './SectionHeader'

export function CartPage() {
  const { items, total, count, updateQuantity, removeItem } = useCart()

  return (
    <>
      <main className="min-h-screen bg-charcoal pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader centered label="Shop" title="Cart" description={`${count} item${count === 1 ? '' : 's'}`} />

          {items.length === 0 ? (
            <div className="mt-10 rounded-sm border border-white/10 bg-matte p-8 text-center">
              <p className="text-white/60">Your cart is empty.</p>
              <a
                href="#merchandise"
                className="mt-4 inline-block text-sm font-medium text-gold transition-colors hover:text-white"
              >
                Browse merchandise →
              </a>
            </div>
          ) : (
            <div className="mt-10 space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 rounded-sm border border-white/10 bg-matte p-4 sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-20 shrink-0 rounded-sm object-cover object-top"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold tracking-wide text-white uppercase">
                      {item.name}
                    </h3>
                    {item.variant && <p className="text-sm text-white/60">{item.variant}</p>}
                    <p className="mt-1 font-display text-lg font-bold text-gold">${item.price}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/20 text-white hover:border-gold"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-white">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/20 text-white hover:border-gold"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-white/50 transition-colors hover:text-gold"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <p className="font-display text-xl font-semibold tracking-wide text-white uppercase">Total</p>
                <p className="font-display text-3xl font-bold text-gold">${total.toFixed(2)}</p>
              </div>

              <a
                href="#merchandise"
                className="inline-block text-sm text-white/60 transition-colors hover:text-gold"
              >
                ← Continue shopping
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
