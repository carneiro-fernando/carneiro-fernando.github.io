import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";

const stats = [
  { value: "15+", label: "Anos de experiência técnica, do switch ao agente de IA" },
  { value: "70%", label: "Das conversas de atendimento resolvidas sem humano" },
  { value: "350+", label: "Nós de rede e servidores em ambientes críticos" },
  { value: "30d", label: "Tempo médio de payback em projetos de automação" },
];

export function Stats() {
  return (
    <section className="relative border-y border-border/40 bg-surface/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border/0 md:divide-border/40">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            {...revealProps}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`text-center md:text-left ${i !== 0 ? "md:pl-12" : ""}`}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tighter flex items-center justify-center md:justify-start gap-1">
              <span className="text-gradient-electric">{s.value}</span>
            </div>
            <p className="mt-3 text-xs md:text-sm font-medium text-muted-foreground leading-relaxed max-w-[200px] mx-auto md:mx-0">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
