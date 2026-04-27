import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Bot, Server, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";
import profile from "@/assets/profile.png";

const pillars = [
  "Agentes de IA para WhatsApp",
  "Infraestrutura Linux & Cloud",
  "Automação de processos",
];

const floatingCards = [
  {
    icon: Bot,
    title: "Agentes de IA",
    desc: "WhatsApp & atendimento",
    position: "-left-12 top-10",
    delay: 0.2,
  },
  {
    icon: Server,
    title: "Infraestrutura",
    desc: "Linux • Cloud • Docker",
    position: "-right-16 top-1/2 -translate-y-1/2",
    delay: 0.4,
  },
  {
    icon: Workflow,
    title: "Automação",
    desc: "Integrações • APIs • workflows",
    position: "-left-8 bottom-12",
    delay: 0.6,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-0 bg-grid-fade pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/4 size-[800px] rounded-full bg-electric/20 blur-[120px] pointer-events-none opacity-60 mix-blend-screen" />
      <div className="absolute -bottom-32 -left-32 size-[600px] rounded-full bg-primary/40 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 size-[500px] rounded-full bg-electric/15 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner shadow-white/5 px-4 py-2 text-xs font-medium text-white/90 mb-8 tracking-wide">
            <span className="size-2 rounded-full bg-whatsapp animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.6)]" />
            Disponível para novos projetos
          </div>
          
          <h1 className="font-extrabold leading-[1.05] tracking-tight text-[2.75rem] sm:text-6xl lg:text-[4.5rem]">
            Engenharia e <br className="hidden sm:block" />
            <span className="text-gradient-electric drop-shadow-sm">inteligência aplicada a negócios.</span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed font-light">
            Soluções em infraestrutura, automação e agentes de IA para atendimento e vendas no WhatsApp.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-3">
            {pillars.map((p, i) => (
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                key={p} 
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm shadow-sm"
              >
                {p}
              </motion.span>
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild variant="whatsapp" size="lg" className="h-14 px-8 text-base shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/40 transition-all duration-300">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5 mr-2" />
                Conversar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg" className="h-14 px-8 text-base border-white/20 hover:bg-white/10 transition-all duration-300">
              <a href="#solucoes">
                Conhecer soluções
                <ArrowRight className="size-5 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Photo & Floating Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} 
          className="relative mx-auto w-full max-w-[400px] lg:max-w-none lg:w-[420px] mt-10 lg:mt-0"
        >
          {/* Main Photo Card */}
          <div className="relative z-10 aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl shadow-black/50 bg-white/5 backdrop-blur-xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img 
              src={profile} 
              alt="Fernando Carneiro — Engenheiro da Computação" 
              width={760} 
              height={950} 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none z-20" />
          </div>

          {/* Premium Glow Behind Photo */}
          <div className="absolute inset-0 bg-gradient-electric rounded-[3rem] blur-[80px] opacity-40 mix-blend-screen -z-10 animate-pulse-slow" />

          {/* Floating Cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: card.delay, ease: "easeOut" }}
              className={`absolute z-20 hidden md:flex items-center gap-3 rounded-2xl border border-white/15 bg-background/60 backdrop-blur-xl p-3.5 shadow-xl shadow-black/20 hover:border-white/30 hover:bg-background/80 transition-colors ${card.position}`}
              style={{
                animation: `float ${4 + i}s ease-in-out infinite ${i * 0.5}s`
              }}
            >
              <div className="size-10 rounded-xl bg-electric/20 text-electric-foreground grid place-items-center border border-white/10">
                <card.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">{card.title}</p>
                <p className="text-[11px] text-white/60 font-medium">{card.desc}</p>
              </div>
            </motion.div>
          ))}
          
        </motion.div>
      </div>
      
      {/* Global CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
