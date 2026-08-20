const stack = ["Next.js", "React", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS", "TypeScript", "Stitch", "Codex", "Claude"];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="mb-28 scroll-mt-28">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="mb-6 inline-block border-b border-outline/30 pb-4 font-display text-3xl font-bold text-white"><span className="text-cyber-lime">/</span> Sobre mí</h2>
          <div className="space-y-4 text-lg leading-relaxed text-on-surface-variant">
            <p>Basado en Córdoba, Argentina. Actualmente curso mis estudios en Desarrollo de Software, enfocándome en arquitecturas escalables y experiencias de usuario de alto rendimiento.</p>
            <p>Trabajo como freelance en proyectos full-stack reales, desde el diseño hasta el deploy, muchas veces en equipo. Me interesa particularmente integrar herramientas de IA al flujo de desarrollo sin perder control sobre el resultado final.</p>
          </div>
        </div>
        <div className="relative overflow-hidden border border-outline/30 bg-charcoal p-8 md:col-span-6 md:col-start-7">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-cyber-lime">System.Stack_</h3>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => <span key={item} className="border border-outline/50 bg-obsidian px-4 py-2 font-mono text-sm text-white">{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
