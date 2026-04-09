import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Maison Privé no organizó un evento. Convirtió la noche de nuestra boda en el capítulo más hermoso de nuestra historia. Cada detalle respiraba elegancia y amor.',
    author: 'Isabella & Alejandro Montoya',
    role: 'Dubai, 2023',
  },
  {
    quote: 'He asistido a los eventos más exclusivos del mundo, pero lo que Maison Privé creó para nuestra Gala Anual superó todas mis expectativas. Incomparable.',
    author: 'Philippe Durrand',
    role: 'Presidente, Maison Dior Heritage',
  },
  {
    quote: 'El lanzamiento de nuestra nueva colección en Roma fue un éxito absoluto. Los editores de moda aún hablan de ello. Maison Privé entiende el lujo de una manera que pocos logran.',
    author: 'Sofia Valentini',
    role: 'Creative Director, House of Valentini',
  },
  {
    quote: 'La meticulosidad con la que gestionan cada aspecto es simplemente extraordinaria. Llevan quince años siendo nuestra elección para cada evento relevante.',
    author: 'James & Margaret Ashford',
    role: 'Londres, Familia Ashford',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="testimonios" className="py-32 lg:py-44 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div ref={ref} className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Label Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[10px] tracking-widest3 uppercase text-white/40 font-light">Testimonios</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-white">
              Lo que<br />dicen<br /><em>nuestros<br />clientes</em>
            </h2>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-300"
              >
                <ChevronLeft strokeWidth={1} size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-300"
              >
                <ChevronRight strokeWidth={1} size={18} />
              </button>
              <span className="text-white/30 text-sm font-light ml-2">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Quote Column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-8 lg:col-start-5 relative min-h-[260px] flex flex-col justify-center"
          >
            {/* Large Quote Mark */}
            <span className="absolute -top-4 -left-4 font-display text-[120px] text-white/5 leading-none select-none">"</span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-display text-xl lg:text-2xl xl:text-3xl text-white/90 italic leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-white/30" />
                  <div>
                    <p className="text-white font-light tracking-wide text-sm">{testimonials[current].author}</p>
                    <p className="text-white/40 text-xs tracking-widest mt-0.5 uppercase font-light">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Line */}
            <div className="mt-10 w-full h-px bg-white/10 relative overflow-hidden">
              <motion.div
                key={current}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="absolute inset-y-0 left-0 bg-white/40"
                onAnimationComplete={next}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
