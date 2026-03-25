"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 max-w-7xl mx-auto pt-28 pb-20"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
            <span
              className="text-[#f97316] text-xs font-extrabold tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Available for work
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 uppercase text-slate-900"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Maker.
            <br />
            <span className="text-[#0ea5e9] italic">Builder.</span>
            <br />
            Creator.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-slate-500 max-w-xl mb-8 leading-relaxed"
          >
            Growing up around my father&apos;s leather studio got me really into making things from a young age.
            These days I channel that into building with CNC mills, 3D printers, and code.
            Based in{" "}
            <span className="text-slate-900 font-semibold">Singapore</span>,
            studying at{" "}
            <span className="text-slate-900 font-semibold">Whitley Secondary School</span>.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base text-slate-500 max-w-xl mb-10 leading-relaxed"
          >
            When I&apos;m not in the workshop or writing code, I&apos;m usually practicing piano or playing
            football for fun, or messing around with fingerboards — which eventually turned into a real business.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <MapPin size={14} className="text-[#0ea5e9]" />
              <span
                className="text-slate-700 text-sm font-semibold"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Singapore
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <GraduationCap size={14} className="text-[#f97316]" />
              <span
                className="text-slate-700 text-sm font-semibold"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Age 16
              </span>
            </div>
          </motion.div>
        </div>

        {/* Photo / Visual */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-4 bg-[#0ea5e9]/8 blur-3xl rounded-full group-hover:bg-[#0ea5e9]/15 transition-all duration-700" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
            {/* Placeholder — swap with real photo */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[#0ea5e9]/10 border-2 border-[#0ea5e9]/20 flex items-center justify-center">
                <span
                  className="text-4xl font-black text-[#0ea5e9]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  ET
                </span>
              </div>
              <p className="text-slate-400 text-xs uppercase tracking-widest text-center px-8">
                Drop your photo in{" "}
                <code className="text-[#0ea5e9]">public/images/ethan.jpg</code>
                <br />
                and replace this block
              </p>
            </div>

            {/* ID Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-slate-200">
              <span className="text-[10px] text-[#0ea5e9] uppercase tracking-tighter font-bold">
                ID: ETHAN_TAN
              </span>
            </div>
          </div>

          {/* Callout card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-5 rounded-xl border border-slate-200 shadow-lg hidden md:block">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">
              Currently
            </p>
            <p
              className="text-slate-900 font-bold text-sm"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Open to commissions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
