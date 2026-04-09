import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = ['Nosotros', 'Servicios', 'Galería', 'Testimonios', 'Contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-'))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-mist' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col leading-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-display text-xl tracking-[0.12em] text-ink">MAISON PRIVÉ</span>
            <span className="text-[9px] tracking-widest2 text-slate font-light uppercase mt-0.5">Événements Exclusifs</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-[11px] tracking-widest uppercase font-light text-charcoal hover:text-ink transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-ink transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollTo('Contacto')}
              className="ml-4 text-[10px] tracking-widest2 uppercase font-light px-6 py-2.5 border border-ink text-ink hover:bg-ink hover:text-white transition-all duration-500"
            >
              Membresía
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X strokeWidth={1} size={22} /> : <Menu strokeWidth={1} size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link)}
                className="font-display text-3xl text-ink italic"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
