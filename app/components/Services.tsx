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
              className="inline-block text-[#d97706] text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-amber-50 border border-amber-100"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Let&apos;s work together
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-stone-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Let&apos;s Build{" "}
              <span className="text-[#d97706]">Something Together</span>
            </h2>
            <p className="text-stone-500 text-lg mb-12 max-w-md leading-relaxed">
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
                  <div className="bg-amber-50 p-3 rounded-2xl text-[#d97706] shrink-0 border border-amber-100">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-stone-900 mb-1"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {s.title}
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{s.description}</p>
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
          <div
            className="absolute -top-5 right-6 bg-[#f97316] px-5 py-1.5 rounded-full text-white font-semibold text-xs shadow-lg z-10"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Open for Work
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#e8ddd5] shadow-lg">
            <form
              action="https://formspree.io/f/mreynvnn"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs text-stone-500 font-medium"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-amber-50/50 border border-[#e8ddd5] rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#d97706]/60 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs text-stone-500 font-medium"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-amber-50/50 border border-[#e8ddd5] rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#d97706]/60 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs text-stone-500 font-medium"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What do you want to build?"
                  className="w-full bg-amber-50/50 border border-[#e8ddd5] rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#d97706]/60 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d97706] text-white py-4 rounded-xl font-semibold hover:bg-[#b45309] hover:shadow-lg hover:shadow-amber-200 active:scale-[0.98] transition-all text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Send Message
              </button>

              <p className="text-center text-stone-400 text-xs">
                Or email me directly at{" "}
                <a href="mailto:hello@ethantan.dev" className="text-[#d97706] hover:underline">
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
