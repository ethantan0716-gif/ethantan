"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import Image from "next/image";

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
            className="text-lg md:text-xl text-stone-500 max-w-xl mb-10 leading-relaxed"
          >
            16-year-old maker from{" "}
            <span className="text-stone-900 font-semibold">Singapore</span>{" "}
            who builds things with 3D printers, CNC mills, and code — and somehow turned a fingerboard hobby into an actual business.
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#e8ddd5]">
            <Image
              src="/images/ethan.jpg"
              alt="Ethan Tan — maker and builder"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
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
