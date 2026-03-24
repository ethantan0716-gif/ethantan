"use client";

import { motion } from "framer-motion";
import { Box, Printer, Wrench, Code2 } from "lucide-react";

const skills = [
  {
    icon: Box,
    name: "Blender",
    description:
      "3D modeling and product visualization. I use Blender to design parts before they're printed or milled — everything from fingerboard ramps to shop display stands.",
    tags: ["3D Modeling", "Rendering", "Product Viz"],
    color: "#81ecff",
  },
  {
    icon: Printer,
    name: "3D Printing",
    description:
      "Running Bambu Labs machines with exotic filaments for structural and aesthetic parts. I optimize prints for strength, speed, and material efficiency.",
    tags: ["Bambu Labs", "FDM", "Exotic Filaments"],
    color: "#ff7520",
  },
  {
    icon: Wrench,
    name: "CNC Milling",
    description:
      "Subtractive manufacturing with Stepcraft systems. I work in Cut2D to create CAM toolpaths for timber, plastics, and composite materials.",
    tags: ["Stepcraft", "Cut2D", "Timber & Plastics"],
    color: "#81ecff",
  },
  {
    icon: Code2,
    name: "React / Next.js",
    description:
      "Full-stack web development with TypeScript, Prisma, PostgreSQL, Auth.js, and Pusher. I build and deploy real applications — not just landing pages.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    color: "#ff7520",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
      >
        <div>
          <span
            className="text-[#81ecff] text-xs font-bold tracking-[0.3em] uppercase mb-3 block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What I work with
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Tools of the Trade
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="h-px w-32 bg-[#46484a]/30" />
          <span className="text-[#747578] text-xs uppercase tracking-widest whitespace-nowrap">
            Digital × Physical
          </span>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="group bg-[#111416] p-7 rounded-2xl border border-[#46484a]/20 hover:border-[#81ecff]/30 transition-all duration-500 flex flex-col"
              style={{ borderColor: undefined }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${skill.color}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${skill.color}15` }}
              >
                <Icon size={22} style={{ color: skill.color }} />
              </div>

              <h3
                className="text-xl font-black uppercase tracking-tight mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {skill.name}
              </h3>

              <p className="text-[#747578] text-sm leading-relaxed mb-6 flex-grow">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide border"
                    style={{
                      color: skill.color,
                      borderColor: `${skill.color}30`,
                      backgroundColor: `${skill.color}10`,
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
