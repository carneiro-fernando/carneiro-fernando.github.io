import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Especialidades } from "@/components/site/Especialidades";
import { Solutions } from "@/components/site/Solutions";
import { Cases } from "@/components/site/Cases";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Fernando Carneiro — Consultoria em IA, Automação e TI",
      },
      {
        name: "description",
        content:
          "Bots de WhatsApp com IA, automações de processos e infraestrutura de TI. Engenheiro da Computação com 15+ anos de experiência em soluções práticas e confiáveis.",
      },
      {
        property: "og:title",
        content: "Fernando Carneiro — IA, Automação e TI que resolvem",
      },
      {
        property: "og:description",
        content:
          "Da infraestrutura à inteligência artificial: tecnologia prática para empresas que querem trabalhar melhor.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Especialidades />
        <Solutions />
        <Cases />
        <About />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
