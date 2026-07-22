import { motion } from "framer-motion";
import { Download, Instagram, Linkedin, Mail, Github } from "lucide-react";
import logo from "@/assets/logo_ma_redondo.svg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="MA Logo" className="h-10 w-auto" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {["Sobre mim", "Projetos", "Contato"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
        
        <a
          href="/Marcus_Madureira_CV.docx.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-1.5 rounded bg-primary/20 hover:bg-primary/30 text-primary transition-colors text-sm font-medium"
        >
          CV <Download className="w-4 h-4" />
        </a>
      </div>
    </div>
  </nav>
);

const HeroSection = () => {
  return (
    <section
      id="sobre-mim"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-start gap-12 md:gap-24">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white mb-6">
            Marcus
            <br />
            Augusto.
          </h1>
          <div className="w-12 h-1 bg-white mb-12"></div>
          
          <div className="flex items-center gap-6 text-white/70">
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
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 mt-8 md:mt-0"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-6">
            Designer UI/UX & Dev Front-end
          </h2>
          
          <div className="text-white/70 space-y-6 leading-relaxed">
            <p>
              Estudante de Ciência da Computação pela Faculdade de Computação da UFMS.
            </p>
            <p>
              Atuo desde o design no Figma até a implementação, sempre priorizando usabilidade, organização visual e boas práticas de código.
            </p>
            <p>
              Busco evoluir constantemente e aplicar design e tecnologia para resolver problemas reais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Navbar, HeroSection };
