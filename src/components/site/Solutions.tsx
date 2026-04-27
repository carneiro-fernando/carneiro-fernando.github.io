import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";
import { Bot, Workflow, Code2, Network, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";
import NeuralBackground from "./NeuralBackground";

const solutions = [
  {
    icon: Bot,
    title: "Bots de WhatsApp com IA",
    text: "Agentes inteligentes que respondem, qualificam leads e agendam atendimentos 24/7 — com tom de voz da sua marca.",
    tags: ["LLMs", "Agentes", "Qualificação"],
    featured: true,
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    text: "Integração de sistemas com n8n, APIs e webhooks. Eliminação de retrabalho e ganho real de produtividade.",
    tags: ["n8n", "APIs", "Webhooks"],
  },
  {
    icon: Code2,
    title: "Sistemas sob Medida",
    text: "APIs leves e painéis operacionais com FastAPI e Docker, prontos para escalar e fáceis de manter.",
    tags: ["FastAPI", "Docker", "Redis"],
  },
  {
    icon: Network,
    title: "Infraestrutura de TI",
    text: "Redes Mikrotik e UniFi, servidores Linux, segurança de dados e monitoramento de ambientes críticos.",
    tags: ["Mikrotik", "UniFi", "Linux"],
  },
  {
    icon: Home,
    title: "Ambientes Premium",
    text: "Wi-Fi profissional e tecnologia integrada para residências de alto padrão — performance e elegância.",
    tags: ["Wi-Fi 6", "Smart Home"],
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 md:py-32 bg-background scroll-mt-20 border-t border-border/40">
      <NeuralBackground />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...revealProps} className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-electric flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-electric" />
            Ecossistema de Soluções
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Da <span className="text-gradient-electric">inteligência artificial</span> à
            infraestrutura de rede.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Uma abordagem full-stack real: engenharia aplicada desde a camada de hardware até agentes cognitivos no WhatsApp.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const featured = s.featured;
            return (
              <motion.div
                key={s.title}
                {...revealProps}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`group relative rounded-3xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  featured
                    ? "lg:col-span-2 bg-gradient-hero text-primary-foreground border-white/10 shadow-primary p-8 md:p-10"
                    : "bg-surface-elevated border-border/50 shadow-soft hover:shadow-elegant hover:border-electric/30 p-8"
                }`}
              >
                {/* Premium Glow effect on hover for standard cards */}
                {!featured && (
                  <div className="absolute inset-0 bg-gradient-to-b from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                {featured && (
                  <>
                    <div className="absolute -right-16 -top-16 size-64 rounded-full bg-electric/30 blur-3xl pointer-events-none" />
                    <div className="absolute right-4 top-4 sm:right-8 sm:top-8 w-40 opacity-20 pointer-events-none flex flex-col gap-2">
                      <div className="bg-white/90 text-background text-[10px] py-1 px-2.5 rounded-2xl rounded-tr-sm self-end">
                        Olá, preciso de ajuda
                      </div>
                      <div className="bg-whatsapp/90 text-white text-[10px] py-1 px-2.5 rounded-2xl rounded-tl-sm self-start">
                        Claro! Como posso ajudar hoje?
                      </div>
                      <div className="bg-whatsapp/90 w-12 h-4 rounded-2xl rounded-tl-sm self-start animate-pulse" />
                    </div>
                  </>
                )}
                <div
                  className={`relative size-12 rounded-2xl grid place-items-center ${
                    featured
                      ? "bg-white/10 border border-white/15 text-white backdrop-blur-md shadow-sm"
                      : "bg-gradient-to-br from-background to-muted border border-border text-electric shadow-sm group-hover:scale-110 transition-transform duration-500"
                  }`}
                >
                  <s.icon className="size-6" />
                </div>

                <h3
                  className={`relative mt-6 text-2xl font-bold tracking-tight ${
                    featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`relative mt-3 text-[15px] leading-relaxed ${
                    featured ? "text-white/80 max-w-sm" : "text-muted-foreground"
                  }`}
                >
                  {s.text}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        featured
                          ? "bg-white/10 text-white border border-white/10 backdrop-blur-sm"
                          : "border border-border bg-background text-muted-foreground group-hover:border-electric/20 transition-colors"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {featured && (
                  <div className="relative mt-8">
                    <Button asChild variant="whatsapp" className="shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/40 transition-all duration-300">
                      <a
                        href={whatsappLink(
                          "Olá Fernando! Quero saber mais sobre Bots de WhatsApp com IA.",
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quero um bot assim
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
