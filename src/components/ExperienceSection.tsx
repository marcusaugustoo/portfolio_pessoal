import { motion } from "framer-motion";

interface Experience {
  period: string;
  title: string;
  description: string;
  techs?: string[];
}

const experiences: Experience[] = [
  {
    period: "Agosto 2024 - Dezembro 2024",
    title: "Sistema de Gerenciamento de Fluxo de Trabalho Militar",
    description:
      "Projeto desenvolvido na disciplina de Construção de Software da Faculdade de Computação da UFMS, com foco na criação de um sistema para organização e gerenciamento de escalas militares do 18º Batalhão de Campo Grande, MS. Atuei como desenvolvedor front-end, contribuindo para a construção de interfaces estruturadas e funcionais. O projeto encontra-se atualmente inativo.",
    techs: ["HTML", "CSS", "JavaScript", "Java"],
  },
  {
    period: "Abril 2025 - Junho 2025",
    title: "Designer Trainee – Mega Jr.",
    description:
    "Ingressei na Empresa Júnior como Designer, no qual fiz a prototipação de uma TO-DO LIST durante o processo seletivo, tanto versão web quanto versão mobile."
  },
  {
    period: "Agosto 2025 - Presente",
    title: "Gestor de Administração de Pessoas e Processos – Mega Jr.",
    description:
    "Atualmente na Empresa Júnior da FACOM - UFMS, sendo responsável pela formalização e controle dos processos de entrada, permanência e desligamento de membros, manutenção da documentação e suporte administrativo à equipe. Também colaboro com a diretoria para estruturar práticas de gestão de pessoas mais claras e organizadas. Essa experiência tem fortalecido minhas habilidades em gestão de pessoas, organização administrativa e liderança de processos."
  },
];

const ExperienceSection = () => (
  <section id="experiências" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold font-display text-center mb-16 section-dot"
      >
        Experiências
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-8 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

              <span className="text-xs font-display text-primary tracking-wider">{exp.period}</span>
              <h3 className="text-lg font-bold mt-1 text-foreground">{exp.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
              {exp.techs && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.techs.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-muted text-primary font-display">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
