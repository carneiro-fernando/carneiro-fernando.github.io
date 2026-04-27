import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";
import { Cloud, Eye, Database, Activity, MapPin, Search, ArrowRight } from "lucide-react";

import projLinear from "@/assets/1_linear.gif";
import projLoggi from "@/assets/2_loggi.gif";
import projRfm from "@/assets/3_rfm.gif";
import projDashboard from "@/assets/4_dashboard.gif";
import projPipeline from "@/assets/projeto_pipeline_300x400.gif";
import projLibras from "@/assets/projeto_libras_300x400.gif";

const cases = [
  {
    icon: Cloud,
    tag: "Engenharia de Dados",
    title: "Pipeline AWS & Mensageria",
    problem: "Dados de chat descentralizados, impedindo análises de negócio e auditoria do histórico.",
    solution: "Arquitetura ETL automatizada na AWS extraindo dados do Telegram/WhatsApp para um Data Lake.",
    impact: "Centralização completa, permitindo BI avançado sobre conversas e redução de silos de dados.",
    stack: ["AWS", "Python", "ETL", "Cloud"],
    image: projPipeline,
  },
  {
    icon: Database,
    tag: "Business Intelligence",
    title: "Observabilidade de Dados Global",
    problem: "Informações fragmentadas dificultavam o acompanhamento de métricas críticas da pandemia.",
    solution: "Modelagem de dados e construção de painel interativo consolidado em PowerBI via SQL.",
    impact: "Visibilidade imediata e democratização do acesso aos dados para tomada de decisão.",
    stack: ["PowerBI", "Visualização", "SQL"],
    image: projDashboard,
  },
  {
    icon: Activity,
    tag: "Machine Learning",
    title: "Modelagem Preditiva Financeira",
    problem: "Falta de previsibilidade estatística no comportamento de ativos do mercado financeiro.",
    solution: "Desenvolvimento de modelo de Regressão Linear com Scikit-Learn para predição de tendências.",
    impact: "Redução da incerteza analítica e embasamento quantitativo para estratégias de investimento.",
    stack: ["Python", "Scikit-Learn", "Pandas"],
    image: projLinear,
  },
  {
    icon: Eye,
    tag: "Deep Learning",
    title: "Visão Computacional & Acessibilidade",
    problem: "Ausência de interfaces automatizadas para tradução e reconhecimento de linguagem de sinais.",
    solution: "Treinamento de Rede Neural Convolucional (CNN) capaz de inferir LIBRAS em tempo real.",
    impact: "Prova de conceito bem sucedida para eliminação de barreiras de comunicação via software.",
    stack: ["Python", "Keras", "OpenCV"],
    image: projLibras,
  },
  {
    icon: Search,
    tag: "Data Analysis",
    title: "Analytics de Inadimplência",
    problem: "Taxas de inadimplência não mapeadas adequadamente nos perfis de uso de cartão de crédito.",
    solution: "Análise Exploratória (EDA) profunda focada na identificação de padrões de risco.",
    impact: "Descoberta de correlações críticas, viabilizando novas políticas de aprovação de crédito.",
    stack: ["Python", "Seaborn", "Estatística"],
    image: projRfm,
  },
  {
    icon: MapPin,
    tag: "Geospatial Analysis",
    title: "Inteligência Logística",
    problem: "Gargalos de entrega e roteirização sub-otimizada na região metropolitana.",
    solution: "Mapeamento espacial exploratório baseado em dados de demanda de frota.",
    impact: "Visualização clara de zonas de calor, permitindo otimização de malha logística.",
    stack: ["Python", "Jupyter", "Data Analysis"],
    image: projLoggi,
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-24 md:py-32 bg-background scroll-mt-20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...revealProps} className="max-w-3xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-electric flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-electric" />
            Cases & Projetos
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Histórico de <span className="text-gradient-electric">execução.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Uma seleção de entregas técnicas estruturadas. Do problema de negócio à arquitetura da solução, com foco em resultados mensuráveis.
          </p>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-2 gap-6 md:gap-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              {...revealProps}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl bg-surface-elevated border border-border hover:border-electric/30 p-8 md:p-10 transition-all duration-300 hover:shadow-elegant flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-electric/10 text-electric grid place-items-center">
                    <c.icon className="size-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                    {c.tag}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">{c.title}</h3>

              <div className="space-y-6 flex-1">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-destructive/80 mb-2">Desafio</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
                </div>
                
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-electric mb-2">Solução</p>
                  <p className="text-sm text-foreground leading-relaxed font-medium">{c.solution}</p>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-whatsapp/90 mb-2">Impacto</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.impact}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-border/50">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-3 py-1 rounded-full border border-border bg-background text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
