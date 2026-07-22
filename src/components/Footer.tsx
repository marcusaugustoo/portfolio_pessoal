import { Instagram, Linkedin, Mail, Github } from "lucide-react";
import logo from "@/assets/logo_ma_redondo.svg";

const Footer = () => {
  return (
    <footer id="contato" className="bg-white/5 py-12 mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt="MA Logo" className="h-14 w-auto" />
        </div>

        <div className="flex items-center gap-6 text-white/60 mb-8">
          <a href="https://instagram.com/marcusaugustooo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/marcus-augusto-madureira" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:marcusauguustoo@gmail.com" className="hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com/marcusaugustoo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-white/40 text-sm">
          © 2026 | Marcus Augusto F. Madureira
        </div>
      </div>
    </footer>
  );
};

export default Footer;
