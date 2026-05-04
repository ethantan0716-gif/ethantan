"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Globe } from "lucide-react";

const projects = [
  {
    id: "brickyfb",
    title: "BrickyFB",
    category: "Active Business",
    tag: "Etsy Shop",
    description:
      "High-performance fingerboard accessories, ramps, and custom-tuned components. Shipping globally from Singapore — what started as a hobby became a real business.",
    icon: ShoppingBag,
    color: "#f97316",
    link: "https://brickyfb.etsy.com",
    linkLabel: "Visit Shop",
    github: null,
  },
  {
    id: "dchat",
    title: "DChat",
    category: "Web App",
    tag: "Full-Stack",
    description:
      "A real-time direct messaging app built with Next.js, TypeScript, PostgreSQL, Pusher, and Google OAuth. Deployed on Vercel.",
    icon: Globe,
    color: "#d97706",
    link: "https://dchat-nine.vercel.app",
    linkLabel: "Live Demo",
    github: "https://github.com/ethantan0716-gif/dchat",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 bg-amber-50/50 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-14 text-center"
        >
          <span
            className="inline-block text-[#d97706] text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-white border border-amber-100"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Real projects. Real results.
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-stone-900"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            My <span className="text-[#f97316]">Projects</span>
          </h2>
        </motion.div>

        {/* Two equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#e8ddd5] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col min-h-[360px]"
              >
                {/* Subtle gradient tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(ellipse at top right, ${project.color}08, transparent 70%)` }}
                />

                {/* Icon watermark */}
                <div className="absolute top-6 right-6 opacity-6 group-hover:opacity-10 transition-opacity">
                  <Icon size={64} style={{ color: project.color }} />
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-6">
                    <span
                      className="px-3 py-1 text-white text-xs font-semibold rounded-full"
                      style={{ backgroundColor: project.color, fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full border border-[#e8ddd5]"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl font-extrabold text-stone-900 mb-3"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-500 leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-5 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-2.5 transition-all"
                        style={{ color: project.color, fontFamily: "var(--font-plus-jakarta)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel} <ArrowUpRight size={15} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-1.5 text-stone-400 hover:text-stone-700 font-medium text-sm transition-colors"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
