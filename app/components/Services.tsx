"use client";

import { motion } from "framer-motion";
import { Pencil, Package } from "lucide-react";

const services = [
  {
    icon: Pencil,
    title: "Custom Product Design",
    description:
      "Full 3D development cycle from concept sketches to production-ready files. Blender modeling, print/mill-ready exports, and design iteration.",
  },
  {
    icon: Package,
    title: "Maker Jobs",
    description:
      "Small-batch production, prototyping, and assembly for local Singapore clients. If you need something built, I can build it.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Services() {
  return (
    <section id="contact" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — services */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span
              className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase mb-3 block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s work together
            </span>
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.95] text-slate-900"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s Build{" "}
              <span className="text-[#0ea5e9]">Something Together</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
              Available for select freelance projects and commissions. From concept design to
              physical fabrication — I do both.
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex gap-5 items-start"
                >
                  <div className="bg-[#0ea5e9]/10 p-3 rounded-xl text-[#0ea5e9] shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4
                      className="font-black uppercase tracking-widest text-sm mb-1 text-slate-900"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {s.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right — contact form */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div className="absolute -top-5 right-6 bg-[#f97316] px-5 py-1.5 rounded-lg text-white font-black uppercase text-xs tracking-widest shadow-lg z-10"
            style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Open for Work
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
            <form
              action="https://formspree.io/f/mreynvnn"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs text-slate-500 font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0ea5e9]/60 focus:bg-white focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs text-slate-500 font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0ea5e9]/60 focus:bg-white focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs text-slate-500 font-semibold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What do you want to build?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0ea5e9]/60 focus:bg-white focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0ea5e9] text-white py-4 rounded-lg font-black uppercase tracking-[0.15em] hover:bg-[#0284c7] hover:shadow-lg hover:shadow-sky-200 active:scale-[0.98] transition-all text-sm"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Send Message
              </button>

              <p className="text-center text-slate-400 text-xs">
                Or email me directly at{" "}
                <a href="mailto:hello@ethantan.dev" className="text-[#0ea5e9] hover:underline">
                  hello@ethantan.dev
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
