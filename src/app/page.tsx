import Contacto from "@/components/Contacto";
import Hero from "@/components/Hero";
import Proyectos from "@/components/Proyectos";
import SobreMi from "@/components/SobreMi";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-container px-6 pb-28">
        <SobreMi />
        <Proyectos />
      </main>
      <Contacto />
    </>
  );
}
