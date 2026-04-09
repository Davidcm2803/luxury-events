import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=90"
          alt="Luxury event gala"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent" />
      </div>

      {/* Decorative top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px bg-white/20"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[10px] tracking-widest3 uppercase text-white/60 font-light mb-6"
          >
            Paris · London · Dubai · Miami
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            El Arte de lo<br />
            <em>Extraordinario</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="text-white/70 font-light text-base lg:text-lg leading-relaxed mb-10 max-w-xl tracking-wide"
          >
            Diseñamos experiencias donde cada detalle es una obra maestra. Eventos privados para quienes exigen lo inigualable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="flex flex-wrap items-center gap-5"
          >
            <button
              onClick={scrollToContact}
              className="group relative text-[11px] tracking-widest2 uppercase font-light px-8 py-4 bg-white text-ink overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="absolute inset-0 bg-ink transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Solicitar Membresía</span>
            </button>
            <button
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[11px] tracking-widest2 uppercase font-light text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-3"
            >
              Descubrir más
              <span className="w-8 h-px bg-white/50 inline-block" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 right-16 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-widest3 uppercase text-white/40 rotate-90 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown strokeWidth={1} size={16} className="text-white/40" />
        </motion.div>
      </motion.div>

      {/* Year stamp */}
      <div className="absolute top-28 right-16 hidden lg:block">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[10px] tracking-widest2 text-white/30 font-light"
        >
          Est. 2009
        </motion.span>
      </div>
    </section>
  )
}
