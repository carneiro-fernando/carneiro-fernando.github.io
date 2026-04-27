import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";
import { Search, FileText, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    duration: "1–3 dias",
    text: "Conversa pra entender operação, problema real e recursos disponíveis.",
    deliverable: "Mapa do fluxo + pontos de alavancagem",
  },
  {
    icon: FileText,
    title: "Proposta",
    duration: "2–4 dias",
    text: "Escopo claro, prazo, custo e tecnologia justificada — sem caixa-preta.",
    deliverable: "Documento técnico + estimativa de ROI",
  },
  {
    icon: Rocket,
    title: "Implantação",
    duration: "2–6 semanas",
    text: "Execução técnica com entregas incrementais e ambiente de testes.",
    deliverable: "Sistema em produção + documentação",
  },
  {
    icon: LineChart,
    title: "Acompanhamento",
    duration: "Contínuo",
    text: "Monitoramento, ajustes finos e suporte após o go-live.",
    deliverable: "Métricas semanais + iterações",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 bg-background scroll-mt-20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...revealProps} className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-electric flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-electric" />
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Engenharia <span className="text-gradient-electric">passo a passo.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Um processo previsível e estruturado, do diagnóstico da sua operação ao suporte pós-implantação.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              {...revealProps}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-electric/40 to-transparent z-0" />
              )}
              <div className="relative h-full rounded-3xl border border-border/50 bg-surface-elevated p-8 shadow-soft hover:shadow-elegant hover:border-electric/30 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="size-12 rounded-2xl bg-gradient-electric grid place-items-center text-electric-foreground shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="size-5" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground tabular-nums bg-muted px-2 py-1 rounded-md">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-foreground tracking-tight">{s.title}</h3>
                <p className="text-xs font-bold text-electric uppercase tracking-widest mt-2">
                  {s.duration}
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.text}
                </p>
                <div className="mt-6 pt-5 border-t border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Entrega
                  </p>
                  <p className="text-sm text-foreground font-medium">{s.deliverable}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
