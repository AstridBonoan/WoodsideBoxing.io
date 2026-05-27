import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { CartItem, CartLineId } from '../data/merchandise'

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: CartLineId) => void
  updateQuantity: (id: CartLineId, quantity: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems((current) => {
      const existing = current.find((line) => line.id === item.id)
      if (existing) {
        return current.map((line) =>
          line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line,
        )
      }
      return [...current, { ...item, quantity: 1 }]
    })
  }

  const removeItem = (id: CartLineId) => {
    setItems((current) => current.filter((line) => line.id !== id))
  }

  const updateQuantity = (id: CartLineId, quantity: number) => {
    if (quantity < 1) {
      removeItem(id)
      return
    }
    setItems((current) =>
      current.map((line) => (line.id === id ? { ...line, quantity } : line)),
    )
  }

  const count = items.reduce((sum, line) => sum + line.quantity, 0)
  const total = items.reduce((sum, line) => sum + line.price * line.quantity, 0)

  const value = useMemo(
    () => ({ items, count, total, addItem, removeItem, updateQuantity }),
    [items, count, total],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
