import { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  MessageCircle,
  Wrench,
  Droplet,
  Disc3,
  Zap,
  Bike,
  Stethoscope,
  Clock,
  Users,
  Tag,
  ShieldCheck,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Send,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import testImage from '@/image_1712794e.png';
import testImage2 from '@/image_b3838388.png';
import testImage3 from '@/FB_IMG_1780750349951.jpg';
const WHATSAPP_NUMBER = '525637148087';
const WHATSAPP_MSG = 'Hola, vi su página web y quiero información sobre el servicio para mi moto.';
const whatsappLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

type Service = {
  icon: typeof Wrench;
  title: string;
  desc: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: Wrench,
    title: 'Afinación',
    desc: 'Ajuste completo de motor, válvulas y sistema de combustible para un rendimiento óptimo.',
    features: ['Ajuste de válvulas', 'Limpieza de inyectores', 'Sincronización'],
  },
  {
    icon: Droplet,
    title: 'Cambio de aceite',
    desc: 'Aceite de alta calidad y filtro nuevo para proteger tu motor y alargar su vida útil.',
    features: ['Aceite sintético', 'Filtro nuevo', 'Drenaje completo'],
  },
  {
    icon: Disc3,
    title: 'Frenos',
    desc: 'Revisión y reparación del sistema de frenado para tu seguridad en cada viaje.',
    features: ['Pastillas nuevas', 'Sangrado de líneas', 'Discos rectificados'],
  },
  {
    icon: Zap,
    title: 'Servicio eléctrico',
    desc: 'Diagnóstico y reparación de sistema eléctrico, batería, luces y encendido.',
    features: ['Batería revisada', 'Sistema de carga', 'Luces y encendido'],
  },
  {
    icon: Bike,
    title: 'Suspensión',
    desc: 'Mantenimiento y reparación de horquillas, amortiguadores y suspensión trasera.',
    features: ['Sellado de horquillas', 'Aceite de suspensión', 'Ajuste de amortiguador'],
  },
  {
    icon: Stethoscope,
    title: 'Diagnóstico general',
    desc: 'Revisión completa de tu moto con equipo profesional para detectar cualquier falla.',
    features: ['Scanner electrónico', 'Prueba de motor', 'Reporte detallado'],
  },
];

const advantages = [
  {
    icon: Clock,
    title: 'Atención rápida',
    desc: 'Te atendemos sin citas complicadas. Tiempos de entrega claros y cumplidos.',
  },
  {
    icon: Users,
    title: 'Mecánicos especializados',
    desc: 'Personal certificado con experiencia en todas las marcas y modelos de motos.',
  },
  {
    icon: Tag,
    title: 'Precios transparentes',
    desc: 'Cotización clara desde el principio. Sin sorpresas ni cobros ocultos.',
  },
  {
    icon: ShieldCheck,
    title: 'Motos de trabajo y particulares',
    desc: 'Servicio para motos de reparto, patines, scooters y motos deportivas.',
  },
];

