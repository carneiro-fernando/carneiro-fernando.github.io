import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";
import NeuralBackground from "./NeuralBackground";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <NeuralBackground />
      
      {/* Cinematic glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-electric/10 blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 size-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
        <motion.div
          {...revealProps}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-12 md:p-20 text-primary-foreground shadow-primary border border-white/10"
        >
          {/* Inner card subtle effects */}
          <div className="absolute inset-0 bg-grid-fade pointer-events-none opacity-40" />
          <div className="absolute -top-32 -right-32 size-[500px] rounded-full bg-electric/30 blur-[80px] pointer-events-none mix-blend-screen" />
          <div className="absolute -bottom-32 -left-32 size-[400px] rounded-full bg-background/40 blur-[60px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 mb-8">
              <span className="size-1.5 rounded-full bg-whatsapp animate-pulse" />
              Vamos conversar
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-[1.1]">
              Vamos construir algo <span className="text-gradient-electric drop-shadow-sm">inteligente</span> para seu negócio.
            </h2>
            
            <p className="mt-8 text-white/80 text-lg md:text-xl font-medium max-w-2xl text-balance leading-relaxed">
              Infraestrutura, automação e IA aplicadas com engenharia real.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/40 transition-all duration-300">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5 mr-2" />
                  Conversar no WhatsApp
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base border-white/20 hover:bg-white/10 transition-all duration-300">
                <a href="#solucoes">
                  Conhecer soluções
                  <ArrowRight className="size-5 ml-2" />
                </a>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-white/50 font-medium">
              Resposta rápida. Sem compromisso comercial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
