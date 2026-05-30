import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Programs } from './components/Programs'
import { Coaches } from './components/Coaches'
import { Training } from './components/Training'
import { Community } from './components/Community'
import { Schedule } from './components/Schedule'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Merchandise } from './components/Merchandise'
import { CartPage } from './components/CartPage'
import { SignInPage } from './components/SignInPage'
import { SignUpPage } from './components/SignUpPage'
import { CartProvider } from './context/CartContext'
import { useHashPage } from './hooks/useHashPage'
import { Watermark } from './components/Watermark'

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Programs />
        <Coaches />
        <Training />
        <Community />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function AppContent() {
  const page = useHashPage()

  return (
    <>
      <Navbar />
      {page === 'merchandise' && <Merchandise />}
      {page === 'cart' && <CartPage />}
      {page === 'signin' && <SignInPage />}
      {page === 'signup' && <SignUpPage />}
      {page === 'home' && <HomePage />}
      <Watermark />
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
