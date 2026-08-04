import Image from "next/image";

const links = [
  ["Sobre mí", "#sobre-mi"],
  ["Proyectos", "#proyectos"],
  ["Contacto", "#contacto"],
];

export default function Hero() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-outline/20 bg-obsidian/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-4" aria-label="Navegación principal">
          <a href="#" className="font-display text-2xl font-extrabold text-white">DEV.SOLO</a>
          <div className="hidden gap-8 md:flex">
            {links.map(([label, href]) => <a key={href} href={href} className="font-semibold text-on-surface-variant transition-colors hover:text-white">{label}</a>)}
          </div>
          <a href="#" className="hidden border border-cyber-lime px-6 py-2 font-mono text-sm text-cyber-lime transition-colors hover:bg-cyber-lime hover:text-obsidian md:inline-flex">Resume</a>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[80vh] max-w-container grid-cols-1 items-center gap-8 px-6 pt-32 pb-20 md:grid-cols-12 md:pb-28">
        <div className="z-10 md:col-span-7">
          <h1 className="mb-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] text-white">
            Ingeniería en <span className="text-cyber-lime">Software</span>, de punta a punta.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Estudiante construyendo productos full-stack con precisión técnica y diseño minimalista.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm font-bold">
            <a href="#proyectos" className="bg-cyber-lime px-8 py-4 text-obsidian transition-shadow hover:shadow-[0_0_0_2px_#0B0C10,0_0_0_4px_#C1FF72]">Ver proyectos</a>
            <a href="#contacto" className="border border-outline/50 px-8 py-4 text-white transition-colors hover:border-cyber-lime hover:text-cyber-lime">Contactarme</a>
          </div>
        </div>
        <div className="relative h-64 md:col-span-5 md:h-[500px]">
          <Image src="/images/hero-abstract.jpg" alt="Visualización geométrica abstracta" fill priority sizes="(min-width: 768px) 42vw, 100vw" className="object-cover opacity-80 mix-blend-screen" />
        </div>
      </section>
    </>
  );
}
