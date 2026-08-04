export default function Contacto() {
  return (
    <footer id="contacto" className="border-t border-outline/30 bg-obsidian py-8">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="text-center md:text-left"><h2 className="mb-2 font-display text-3xl font-bold text-white">¿Trabajamos juntos?</h2><p className="text-lg text-on-surface/60">© 2024 DEV.SOLO — ENGINEERED FOR PRECISION</p></div>
        <div className="flex flex-col gap-6 font-mono text-sm text-on-surface-variant sm:flex-row"><a className="underline transition-colors hover:text-white" href="mailto:hello@devsolo.com">✉ Email</a><a className="underline transition-colors hover:text-white" href="#">LinkedIn</a><a className="underline transition-colors hover:text-white" href="#">GitHub</a></div>
      </div>
    </footer>
  );
}
