import ProyectoCard from "@/components/ProyectoCard";
import { proyectos } from "@/lib/proyectos";

export default function Proyectos() {
  return (
    <section id="proyectos" className="mb-28 scroll-mt-28">
      <h2 className="mb-12 inline-block border-b border-outline/30 pb-4 font-display text-3xl font-bold text-white"><span className="text-cyber-lime">/</span> Proyectos Seleccionados</h2>
      {proyectos.filter((p) => p.destacado).map((p) => <ProyectoCard key={p.nombre} proyecto={p} />)}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">{proyectos.filter((p) => !p.destacado).map((p) => <ProyectoCard key={p.nombre} proyecto={p} />)}</div>
    </section>
  );
}
