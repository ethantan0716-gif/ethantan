"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Globe, Home, Wrench, Layers, Waves } from "lucide-react";

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
    size: "large",
  },
  {
    id: "dchat",
    title: "DChat",
    category: "Web App",
    tag: "Full-Stack",
    description:
      "A real-time direct messaging app built with Next.js, TypeScript, PostgreSQL, Pusher, and Google OAuth. Deployed on Vercel.",
    icon: Globe,
    color: "#0ea5e9",
    link: "https://dchat-nine.vercel.app",
    linkLabel: "Live Demo",
    github: "https://github.com/ethantan0716-gif/dchat",
    size: "medium",
  },
  {
    id: "home-repairs",
    title: "Home Fixes",
    category: "Personal Maker",
    tag: "3D Printed",
    description:
      "When something breaks at home, I print a replacement. Water filter stand, aquarium filter adapter, remote control holder — practical solutions designed from scratch.",
    icon: Home,
    color: "#0ea5e9",
    link: null,
    size: "small",
  },
  {
    id: "tool-holders",
    title: "Shop Fixtures",
    category: "Physical Build",
    tag: "CNC Milled",
    description:
      "Custom CNC-milled tool holders and product display stands for shop fronts. Designed in Blender, cut on Stepcraft, finished by hand.",
    icon: Wrench,
    color: "#f97316",
    link: null,
    size: "small",
  },
  {
    id: "fb-molds",
    title: "Fingerboard Molds",
    category: "Production Tool",
    tag: "3D Printed",
    description:
      "3D-printed molds for casting fingerboard decks. Precision tolerances required — every millimetre matters.",
    icon: Layers,
    color: "#0ea5e9",
    link: null,
    size: "small",
  },
  {
    id: "pro-ramps",
    title: "Pro Ramps",
    category: "Physical Build",
    tag: "Concrete + FDM",
    description:
      "Fingerboard ramps with integrated grinding rails. Concrete poured into 3D-printed formwork. About 14 hours from design to finished product.",
    icon: Waves,
    color: "#f97316",
    link: null,
    size: "small",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Projects() {
  const large = projects.find((p) => p.size === "large")!;
  const medium = projects.find((p) => p.size === "medium")!;
  const smalls = projects.filter((p) => p.size === "small");

  return (
    <section id="portfolio" className="py-24 bg-slate-50 px-6 md:px-8">
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
            className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase mb-3 block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Real projects. Real results.
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Project{" "}
            <span className="text-[#f97316]">Vault</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* BrickyFB — large */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-orange-200 transition-all duration-300 min-h-[420px] flex flex-col justify-end p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 to-transparent" />
            <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#f97316]/8 flex items-center justify-center">
              <ShoppingBag size={40} className="text-[#f97316]/30" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#f97316] text-white text-[10px] font-black uppercase rounded-full" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {large.category}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-semibold uppercase rounded-full border border-slate-200" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {large.tag}
                </span>
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-3 text-slate-900" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {large.title}
              </h3>
              <p className="text-slate-500 max-w-md mb-6 leading-relaxed">
                {large.description}
              </p>
              {large.link && (
                <a
                  href={large.link}
                  className="inline-flex items-center gap-2 text-[#f97316] font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {large.linkLabel} <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </motion.div>

          {/* DChat — medium */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-sky-200 transition-all duration-300 min-h-[420px] flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-transparent" />
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-[#0ea5e9]/8 flex items-center justify-center">
              <Globe size={32} className="text-[#0ea5e9]/30" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-[10px] font-black uppercase rounded-full border border-[#0ea5e9]/20" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {medium.category}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-semibold uppercase rounded-full border border-slate-200" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {medium.tag}
                </span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-slate-900" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {medium.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {medium.description}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={medium.link!}
                  className="inline-flex items-center gap-1.5 text-[#0ea5e9] font-bold uppercase tracking-widest text-xs hover:gap-2.5 transition-all"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {medium.linkLabel} <ArrowUpRight size={14} />
                </a>
                {medium.github && (
                  <a
                    href={medium.github}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-700 font-bold uppercase tracking-widest text-xs transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Small project cards */}
          {smalls.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.05 * i }}
                className="md:col-span-3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${project.color}12` }}
                >
                  <Icon size={18} style={{ color: project.color }} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: project.color, fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {project.tag}
                  </span>
                </div>
                <h3
                  className="text-lg font-black uppercase tracking-tight mb-2 text-slate-900"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-grow">
                  {project.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
