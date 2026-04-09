# Maison Privé — Premium Luxury Event Web Application

Una aplicación web de ultra-lujo construida con React + Vite + Tailwind CSS + Framer Motion.

## Stack Tecnológico

- **Framework**: React 18 + Vite 5
- **Estilos**: Tailwind CSS 3
- **Animaciones**: Framer Motion 11
- **Iconos**: Lucide React (strokeWidth=1)
- **Tipografía**: Playfair Display (Serif) + Inter (Sans)

## Estructura de Componentes

```
src/
├── components/
│   ├── Navbar.jsx        — Navbar sticky con glassmorphism al scroll
│   ├── Hero.jsx          — Hero a pantalla completa con CTA
│   ├── About.jsx         — Sección editorial asimétrica
│   ├── Services.jsx      — Cards con hover premium
│   ├── Gallery.jsx       — Grid masonry style
│   ├── Testimonials.jsx  — Slider de citas con auto-avance
│   ├── Contact.jsx       — Formulario con inputs de borde inferior
│   └── Footer.jsx        — Footer minimalista
├── App.jsx               — Ensamblaje principal
├── main.jsx              — Entry point
└── index.css             — Estilos globales + Tailwind
```

## Instalación y Ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build

# 4. Preview del build
npm run preview
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Características

- ✅ Diseño "White Luxury": minimalista, editorial y sofisticado
- ✅ Animaciones con Framer Motion (viewport triggers)
- ✅ Navbar sticky con blur glassmorphism
- ✅ Hero a pantalla completa con overlay gradient
- ✅ Layout editorial asimétrico (tipo revista de moda)
- ✅ Service cards con hover: escala + desaturación → color
- ✅ Galería masonry con efectos grayscale → color
- ✅ Slider de testimonios con auto-avance (6s)
- ✅ Formulario con inputs de solo borde inferior
- ✅ Menú mobile con overlay animado
- ✅ Paleta White Luxury: blanco, off-white, gris suave, negro profundo
- ✅ Fuentes Playfair Display + Inter via Google Fonts
- ✅ Scroll indicator animado en Hero
- ✅ Micro-interacciones en botones (duration-500)
