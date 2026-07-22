import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Github, ChevronLeft, ChevronRight } from "lucide-react";
import projectCop15 from "@/assets/cop15/Home.png";
import zonas from "@/assets/cop15/zonas.png";
import PqCG from "@/assets/cop15/PqCG_.png";
import Animais from "@/assets/cop15/AnimaisMS.png";
import home from "@/assets/freteapp/home.jpeg";
import lancar from "@/assets/freteapp/lanca.jpeg";
import relatorio from "@/assets/freteapp/relatorio.jpeg";
import carregar from "@/assets/freteapp/carrega.jpeg";
import inicio from "@/assets/goplan/Início.png";
import apos from "@/assets/goplan/Apos_busca.png";
import seleciona from "@/assets/goplan/seleciona.jpeg";
import planilha from "@/assets/goplan/Planilha.png";
import concluido from "@/assets/goplan/Concluído.png";
import hortisys from "@/assets/hortisys.jpg";
import secomp1 from "@/assets/secomp/WhatsApp Image 2026-07-22 at 19.47.00.jpeg";
import secomp2 from "@/assets/secomp/WhatsApp Image 2026-07-22 at 19.47.00 (1).jpeg";
import secomp3 from "@/assets/secomp/WhatsApp Image 2026-07-22 at 19.47.00 (2).jpeg";
import erad1 from "@/assets/erad/WhatsApp Image 2026-07-22 at 19.47.38.jpeg";
import erad2 from "@/assets/erad/WhatsApp Image 2026-07-22 at 19.47.38 (1).jpeg";
import erad3 from "@/assets/erad/WhatsApp Image 2026-07-22 at 19.47.38 (2).jpeg";

interface Project {
  title: string;
  description: string;
  images: (string | null)[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "COP15",
    description:
      "Atuei como desenvolvedor front-end na criação da landing page da COP 15, projeto desenvolvido pela Mega Júnior para uma instituição internacional. Além disso, participei no Integra e na FETEC, na UFMS para a apresentação do mesmo.",
    images: [projectCop15, zonas, PqCG, Animais],
    link: "https://cop15.ufms.br/",
  },
  {
    title: "SECOMP 2026",
    description:
      "Atuei como designer e desenvolvedor front-end na criação da landing page da Secomp de 2026, projeto desenvolvido pela Mega Júnior para o evento de computação da UFMS.",
    images: [secomp1, secomp2, secomp3],
    link: "https://facom.ufms.br/secomp/",
  },
  {
    title: "ERAD-CO 2026",
    description:
      "Atuei como designer e desenvolvedor front-end na criação da landing page da ERAD - CO de 2026, projeto desenvolvido pela Mega Júnior para o evento de computação da UFMS.",
    images: [erad1, erad2, erad3],
    link: "https://www.facom.ufms.br/erad-co/",
  },
  {
    title: "Frete App",
    description:
      "Aplicativo de gerenciamento de fretes desenvolvido a partir de uma necessidade real, visando simplificar o controle financeiro e operacional, substituindo planilhas por um sistema centralizado e intuitivo. Atuei como responsável pelo design e front-end.",
    images: [carregar, home, lancar, relatorio],
    link: "https://gerenciamento-de-frete.vercel.app/",
  },
  {
    title: "Hortisys",
    description:
      "Plataforma para gerenciamento de hortifrutis, desde o cadastro até o gerenciamento completo. Tive participação no design e front-end.",
    images: [hortisys],
    link: "https://www.hortisys.com.br/",
  },
  {
    title: "GoPlan",
    description:
      "Aplicação desktop para geração, gerenciamento e impressão de treinos personalizados, desenvolvida com foco em usabilidade e funcionamento offline. Atuei no design e desenvolvimento front-end.",
    images: [inicio, apos, seleciona, planilha, concluido],
    link: "https://github.com/marcusaugustoo/projeto-sistema-de-academia.git",
    github: "https://github.com/marcusaugustoo/projeto-sistema-de-academia.git"
  }
];

const ImageCarousel = ({ images, title }: { images: (string | null)[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5 mb-6 group rounded-t-lg">
      {images[current] ? (
        <img src={images[current]!} alt={`${title} - ${current + 1}`} className="w-full h-full object-cover transition-opacity duration-300" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white/40 text-sm">Imagem não disponível</span>
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
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
    className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
  >
    <ImageCarousel images={project.images} title={project.title} />
    
    <div className="flex flex-col flex-1 px-6 pb-6">
      <h3 className="text-2xl font-bold font-display text-white mb-3">{project.title}</h3>
      <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      <div className="flex items-center gap-4 mt-auto">
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Globe className="w-5 h-5" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projetos" className="py-24">
    <div className="max-w-6xl mx-auto px-6 w-full">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold font-display text-white mb-16"
      >
        Projetos
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
