import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#cases", label: "Cases" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Processo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -24, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-elegant" : "bg-transparent border-b border-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-bold transition-transform hover:scale-[1.02]">
          <span className="relative size-10 rounded-xl bg-gradient-to-br from-electric to-primary grid place-items-center text-white text-sm shadow-glow font-mono border border-white/10">
            FC
            <span className="absolute -bottom-1 -right-1 size-3 rounded-full bg-whatsapp border-2 border-background animate-pulse shadow-sm" />
          </span>
          <span className={`hidden sm:inline tracking-tight text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
            Fernando Carneiro
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-white/70 hover:text-white hover:bg-white/10"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex">
          <Button asChild variant="whatsapp" className="h-10 px-5 rounded-full shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/40 transition-all duration-300 border border-whatsapp/20 font-semibold">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4 mr-2" />
              Conversar
            </a>
          </Button>
        </div>
        
        <button 
          onClick={() => setOpen((v) => !v)} 
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"}`} 
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
    </motion.header>
  );
}
