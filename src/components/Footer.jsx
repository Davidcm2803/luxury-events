import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'

const socials = [
  { Icon: Instagram, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Linkedin, href: '#' },
  { Icon: Youtube, href: '#' },
]

const links = {
  'Servicios': ['Galas Privadas', 'Fine Dining', 'Entretenimiento', 'Destinos', 'Producción', 'Corporate'],
  'Empresa': ['Sobre Nosotros', 'Equipo', 'Prensa', 'Sostenibilidad', 'Careers'],
  'Legal': ['Privacidad', 'Términos', 'Cookies', 'Accesibilidad'],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-mist">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-20 pb-10">

        {/* Top */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <p className="font-display text-2xl tracking-[0.12em] text-ink">MAISON PRIVÉ</p>
              <p className="text-[9px] tracking-widest2 text-slate font-light uppercase mt-0.5">Événements Exclusifs</p>
            </div>
            <p className="text-sm text-slate font-light leading-relaxed tracking-wide max-w-xs">
              Creando experiencias extraordinarias desde 2009. El arte de convertir cada momento en un recuerdo eterno.
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-slate hover:text-ink transition-colors duration-300"
                >
                  <Icon strokeWidth={1} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-3 gap-8">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <p className="text-[9px] tracking-widest3 uppercase text-slate font-light mb-5">{title}</p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-charcoal font-light hover:text-ink transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-mist mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-widest text-slate font-light uppercase">
            © 2024 Maison Privé. Todos los derechos reservados.
          </p>
          <p className="text-[10px] tracking-widest text-slate font-light">
            Paris · London · Dubai · Miami · Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  )
}
