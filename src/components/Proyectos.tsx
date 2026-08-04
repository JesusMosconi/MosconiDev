import ProyectoCard from "@/components/ProyectoCard";
import { proyectos } from "@/lib/proyectos";

export default function Proyectos() {
  return (
    <>
      <section id="proyectos" className="mb-28 scroll-mt-28">
        <h2 className="mb-12 inline-block border-b border-outline/30 pb-4 font-display text-3xl font-bold text-white"><span className="text-cyber-lime">/</span> Proyectos Seleccionados</h2>
        {proyectos.filter((p) => p.destacado).map((p) => <ProyectoCard key={p.nombre} proyecto={p} />)}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">{proyectos.filter((p) => !p.destacado).map((p) => <ProyectoCard key={p.nombre} proyecto={p} />)}</div>
      </section>
      <section className="mx-auto mb-28 max-w-4xl overflow-hidden border border-outline/50 bg-obsidian shadow-2xl" aria-label="Estado actual">
        <div className="flex items-center gap-2 border-b border-outline/50 bg-charcoal px-4 py-2"><i className="size-3 rounded-full bg-outline/50" /><i className="size-3 rounded-full bg-outline/50" /><i className="size-3 rounded-full bg-outline/50" /><span className="ml-4 font-mono text-xs text-on-surface-variant">guest@dev-solo:~</span></div>
        <div className="bg-obsidian/90 p-6 font-mono text-sm leading-relaxed text-cyber-lime"><p className="mb-2"><span className="text-white">$</span> cat current_status.txt</p><p className="mb-4 text-on-surface-variant">&gt; Status: Disponible para oportunidades freelance.</p><p className="mb-2"><span className="text-white">$</span> ./execute_mission.sh</p><p className="text-on-surface-variant">&gt; Iniciando módulos...</p><p className="text-on-surface-variant">&gt; Cargando creatividad... [OK]</p><p className="mb-4 text-on-surface-variant">&gt; Desplegando soluciones robustas... [EN PROCESO]</p><p className="animate-pulse">_</p></div>
      </section>
    </>
  );
}
