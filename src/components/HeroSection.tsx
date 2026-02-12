import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profileHero from "@/assets/profile-hero.jpg";

const skills = [
  "FIGMA",
  "UI&UX DESIGN",
  "PROTOTIPAÇÃO",
  "WIREFRAMES",
  "HTML",
  "TAILWIND CSS",
  "JAVASCRIPT",
  "REACT + VITE",
  "DESIGN RESPONSIVO",
  "GIT&GITHUB",
  "DEPLOY",
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <span className="font-display text-sm text-primary tracking-wider">
        {"<M.A />"}
      </span>

      <div className="hidden md:flex gap-8">
        {["Início", "Sobre mim", "Experiências", "Projetos", "Contato"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="font-display text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  </nav>
);

const HeroSection = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const firstItem = ticker.children[0] as HTMLElement;
    if (!firstItem) return;

    const viewportCenter = window.innerWidth / 2;
    const itemCenter =
      firstItem.offsetLeft + firstItem.offsetWidth / 2;

    const offset = viewportCenter - itemCenter;

    ticker.style.setProperty("--start-x", `${offset}px`);

  }, []);

  return (
    <section
      id="início"
      className="relative min-h-screen flex items-center justify-center dot-pattern overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
            <img
              src={profileHero}
              alt="Marcus Augusto"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="text-muted-foreground text-sm font-display mb-2">
            // olá, eu sou
          </p>

          <h1 className="flex flex-col items-center md:items-start text-4xl md:text-6xl font-bold font-display leading-tight">
            <span>
              Designer <span className="text-primary glow-text">UI/UX</span>
            </span>

            <span className="text-muted-foreground text-xl md:text-2xl opacity-70">
              &
            </span>

            <span>
              Desenvolvedor{" "}
              <span className="text-primary glow-text">Frontend</span>
            </span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground font-display">
            String name = "Marcus Augusto";
          </p>
        </motion.div>
      </div>

      {/* Skills ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-border bg-secondary/50 backdrop-blur-sm overflow-hidden">
        <div ref={tickerRef} className="flex w-max animate-ticker">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-6 text-xs font-display text-primary/70 tracking-widest whitespace-nowrap"
            >
              {skill}
              <span className="text-muted-foreground">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Navbar, HeroSection };
