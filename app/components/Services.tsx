"use client";

import { motion } from "framer-motion";
import { Cpu, Code } from "lucide-react";

const tracks = [
  {
    icon: Cpu,
    title: "Engineering Track",
    description:
      "Hands-on experience with 3D printing (Bambu Labs), CNC milling (Stepcraft), and Blender CAD. I design, fabricate, and iterate physical products end-to-end.",
  },
  {
    icon: Code,
    title: "Computing Track",
    description:
      "Full-stack development with Next.js, TypeScript, PostgreSQL, and Pusher. Built and deployed real applications — not just coursework projects.",
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
        {/* Left */}
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
              Get in Touch
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-stone-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Interested in{" "}
              <span className="text-[#d97706]">My Work?</span>
            </h2>
            <p className="text-stone-500 text-lg mb-12 max-w-md leading-relaxed">
              Whether you&apos;re an admissions interviewer, a potential collaborator, or someone
              who wants something built — feel free to reach out.
            </p>
          </motion.div>

          <div className="space-y-8">
            {tracks.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.title}
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
                      {t.title}
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{t.description}</p>
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
            className="absolute -top-5 right-6 bg-[#d97706] px-5 py-1.5 rounded-full text-white font-semibold text-xs shadow-lg z-10"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            EAE Portfolio 2025
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
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What would you like to discuss?"
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
                Or email me directly at ethantan0716@gmail.com
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
