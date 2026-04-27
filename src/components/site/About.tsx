import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";
import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";
import profile from "@/assets/profile.png";

import { CircleCheck } from "lucide-react";

const stack = [
  "Python",
  "AWS",
  "n8n",
  "OpenAI",
  "Docker",
  "Linux",
  "Cisco",
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-surface scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[40%_60%] gap-12 items-start">
        <motion.div {...revealProps} transition={{ duration: 0.6 }} className="relative mx-auto lg:mx-0 sticky top-24">
          <div className="absolute -inset-4 bg-gradient-electric rounded-3xl blur-2xl opacity-25" />
          <div className="relative aspect-[3/4] w-[280px] sm:w-[340px] lg:w-full rounded-3xl overflow-hidden border border-border shadow-elegant">
            <img
              src={profile}
              alt="Fernando Carneiro"
              loading="lazy"
              width={680}
              height={906}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div {...revealProps} transition={{ duration: 0.6 }} className="pt-4 lg:pl-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-electric flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-electric" />
            Sobre Fernando
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Engenharia de verdade, aplicada à{" "}
            <span className="text-gradient-electric">era da IA.</span>
          </h2>
          
          <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Por que trabalhar comigo</h3>
            <p>
              Sou Engenheiro da Computação e atuo há mais de 15 anos com infraestrutura crítica, redes e desenvolvimento de software. Hoje, integro essa bagagem como consultor em IA aplicada, automação e TI empresarial. 
            </p>
            <p>
              Meu diferencial é unir a experiência tática de quem já operou redes complexas com a visão estratégica de soluções modernas. Eu sei exatamente o que acontece quando um sistema falha e como projetar arquiteturas resilientes para que isso não ocorra.
            </p>
            <p>
              Não acredito em buzzwords ou soluções genéricas. Meu foco absoluto é resolver problemas reais da sua operação, entregando valor tangível e mensurável desde o primeiro dia.
            </p>
            <p>
              Seja orquestrando um agente inteligente de WhatsApp que devolve horas produtivas para sua equipe, seja reestruturando uma infraestrutura de rede que precisa de estabilidade.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Stack técnica principal
            </p>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-surface-elevated border border-border/50 text-foreground hover:border-electric/40 hover:bg-electric/5 transition-all cursor-default"
                >
                  <CircleCheck className="size-3.5 text-electric" />
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4 pt-10 border-t border-border/50">
            <Button asChild variant="default" size="lg" className="h-14 px-8 text-base shadow-soft hover:shadow-elegant transition-shadow">
              <a href="/FernandoCarneiro_resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="size-5 mr-2" />
                Baixar Currículo
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="h-14 px-8 text-base shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/40 transition-shadow">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5 mr-2" />
                Conversar agora
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
