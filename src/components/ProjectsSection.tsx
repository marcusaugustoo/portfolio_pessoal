import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import projectCop15 from "@/assets/cop15/Home.png";
import zonas from "@/assets/cop15/zonas.png";
import PqCG from "@/assets/cop15/PqCG_.png";
import Animais from "@/assets/cop15/AnimaisMS.png";
import home from "@/assets/freteapp/home.jpeg"
import lancar from "@/assets/freteapp/lanca.jpeg"
import relatorio from "@/assets/freteapp/relatorio.jpeg"
import carregar from "@/assets/freteapp/carrega.jpeg"
import inicio from "@/assets/goplan/Início.png"
import apos from "@/assets/goplan/Apos_busca.png"
import seleciona from "@/assets/goplan/seleciona.jpeg"
import planilha from "@/assets/goplan/Planilha.png"
import concluido from "@/assets/goplan/Concluído.png"


interface Project {
  title: string;
  description: string;
  images: (string | null)[];
  link?: string;
  techs?: string[];
}

const projects: Project[] = [
  {
    title: "COP15",
    description:
    "Atuei como desenvolvedor front-end na criação da landing page da COP 15, projeto desenvolvido pela Mega Júnior para uma instituição internacional. Além disso, a participação no Integra e na FETEC, na UFMS, contribuiu para o fortalecimento das habilidades técnicas, do trabalho em equipe e da vivência em projetos reais.",
    images: [projectCop15, zonas, PqCG, Animais],
    link: "https://cop15.ufms.br/",
    techs: ["HTML", "React", "Tailwind CSS"],
  },
  {
    title: "FRETE APP",
    description:
    "Aplicativo de gerenciamento de fretes desenvolvido a partir de uma necessidade real. O projeto visa simplificar o controle financeiro e operacional, substituindo planilhas por um sistema centralizado e intuitivo.  Atuei como responsável pelo design e front-end, criando a interface e implementando um PWA Mobile First.  A primeira versão funcional foi entregue em menos de um mês e está em fase de testes. ",
    images: [carregar, home, lancar, relatorio],
    link: "https://gerenciamento-de-frete.vercel.app/",
    techs: ["React", "Tailwind CSS", "Python", "SQL"],
  },
  {
    title: "GO PLAN",
    description:
    "GoPlan é uma aplicação desktop para geração, gerenciamento e impressão de treinos personalizados, desenvolvida com foco em usabilidade e funcionamento offline.Atuei no design e desenvolvimento front-end, criando uma interface moderna e responsiva com React e TypeScript, integrada a um backend em Python por meio do Tauri. A aplicação permite gerar treinos com base em nível, objetivo e frequência, além de manter histórico e exportar para PDF.",
    images: [inicio, apos, seleciona, planilha, concluido],
    link: "https://github.com/marcusaugustoo/projeto-sistema-de-academia.git",
    techs: ["React", "Typescript", "Python", "Tauri"],
  },
  {
    title: "Sistema de Reconhecimento Facial (KD-Tree & KNN)",
    description:
      "Projeto acadêmico de Estrutura de Dados aplicado a Reconhecimento Facial, com foco em eficiência e escalabilidade.  Implementação de uma KD-Tree para busca em embeddings faciais de 128 dimensões e algoritmo KNN otimizado com Heap, desenvolvidos em C e integrados a uma API em Python.  O projeto reforça conceitos de estruturas de dados, busca em alta dimensionalidade e base algorítmica para sistemas de IA.",
    images: [null],
    link: "https://github.com/marcusaugustoo/face-recognition-kdtree.git",
    techs: ["C", "Python", "FaceAPI"],
  },
];

const ImageCarousel = ({ images, title }: { images: (string | null)[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted border border-border mb-4 group">
      {/* Current image */}
      {images[current] ? (
        <img src={images[current]!} alt={`${title} - ${current + 1}`} className="w-full h-full object-cover transition-opacity duration-300" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-muted-foreground text-xs font-display">//Em breve</span>
        </div>
      )}

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-primary/50"
          >
            <ChevronLeft className="w-4 h-4 text-primary" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-primary/50"
          >
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="rounded-lg border border-border bg-card p-6 glow-border hover:border-primary/40 transition-colors"
  >
    <h3 className="text-xl font-bold font-display text-primary text-center mb-3">{project.title}</h3>
    <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">{project.description}</p>

    <ImageCarousel images={project.images} title={project.title} />

    {project.techs && (
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {project.techs.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded bg-muted text-primary font-display">
            {tech}
          </span>
        ))}
      </div>
    )}

    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-xs text-primary hover:text-foreground transition-colors font-display"
      >
        <ExternalLink className="w-3 h-3" />
        Ver projeto
      </a>
    )}
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projetos" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold font-display text-center mb-16 section-dot"
      >
        Projetos
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
