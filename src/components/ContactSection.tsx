import { motion } from "framer-motion";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

const contacts = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/marcus-augusto-ferreira-madureira/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/marcusaugustooo/" },
  { icon: Github, label: "GitHub", href: "https://github.com/marcusaugustoo" },
  { icon: Mail, label: "Email", href: "mailto:marcusauguustoo@gmail.com" },
];

const ContactSection = () => (
  <section id="contato" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold font-display mb-4 section-dot"
      >
        Contato
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground mb-12"
      >
        Me contate ou me siga nas redes sociais
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {contacts.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:border-primary/40 hover:scale-105 transition-all glow-border group"
          >
            <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-display text-muted-foreground group-hover:text-foreground transition-colors">
              {label}
            </span>
          </a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-xs text-muted-foreground font-display"
      >
        © 2026 | Marcus A. F. Madureira
      </motion.p>
    </div>
  </section>
);

export default ContactSection;
