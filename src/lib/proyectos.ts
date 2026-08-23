export type Proyecto = {
  nombre: string;
  estado: string;
  descripcion: string;
  stack: string[];
  demoUrl: string | null;
  repoUrl: string;
  destacado: boolean;
  imagen?: string;
  funcionalidades?: string[];
  icono?: "calendar" | "dumbbell";
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
    icono: "dumbbell",
  },
];
