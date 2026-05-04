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
              className="text-[#f97316] text-xs font-semibold"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Available for work
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-6xl md:text-8xl font-extrabold leading-[0.95] mb-6 text-stone-900"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Maker.
            <br />
            <span className="text-[#d97706]">Builder.</span>
            <br />
            Creator.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-stone-500 max-w-xl mb-8 leading-relaxed"
          >
            Growing up around my father&apos;s leather studio got me really into making things from a young age.
            These days I channel that into building with CNC mills, 3D printers, and code.
            Based in{" "}
            <span className="text-stone-900 font-semibold">Singapore</span>,
            studying at{" "}
            <span className="text-stone-900 font-semibold">Whitley Secondary School</span>.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base text-stone-500 max-w-xl mb-10 leading-relaxed"
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
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#e8ddd5] shadow-sm">
              <MapPin size={14} className="text-[#d97706]" />
              <span className="text-stone-700 text-sm font-medium">Singapore</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#e8ddd5] shadow-sm">
              <GraduationCap size={14} className="text-[#f97316]" />
              <span className="text-stone-700 text-sm font-medium">Age 16</span>
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
          <div className="absolute -inset-4 bg-[#d97706]/8 blur-3xl rounded-full group-hover:bg-[#d97706]/14 transition-all duration-700" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-amber-50 border border-[#e8ddd5]">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[#d97706]/10 border-2 border-[#d97706]/20 flex items-center justify-center">
                <span
                  className="text-4xl font-extrabold text-[#d97706]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  ET
                </span>
              </div>
              <p className="text-stone-400 text-xs text-center px-8 leading-relaxed">
                Drop your photo in{" "}
                <code className="text-[#d97706]">public/images/ethan.jpg</code>
                <br />
                and replace this block
              </p>
            </div>
          </div>

          {/* Callout card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-5 rounded-2xl border border-[#e8ddd5] shadow-lg hidden md:block">
            <p className="text-xs text-stone-400 mb-1">Currently</p>
            <p className="text-stone-900 font-semibold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Open to commissions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
