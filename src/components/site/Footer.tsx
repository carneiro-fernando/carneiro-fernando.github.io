import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN, whatsappLink } from "@/lib/contact";

const links = [
  { icon: MessageCircle, label: "WhatsApp", href: whatsappLink(), external: true },
  { icon: Mail, label: "E-mail", href: `mailto:${EMAIL}`, external: false },
  { icon: Linkedin, label: "LinkedIn", href: LINKEDIN, external: true },
  { icon: Github, label: "GitHub", href: GITHUB, external: true },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="relative size-9 rounded-lg bg-gradient-electric grid place-items-center text-electric-foreground font-mono shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]">
                FC
                <span className="absolute bottom-1 right-1 size-1.5 rounded-full bg-whatsapp" />
              </span>
              <span className="text-lg">Fernando Carneiro</span>
            </div>
            <p className="mt-5 text-xl md:text-2xl font-semibold tracking-tight max-w-xl leading-snug">
              Da infraestrutura à inteligência artificial:{" "}
              <span className="text-gradient-electric">tecnologia que resolve.</span>
            </p>
            <p className="mt-4 text-sm text-white/60 max-w-md">
              Engenheiro da Computação · 15+ anos em TI · Consultoria em IA, Automação e
              Infraestrutura.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Contato</p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                  >
                    <span className="size-9 rounded-lg border border-white/15 bg-white/5 grid place-items-center group-hover:bg-electric/20 group-hover:border-electric/30 transition-colors">
                      <l.icon className="size-4" />
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Stack</p>
            <div className="mt-4 flex flex-col gap-2">
              {["Python", "n8n", "OpenAI", "AWS", "Docker", "Linux", "Cisco", "Mikrotik"].map((tech) => (
                <span key={tech} className="text-sm text-white/80 hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Atende</p>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-white/80">Brasil inteiro</li>
              <li className="text-sm text-white/80">Remoto</li>
              <li className="text-sm text-white/80">On-site sob demanda</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col items-center justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-4 border border-white/10 rounded-full px-6 py-3 bg-white/5 backdrop-blur-sm">
            <span>Pronto para conversar?</span>
            <a 
              href={whatsappLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-whatsapp font-medium hover:text-whatsapp/80 transition-colors"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
          
          <div className="w-full flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/50 mt-4">
            <p>© {new Date().getFullYear()} Fernando Carneiro. Todos os direitos reservados.</p>
            <p>Engenheiro da Computação · UNIVESP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
