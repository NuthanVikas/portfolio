import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'

/**
 * App component: wires global layout + all sections so the page reads top to bottom.
 */
const App = () => (
  <div className="min-h-screen bg-dark text-white">
    <Navbar />
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
    <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} Nuthan Vikas — Designed with React & Tailwind CSS
    </footer>
  </div>
)

export default App
