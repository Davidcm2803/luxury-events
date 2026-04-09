import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contacto" className="py-32 lg:py-44 bg-ivory">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px bg-mist" />
              <span className="text-[10px] tracking-widest3 uppercase text-slate font-light">Contacto</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-tight text-ink mb-8">
              Comencemos<br />
              a <em>crear</em> su<br />
              experiencia.
            </h2>
            <p className="text-charcoal font-light leading-loose tracking-wide mb-12 max-w-sm">
              Cada gran evento comienza con una conversación. Cuéntenos su visión y nosotros la convertiremos en realidad.
            </p>

            <div className="space-y-5">
              {[
                { Icon: MapPin, text: 'Av. Alvear 1750, Buenos Aires · 16 Rue du Faubourg, Paris' },
                { Icon: Phone, text: '+1 (305) 000 0000 · +33 1 00 00 00 00' },
                { Icon: Mail, text: 'atelier@maisonprive.com' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-4">
                  <Icon strokeWidth={1} size={16} className="text-slate mt-0.5 shrink-0" />
                  <span className="text-sm text-charcoal font-light tracking-wide">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[9px] tracking-widest3 uppercase text-slate font-light block mb-2">Nombre</label>
                  <input type="text" required placeholder="Su nombre" className="input-underline" />
                </div>
                <div>
                  <label className="text-[9px] tracking-widest3 uppercase text-slate font-light block mb-2">Apellido</label>
                  <input type="text" required placeholder="Su apellido" className="input-underline" />
                </div>
              </div>

              <div>
                <label className="text-[9px] tracking-widest3 uppercase text-slate font-light block mb-2">Correo Electrónico</label>
                <input type="email" required placeholder="su@email.com" className="input-underline" />
              </div>

              <div>
                <label className="text-[9px] tracking-widest3 uppercase text-slate font-light block mb-2">Tipo de Evento</label>
                <select className="input-underline" required>
                  <option value="" disabled>Seleccione una opción</option>
                  <option>Boda Privada</option>
                  <option>Gala Corporativa</option>
                  <option>Cumpleaños de Lujo</option>
                  <option>Lanzamiento de Producto</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="text-[9px] tracking-widest3 uppercase text-slate font-light block mb-2">Su Visión</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntenos sobre el evento que sueña..."
                  className="input-underline resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ gap: '16px' }}
                className="group flex items-center gap-3 text-[11px] tracking-widest2 uppercase font-light px-8 py-4 bg-ink text-white hover:bg-charcoal transition-colors duration-500"
              >
                {sent ? 'Mensaje Enviado ✓' : 'Enviar Consulta'}
                {!sent && <Send strokeWidth={1} size={14} className="group-hover:translate-x-1 transition-transform duration-300" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
