import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Gem, Utensils, Music, Camera, MapPin, Users } from 'lucide-react'

const services = [
  {
    icon: Gem,
    title: 'Galas Privadas',
    subtitle: 'Black Tie & Beyond',
    desc: 'Veladas de etiqueta donde cada detalle habla el mismo idioma de la excelencia. Desde la iluminación hasta el último acorde.',
    img: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=85',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    subtitle: 'Experiencias Culinarias',
    desc: 'Colaboraciones con chefs Michelin para crear menús únicos que transforman la cena en una sinfonía de sabores.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85',
  },
  {
    icon: Music,
    title: 'Entretenimiento',
    subtitle: 'Actuaciones Exclusivas',
    desc: 'Artistas internacionales, orquestas en vivo y performances únicas que convierten cada evento en una noche irrepetible.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=85',
  },
  {
    icon: MapPin,
    title: 'Destinos',
    subtitle: 'Venue Curation',
    desc: 'Acceso a los espacios más reservados del mundo. Palacios, yates privados, jardines secretos y villas históricas.',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=85',
  },
  {
    icon: Camera,
    title: 'Producción',
    subtitle: 'Dirección Artística',
    desc: 'Un equipo de directores de arte y productores que crean escenografías únicas, documentadas por fotógrafos de primer nivel.',
    img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85',
  },
  {
    icon: Users,
    title: 'Corporate',
    subtitle: 'Eventos Empresariales',
    desc: 'Retiros ejecutivos, lanzamientos de producto y celebraciones corporativas concebidas para impresionar a los más críticos.',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=85',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-mist hover:border-transparent hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <Icon strokeWidth={1} size={18} className="text-slate" />
          <span className="text-[9px] tracking-widest3 uppercase text-slate font-light">{service.subtitle}</span>
        </div>
        <h3 className="font-display text-2xl text-ink mb-3">{service.title}</h3>
        <p className="text-sm text-charcoal font-light leading-relaxed tracking-wide">{service.desc}</p>

        <div className="mt-6 flex items-center gap-2 text-[10px] tracking-widest uppercase font-light text-ink opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span>Explorar</span>
          <span className="w-6 h-px bg-ink" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-32 lg:py-44 bg-ivory">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <div ref={headRef} className="grid lg:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-mist" />
              <span className="text-[10px] tracking-widest3 uppercase text-slate font-light">Nuestros Servicios</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-tight text-ink">
              Cada servicio,<br />
              <em>una obra de arte</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:self-end text-charcoal font-light leading-loose tracking-wide"
          >
            Ofrecemos una gama completa de servicios que se articulan como movimientos de una sinfonía, con una cohesión que solo viene de la más alta experiencia.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
