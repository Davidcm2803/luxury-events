import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="nosotros" className="py-32 lg:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Section Label */}
        <FadeIn className="flex items-center gap-4 mb-20">
          <span className="w-10 h-px bg-mist" />
          <span className="text-[10px] tracking-widest3 uppercase text-slate font-light">Sobre Nosotros</span>
        </FadeIn>

        {/* Asymmetric Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-start">

          {/* Left Column - Large Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <FadeIn>
              <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-ink">
                Donde el<br />
                <em className="text-slate">privilegio</em><br />
                se convierte<br />
                en recuerdo.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15} className="mt-10">
              <div className="w-12 h-px bg-ink" />
            </FadeIn>
          </div>

          {/* Right Column - Editorial Content */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-16">
            <FadeIn delay={0.1}>
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85"
                alt="Fine dining event"
                className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </FadeIn>

            <FadeIn delay={0.2} className="lg:pl-12">
              <p className="text-charcoal font-light leading-loose text-base tracking-wide">
                Maison Privé nació de una obsesión: la certeza de que cada momento puede ser perfecto. Desde 2009, hemos orquestado más de dos mil eventos en los escenarios más exclusivos del planeta.
              </p>
              <p className="mt-6 text-charcoal font-light leading-loose text-base tracking-wide">
                No ejecutamos eventos. <em className="font-display text-ink not-italic font-medium">Componemos experiencias</em> que viven en la memoria de quienes las viven. Cada mesa, cada flor, cada silencio, calculado con maestría absoluta.
              </p>
            </FadeIn>

            {/* Stats Row */}
            <FadeIn delay={0.3} className="grid grid-cols-3 gap-6 lg:pl-12 pt-4 border-t border-mist">
              {[
                { num: '2.400+', label: 'Eventos' },
                { num: '34', label: 'Países' },
                { num: '100%', label: 'Satisfacción' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl text-ink">{num}</p>
                  <p className="text-[10px] tracking-widest uppercase text-slate font-light mt-1">{label}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
