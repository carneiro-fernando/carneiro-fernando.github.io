import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";

const testimonials = [
  {
    text: "Em 30 dias o bot já respondia mais da metade das dúvidas dos clientes. Fernando entrega coisa séria, sem firula.",
    author: "Marcos R.",
    role: "Diretor Comercial, Indústria",
    initial: "M",
  },
  {
    text: "Refez nossa rede do zero. Hoje a operação não para. Antes era um bombeiro por semana.",
    author: "Ana P.",
    role: "Gerente de TI, Logística",
    initial: "A",
  },
  {
    text: "Automatizou um processo que tomava 4 horas/dia da equipe. Pago em duas semanas.",
    author: "Lucas M.",
    role: "Sócio, Agência",
    initial: "L",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-surface scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...revealProps} className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-electric">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            O que dizem os <span className="text-gradient-electric">clientes.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            // TODO: substituir por depoimentos reais
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              {...revealProps}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-gradient-card p-8 shadow-soft flex flex-col"
            >
              <div className="absolute top-6 right-6 text-6xl font-serif text-muted-foreground/10 pointer-events-none">
                "
              </div>
              <p className="relative z-10 flex-1 text-muted-foreground italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="size-10 rounded-full bg-primary/10 border border-primary/20 grid place-items-center text-primary font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
