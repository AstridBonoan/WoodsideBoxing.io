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

function App() {
  return (
    <>
      <Navbar />
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

export default App
