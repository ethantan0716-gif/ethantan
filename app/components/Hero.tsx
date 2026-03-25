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
            className="inline-flex items-center gap-2 bg-[#ff7520]/10 border border-[#ff7520]/20 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff7520] animate-pulse" />
            <span
              className="text-[#ff7520] text-xs font-extrabold tracking-[0.2em] uppercase"
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
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Maker.
            <br />
            <span className="text-[#81ecff] italic">Builder.</span>
            <br />
            Creator.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-[#747578] max-w-xl mb-8 leading-relaxed"
          >
            Growing up around my father&apos;s leather studio got me really into making things from a young age.
            These days I channel that into building with CNC mills, 3D printers, and code.
            Based in{" "}
            <span className="text-[#eeeef0] font-semibold">Singapore</span>,
            studying at{" "}
            <span className="text-[#eeeef0] font-semibold">Whitley Secondary School</span>.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base text-[#747578] max-w-xl mb-10 leading-relaxed"
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
            <div className="flex items-center gap-2 bg-[#111416] px-4 py-2.5 rounded-xl border border-[#46484a]/30">
              <MapPin size={14} className="text-[#81ecff]" />
              <span
                className="text-[#eeeef0] text-sm font-semibold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Singapore
              </span>
            </div>
            <div className="flex items-center gap-2 bg-[#111416] px-4 py-2.5 rounded-xl border border-[#46484a]/30">
              <GraduationCap size={14} className="text-[#ff7520]" />
              <span
                className="text-[#eeeef0] text-sm font-semibold uppercase tracking-widest"
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
          <div className="absolute -inset-4 bg-[#81ecff]/10 blur-3xl rounded-full group-hover:bg-[#81ecff]/20 transition-all duration-700" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#1d2022] border border-[#46484a]/30">
            {/* Placeholder — swap with real photo */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[#81ecff]/10 border-2 border-[#81ecff]/30 flex items-center justify-center">
                <span
                  className="text-4xl font-black text-[#81ecff]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  ET
                </span>
              </div>
              <p className="text-[#46484a] text-xs uppercase tracking-widest text-center px-8">
                Drop your photo in{" "}
                <code className="text-[#81ecff]">public/images/ethan.jpg</code>
                <br />
                and replace this block
              </p>
            </div>

            {/* ID Badge */}
            <div className="absolute top-4 right-4 bg-[#1d2022]/80 backdrop-blur px-3 py-1 rounded-full border border-[#81ecff]/20">
              <span className="text-[10px] text-[#81ecff] uppercase tracking-tighter font-bold">
                ID: ETHAN_TAN
              </span>
            </div>
          </div>

          {/* Callout card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-[#1d2022] p-5 rounded-xl border border-[#46484a]/30 shadow-2xl hidden md:block">
            <p className="text-[10px] text-[#747578] uppercase tracking-widest mb-1">
              Currently
            </p>
            <p
              className="text-[#eeeef0] font-bold uppercase text-sm"
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
