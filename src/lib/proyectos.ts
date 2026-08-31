export type Proyecto = {
  nombre: string;
  estado: string;
  descripcion: string;
  stack: string[];
  demoUrl: string | null;
  repoUrl: string | null;
  destacado: boolean;
  imagen?: string;
  mostrarPlaceholderImagen?: boolean;
  categoria?: string;
  funcionalidades?: string[];
  icono?: "calendar" | "dumbbell" | "hammer" | "scissors";
};

export const proyectos: Proyecto[] = [
  {
    nombre: "PandoCBA",
    estado: "En desarrollo",
    descripcion: "Plataforma e-commerce B2C para indumentaria urbana. Arquitectura modular enfocada en rendimiento y conversión.",
    stack: ["Next.js 16", "Express 5", "Prisma 7", "PostgreSQL"],
    demoUrl: "https://pando-cba-frontend.vercel.app/",
    repoUrl: "https://github.com/JesusMosconi/PandoCbaFrontend.git",
    destacado: true,
    imagen: "/images/pandocba2.jpg",
    funcionalidades: ["Catálogo dinámico con filtrado avanzado", "Gestión de categorías y jerarquías", "Colecciones exclusivas y drops"],
  },
  {
    nombre: "Los Onis",
    estado: "Finalizado",
    descripcion: "Sistema de gestión de clientes y turnos para un taller de herrería. Incluye calendario mensual con indicadores por color, agenda diaria dividida en mañana/tarde, control de tareas con historial de reprogramación y autenticación por PIN.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL (Neon)", "Tailwind CSS 4", "JWT"],
    demoUrl: "https://los-onis-ikjt.vercel.app/login",
    repoUrl: "https://github.com/JesusMosconi/LosOnis.git",
    destacado: false,
    imagen: "/images/LosOnis.jpg",
    mostrarPlaceholderImagen: true,
    categoria: "Client project",
    icono: "calendar",
  },
  {
    nombre: "FerBertero Coach",
    estado: "Finalizado",
    descripcion: "Landing page para el entrenador personal Fer Bertero. Presenta planes de entrenamiento, testimonios de alumnos y contacto directo por WhatsApp, con soporte PWA y foco en performance y SEO.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://manny-page.vercel.app/",
    repoUrl: "https://github.com/JesusMosconi/FerBerteroCoach.git",
    destacado: false,
    imagen: "/images/ferbertero.jpg",
    mostrarPlaceholderImagen: true,
    categoria: "Client project",
    icono: "dumbbell",
  },
  {
    nombre: "Herrería L&J",
    estado: "Finalizado",
    descripcion: "Sitio de portfolio y presupuestos para una herrería familiar. Muestra los trabajos realizados y permite a los clientes solicitar cotizaciones.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL (Neon)", "Vercel"],
    demoUrl: "https://herreria-ly-jv2-alpha.vercel.app/",
    repoUrl: "https://github.com/JesusMosconi/HerreriaLyJv2",
    destacado: false,
    imagen: "/images/herrerialyj.jpg",
    mostrarPlaceholderImagen: true,
    categoria: "Client project",
    icono: "hammer",
  },
  {
    nombre: "Demo Peluquería — Bella Estilo",
    estado: "Finalizado",
    descripcion: "Demo funcional (no mockup) de un sistema de turnos para peluquería. Wizard de reserva en 4 pasos (sección → profesional → fecha/horario → confirmación) y panel admin para gestionar turnos, bloquear horarios y administrar profesionales/secciones.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL (Neon)", "Vercel"],
    demoUrl: "https://demo-peluqueria-green.vercel.app/",
    repoUrl: "https://github.com/JesusMosconi/demo-peluqueria",
    destacado: false,
    imagen: "/images/demopeluqueria.jpg",
    mostrarPlaceholderImagen: true,
    categoria: "Demo / Proyecto personal",
    icono: "scissors",
  },
];
