import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-line px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-display italic text-2xl mb-3">Origem</p>
          <p className="text-sm text-ink/60 max-w-xs">
            Cozinha autoral da Mata Atlântica. Resende, Rio de Janeiro.
          </p>
        </div>
        <div className="text-sm text-ink/70 space-y-2">
          <p className="eyebrow text-ink/40 mb-3">Navegação</p>
          <a href="#sobre" className="block hover:text-gold transition-colors">Sobre</a>
          <a href="#menu" className="block hover:text-gold transition-colors">Menu degustação</a>
          <a href="#galeria" className="block hover:text-gold transition-colors">Galeria</a>
          <a href="#localizacao" className="block hover:text-gold transition-colors">Localização</a>
        </div>
        <div className="text-sm text-ink/70 space-y-3">
          <p className="eyebrow text-ink/40 mb-3">Contato</p>
          <p>Estrada da Serra, 1200 — Resende, RJ</p>
          <p>+55 24 99999-0000</p>
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram size={18} strokeWidth={1.3} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
              <Facebook size={18} strokeWidth={1.3} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-line flex flex-col md:flex-row justify-between text-xs text-ink/40 gap-2">
        <span>© {new Date().getFullYear()} Origem. Todos os direitos reservados.</span>
        <span>Terça a domingo, 19h—00h</span>
      </div>
    </footer>
  );
}
