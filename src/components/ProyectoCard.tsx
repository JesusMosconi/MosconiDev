import Image from "next/image";
import { Calendar, Dumbbell } from "lucide-react";
import type { Proyecto } from "@/lib/proyectos";

const iconos = {
  calendar: Calendar,
  dumbbell: Dumbbell,
};

export default function ProyectoCard({ proyecto }: { proyecto: Proyecto }) {
  const Icono = proyecto.icono ? iconos[proyecto.icono] : undefined;

  if (proyecto.destacado) {
    return (
      <article className="cyber-card group mb-8 overflow-hidden border border-outline/30 bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative h-64 overflow-hidden border-b border-outline/30 lg:col-span-7 lg:h-auto lg:border-r lg:border-b-0">
             {proyecto.imagen && <Image src={proyecto.imagen} alt={`Vista previa de ${proyecto.nombre}`} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="project-image object-cover" />}
          </div>
          <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-10">
            {proyecto.estado && <span className="mb-4 w-fit border border-cyber-lime/30 bg-cyber-lime/10 px-3 py-1 font-mono text-xs uppercase text-cyber-lime">{proyecto.estado}</span>}
            <h3 className="mb-4 font-display text-2xl font-semibold text-white">{proyecto.nombre}</h3>
            <p className="mb-6 leading-relaxed text-on-surface-variant">{proyecto.descripcion}</p>
            <ul className="mb-6 space-y-2 text-sm text-on-surface-variant">
              {proyecto.funcionalidades?.map((item) => <li key={item} className="flex gap-2"><span className="text-cyber-lime">✓</span>{item}</li>)}
            </ul>
            <div className="mb-8 flex flex-wrap gap-2 font-mono text-xs text-outline">{proyecto.stack.map((item, index) => <span key={item}>{index > 0 && "• "}{item}</span>)}</div>
            <ProjectLinks proyecto={proyecto} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="cyber-card flex flex-col border border-outline/30 bg-charcoal p-8">
      <div className="mb-6 flex items-start justify-between">{Icono && <Icono className="size-8 text-cyber-lime" aria-hidden="true" />}<ProjectLinks proyecto={proyecto} compact /></div>
      <h3 className="mb-3 font-display text-2xl font-semibold text-white">{proyecto.nombre}</h3>
      <p className="mb-6 flex-grow leading-relaxed text-on-surface-variant">{proyecto.descripcion}</p>
      <div className="mt-auto flex flex-wrap gap-3 border-t border-outline/20 pt-4 font-mono text-xs text-outline">{proyecto.stack.map((item) => <span key={item}>{item}</span>)}</div>
    </article>
  );
}

function ProjectLinks({ proyecto, compact = false }: { proyecto: Proyecto; compact?: boolean }) {
  return <div className="flex gap-4 font-mono text-sm">{proyecto.demoUrl && <a href={proyecto.demoUrl} aria-label={`Demo de ${proyecto.nombre}`} className="text-white transition-colors hover:text-cyber-lime">↗{!compact && " Demo"}</a>}<a href={proyecto.repoUrl} aria-label={`Repositorio de ${proyecto.nombre}`} className="text-white transition-colors hover:text-cyber-lime">&lt;/&gt;{!compact && " Repo"}</a></div>;
}
