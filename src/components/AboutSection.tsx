import { motion } from "framer-motion";
import profileAbout from "@/assets/profile-about.jpg";
import codeIcon from "@/assets/_.svg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 },
};

const AboutSection = () => (
  <section id="sobre-mim" className="py-24 px-6">
    

    <div className="max-w-4xl mx-auto">
      <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold font-display text-center mb-16 section-dot">
        Sobre mim
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-48 h-64 md:w-56 md:h-72 rounded-lg overflow-hidden border border-border glow-border flex-shrink-0"
        >
          <img src={profileAbout} alt="Marcus Augusto" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-4">


          <p className="text-muted-foreground leading-relaxed">
            Estudante de <span className="text-primary font-semibold">Ciência da Computação</span> pela Faculdade de Computação da UFMS.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">Desenvolvedor Front-end</span> com foco em produzir interfaces modernas 
e responsivas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Atuo desde o design no <span className="text-foreground font semibold">Figma</span> até a implementação em <span className="text-foreground font semibold">React</span>, 
sempre priorizando usabilidade, organização visual 
e boas práticas de código.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Busco evoluir constantemente e aplicar design e tecnologia 
  para resolver problemas reais.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