const galleryImages = [
  {
    url: testImage3,
    alt: 'Taller con motos en mantenimiento',
  },
  {
    url: 'https://images.pexels.com/photos/11890959/pexels-photo-11890959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mecánico reparando motor de motocicleta',
  },
  {
    url: 'https://images.pexels.com/photos/8550664/pexels-photo-8550664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Manos del mecánico usando llave en el motor',
  },
  {
    url: 'https://images.pexels.com/photos/33203538/pexels-photo-33203538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Moto deportiva roja en taller oscuro',
  },
  {
    url: 'https://images.pexels.com/photos/3806255/pexels-photo-3806255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mecánico cambiando llanta de motocicleta',
  },
  {
    url: 'https://images.pexels.com/photos/31139705/pexels-photo-31139705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Ensamblaje de partes del motor',
  },
  {
    url: 'https://images.pexels.com/photos/39223630/pexels-photo-39223630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Motos deportivas estacionadas de noche',
  },
  {
    url: 'https://images.pexels.com/photos/11890956/pexels-photo-11890956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Reparación de motor de motocicleta',
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por qué elegirnos', href: '#por-que' },
    { label: 'Promoción', href: '#promocion' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/30 group-hover:scale-110 transition-transform">
            <Wrench className="w-5 h-5 text-zinc-950" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
            Motoservicio David-Son
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink(WHATSAPP_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-green-600/30"
          >
            <MessageCircle className="w-4 h-4" />
            Cotizar por WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden text-zinc-200 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-950/98 backdrop-blur-md border-b border-zinc-800/60 animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-amber-400 py-3 border-b border-zinc-800/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink(WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/33203538/pexels-photo-33203538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Moto en taller"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 text-sm font-semibold tracking-wide">
            Servicio mecánico especializado
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.95] mb-4 animate-fade-in-up delay-100">
          Moto Servicio <span className="text-gradient-amber">David-Son</span>
        </h1>

        <p className="text-xl sm:text-2xl text-zinc-300 font-medium mb-10 animate-fade-in-up delay-200">
          Tu moto en buenas manos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href={whatsappLink(WHATSAPP_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-green-600/30 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-800/80 hover:bg-zinc-700 text-white font-bold text-base px-8 py-4 rounded-xl border border-zinc-700 hover:border-amber-500/50 transition-all hover:scale-105"
          >
            Ver servicios
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-12 animate-fade-in-up delay-500">
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-bold text-amber-400">+10</p>
            <p className="text-sm text-zinc-400 mt-1">Años de experiencia</p>
          </div>
          <div className="w-px h-12 bg-zinc-700 hidden sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-bold text-amber-400">+5,000</p>
            <p className="text-sm text-zinc-400 mt-1">Motos reparadas</p>
          </div>
          <div className="w-px h-12 bg-zinc-700 hidden sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-bold text-amber-400">100%</p>
            <p className="text-sm text-zinc-400 mt-1">Garantía en servicios</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-amber-400" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            Nuestros servicios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 uppercase">
            Todo lo que tu moto necesita
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Servicio profesional para todo tipo de motocicletas, desde una afinación hasta una reparación completa.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card-hover bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 ${
                  visible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-amber-400" strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2 uppercase">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                      <ChevronRight className="w-4 h-4 text-amber-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="por-que" className="py-20 sm:py-28 bg-gradient-to-b from-zinc-950 to-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            Por qué elegirnos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 uppercase">
            La diferencia que notarás
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className={`text-center group ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/50 flex items-center justify-center mb-5 transition-all group-hover:scale-110">
                  <Icon className="w-8 h-8 text-amber-400" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2 uppercase">
                  {adv.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Promotion() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="promocion" className="py-20 sm:py-28 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden border border-amber-500/30 ${
            visible ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/8550664/pexels-photo-8550664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Mecánico trabajando en motor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/70" />
          </div>

          <div className="relative px-6 sm:px-12 py-12 sm:py-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 rounded-full px-4 py-1.5 mb-5">
              <Star className="w-4 h-4 text-red-400 fill-red-400" />
              <span className="text-red-400 text-sm font-bold tracking-wide uppercase">
                Promoción del mes
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase mb-3 leading-tight">
              Afinación + Cambio de aceite
            </h2>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-zinc-400 text-lg">Desde</span>
              <span className="font-display text-5xl sm:text-6xl font-bold text-gradient-amber">
                $699
              </span>
              <span className="text-zinc-400 text-lg">MXN</span>
            </div>

            <ul className="space-y-2 mb-8 mt-6">
              <li className="flex items-center gap-2 text-zinc-300">
                <ChevronRight className="w-5 h-5 text-amber-500" />
                Ajuste completo de motor y válvulas
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <ChevronRight className="w-5 h-5 text-amber-500" />
                Aceite sintético de alta calidad incluido
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <ChevronRight className="w-5 h-5 text-amber-500" />
                Filtro de aceite nuevo
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <ChevronRight className="w-5 h-5 text-amber-500" />
                Revisión de frenos y suspensión sin costo
              </li>
            </ul>

            <a
              href={whatsappLink(WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 animate-pulse-glow"
            >
              <Send className="w-5 h-5" />
              Quiero esta promoción
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            Galería
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 uppercase">
            Nuestro trabajo
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Así se ven nuestras instalaciones y el trabajo que realizamos día a día.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 || i === 5 ? 'col-span-2 row-span-1' : ''
              } ${visible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover gallery-item"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="contacto" className="py-20 sm:py-28 bg-zinc-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 uppercase">
            Agenda tu servicio
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="space-y-5">
            <a
              href="tel:5512345678"
              className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Teléfono</p>
                <p className="text-white font-semibold text-lg">55 1234 5678</p>
              </div>
            </a>

            <a
              href={whatsappLink(WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 hover:border-green-500/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">WhatsApp</p>
                <p className="text-white font-semibold text-lg">55 1234 5678</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Horario</p>
                <p className="text-white font-semibold text-lg">Lun a Sáb, 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Dirección</p>
                <p className="text-white font-semibold text-lg">Av. Principal #123, Estado de México</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink(WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-green-600/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-14 h-14 text-white" strokeWidth={1.8} />
              <div>
                <p className="font-display text-2xl font-bold text-white uppercase mb-1">
                  Escríbenos por WhatsApp
                </p>
                <p className="text-green-100 text-sm">
                  Respuesta inmediata en horario de servicio
                </p>
              </div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-xl mt-2">
                Abrir chat
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <p className="text-zinc-300 text-sm italic leading-relaxed">
                "Excelente servicio, me entregaron mi moto a tiempo y a un precio justo. Ahora los recomiendo con todos mis compañeros de reparto."
              </p>
              <p className="text-zinc-500 text-xs mt-3">— Cliente satisfecho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-zinc-950" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-wide">
              Taller Moto Express
            </span>
          </div>
          <p className="text-zinc-400 text-sm">
            Servicio, confianza y experiencia para tu moto.
          </p>
          <p className="text-zinc-600 text-xs mt-2">
            © 2026 Taller Moto Express. Estado de México.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(WHATSAPP_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/40 flex items-center justify-center transition-all hover:scale-110 animate-pulse-glow lg:hidden"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Promotion />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
