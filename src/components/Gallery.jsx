import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=700&q=85', span: 'lg:col-span-2 lg:row-span-2', alt: 'Gala nocturna' },
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=85', span: '', alt: 'Mesa elegante' },
  { src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=500&q=85', span: '', alt: 'Decoración floral' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=85', span: 'lg:col-span-2', alt: 'Jardín de gala' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=85', span: '', alt: 'Champagne' },
  { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=500&q=85', span: 'lg:row-span-2', alt: 'Salón de baile' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=85', span: '', alt: 'Fuegos artificiales' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galeria" className="py-32 lg:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-mist" />
              <span className="text-[10px] tracking-widest3 uppercase text-slate font-light">Galería</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-tight text-ink">
              Momentos que<br />
              <em>permanecen</em>
            </h2>
          </div>
          <p className="text-sm text-slate font-light tracking-wide max-w-xs">
            Una selección de los eventos que hemos tenido el privilegio de crear.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[200px] lg:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
