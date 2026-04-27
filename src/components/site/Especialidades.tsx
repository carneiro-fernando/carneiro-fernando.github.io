import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";
import { Bot, Server, Code2 } from "lucide-react";

const specialities = [
  {
    icon: Bot,
    title: "IA Aplicada",
    items: [
      "Agentes conversacionais",
      "Atendimento automatizado",
      "Qualificação de leads",
      "Automação WhatsApp",
    ],
  },
  {
    icon: Server,
    title: "Infraestrutura",
    items: [
      "Linux",
      "Docker",
      "Cloud",
      "Redes",
      "Servidores",
    ],
  },
  {
    icon: Code2,
    title: "Engenharia",
    items: [
      "APIs",
      "Integrações",
      "Automações customizadas",
      "Software sob medida",
    ],
  },
];

export function Especialidades() {
  return (
    <section id="especialidades" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...revealProps} className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-electric flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-electric animate-pulse" />
            Especialidades
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Engenharia que traz <span className="text-gradient-electric">resultados.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Sem buzzwords. Três pilares fundamentais aplicados com rigor técnico e foco na eficiência do seu negócio.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {specialities.map((s, i) => (
            <motion.div
              key={s.title}
              {...revealProps}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-[2rem] bg-surface-elevated border border-border/50 p-8 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Premium Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="size-14 rounded-2xl bg-gradient-to-br from-background to-muted border border-border grid place-items-center text-electric shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <s.icon className="size-6" />
                </div>
                
                <h3 className="mt-8 text-2xl font-bold text-foreground tracking-tight">{s.title}</h3>
                
                <ul className="mt-6 space-y-3.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      <span className="size-1.5 rounded-full bg-primary/40 group-hover:bg-electric transition-colors duration-300" />
                      <span className="text-[15px] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
