"use client";

import { useState, type FormEvent } from "react";

type EstadoEnvio = "idle" | "enviando" | "enviado" | "error";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState<EstadoEnvio>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEstado("enviando");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, descripcion }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }

      setNombre("");
      setEmail("");
      setDescripcion("");
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  return (
    <footer id="contacto" className="bg-obsidian py-8">
      <div className="mx-auto max-w-container px-6">
        <section className="mb-28 scroll-mt-28">
          <h2 className="mb-12 inline-block border-b border-outline/30 pb-4 font-display text-3xl font-bold text-white">
            <span className="text-cyber-lime">/</span> Contacto
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden border border-outline/50 bg-obsidian shadow-2xl">
              <div className="flex items-center gap-2 border-b border-outline/50 bg-charcoal px-4 py-2">
                <i className="size-3 rounded-full bg-outline/50" />
                <i className="size-3 rounded-full bg-outline/50" />
                <i className="size-3 rounded-full bg-outline/50" />
                <span className="ml-4 font-mono text-xs text-on-surface-variant">guest@mosconidev:~</span>
              </div>
              <div className="bg-obsidian/90 p-6 font-mono text-sm leading-relaxed text-cyber-lime">
                <p className="mb-2"><span className="text-white">$</span> cat current_status.txt</p>
                <p className="mb-6 text-on-surface-variant">&gt; Status: Disponible para oportunidades freelance.</p>

                <p className="mb-2"><span className="text-white">$</span> cat contact_info.txt</p>
                <p className="text-on-surface-variant">&gt; EMAIL: contacto.mosconidev@gmail.com</p>
                <p className="text-on-surface-variant">&gt; GITHUB: <a href="https://github.com/JesusMosconi">/JesusMosconi</a></p>
                <p className="mb-6 text-on-surface-variant">&gt; LINKEDIN: <a href="https://www.linkedin.com/in/jesusmosconi">/in/jesusmosconi</a></p>

                <p><span className="text-white">$</span> <span className="blink">_</span></p>
              </div>
            </div>

            <div className="border border-outline/30 bg-charcoal p-6 md:p-8">
              <h3 className="mb-8 font-display text-2xl font-bold text-white">
                <span className="text-cyber-lime">/</span> Envíame un mensaje
              </h3>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nombre" className="mb-2 block font-mono text-xs uppercase text-cyber-lime">Nombre</label>
                  <input id="nombre" name="nombre" type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} className="w-full border-0 border-b border-outline/50 bg-transparent px-0 py-2 font-sans text-on-surface outline-none transition-colors focus:border-cyber-lime" />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase text-cyber-lime">Email</label>
                  <input id="email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full border-0 border-b border-outline/50 bg-transparent px-0 py-2 font-sans text-on-surface outline-none transition-colors focus:border-cyber-lime" />
                </div>

                <div>
                  <label htmlFor="descripcion" className="mb-2 block font-mono text-xs uppercase text-cyber-lime">Descripción de lo que necesitás</label>
                  <textarea id="descripcion" name="descripcion" rows={4} value={descripcion} onChange={(event) => setDescripcion(event.target.value)} className="w-full resize-none border-0 border-b border-outline/50 bg-transparent px-0 py-2 font-sans text-on-surface outline-none transition-colors focus:border-cyber-lime" />
                </div>

                <button type="submit" disabled={estado === "enviando"} className="bg-cyber-lime px-8 py-4 font-mono text-sm font-bold text-obsidian transition-shadow hover:shadow-[0_0_0_2px_#0B0C10,0_0_0_4px_#C1FF72] disabled:cursor-not-allowed disabled:opacity-60">
                  {estado === "enviando" ? "Enviando..." : "Enviar"}
                </button>
                {estado === "enviado" && <p className="font-mono text-sm text-cyber-lime">Mensaje enviado. Te voy a responder a la brevedad.</p>}
                {estado === "error" && <p className="border-l-2 border-red-400 pl-3 font-mono text-sm text-red-300">Hubo un problema al enviar. Probá de nuevo o escribime directo a contacto.mosconidev@gmail.com.</p>}
              </form>
            </div>
          </div>
        </section>

        <p className="text-center text-lg text-on-surface/60">© 2024 MosconiDev — Córdoba, Argentina</p>
      </div>
    </footer>
  );
}
