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
  icono?: string;
};

export const proyectos: Proyecto[] = [
  {
    nombre: "PandoCBA",
    estado: "En desarrollo",
    descripcion: "Plataforma e-commerce B2C para indumentaria urbana. Arquitectura modular enfocada en rendimiento y conversión.",
    stack: ["Next.js 16", "Express 5", "Prisma 7", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
    destacado: true,
    imagen: "/images/pandocba.jpg",
    funcionalidades: ["Catálogo dinámico con filtrado avanzado", "Gestión de categorías y jerarquías", "Colecciones exclusivas y drops"],
  },
  {
    nombre: "Task Manager Pro",
    estado: "",
    descripcion: "Aplicación de gestión de tareas enfocada en productividad para desarrolladores. Soporte offline y sincronización en tiempo real.",
    stack: ["React", "Firebase", "Tailwind"],
    demoUrl: null,
    repoUrl: "#",
    destacado: false,
    icono: "✓",
  },
  {
    nombre: "Weather App CLI",
    estado: "",
    descripcion: "Herramienta de línea de comandos para consultar el clima. Interfaz de terminal limpia con gráficos ASCII.",
    stack: ["Node.js", "Axios", "Chalk"],
    demoUrl: "#",
    repoUrl: "#",
    destacado: false,
    icono: "☼",
  },
];
