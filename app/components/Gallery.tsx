"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  { src: "/gallery/01.jpg", alt: "Hardware parts tray with brass rivets and screws", caption: "Parts sorting tray — printed in PETG, organises Tauruscamp hardware components", category: "3D Print" },
  { src: "/gallery/02.jpg", alt: "3D printed tool holder with rivet setter", caption: "Tool holder — custom printed to keep assembly tools upright on the bench", category: "3D Print" },
  { src: "/gallery/03.jpg", alt: "Tauruscamp leather wallet on display stand", caption: "Wallet display stand — holds Tauruscamp wallets upright for product photography", category: "3D Print" },
  { src: "/gallery/04.jpg", alt: "3D printed wallet display stand", caption: "Wallet stand — minimal T-shape in matte black, designed for clean product shots", category: "3D Print" },
  { src: "/gallery/05.jpg", alt: "3D printed QR code product display holder", caption: "QR display holder — black body with orange accent frame, shows Tauruscamp product QR codes", category: "3D Print" },
  { src: "/gallery/06.jpg", alt: "QR display holder with product card being inserted", caption: "QR holder in use — inserting a Tauruscamp product QR code card at point of sale", category: "3D Print" },
  { src: "/gallery/07.jpg", alt: "Two Tauruscamp QR display holders with product cards", caption: "Product lineup — QR holders displaying 'base' and 'grain' Tauruscamp wallet variants", category: "3D Print" },
];

const categoryColors: Record<string, string> = {
  "3D Print": "#0ea5e9",
  CNC: "#f97316",
  Blender: "#8b5cf6",
  "Physical Build": "#10b981",
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 px-6 md:px-8">
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
              className="inline-block text-[#0ea5e9] text-xs font-black uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-sky-50 border border-sky-100"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Gallery
            </span>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The{" "}
              <span className="italic text-[#0ea5e9] not-italic" style={{ fontStyle: "normal" }}>
                Work.
              </span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
              Photos from the bench — prints, cuts, and renders.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.08 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {galleryItems.map((item) => {
              const color = categoryColors[item.category] ?? "#0ea5e9";
              return (
                <motion.div
                  key={item.src}
                  variants={fadeUp}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  onClick={() => setSelected(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 self-start"
                      style={{ background: `${color}25`, color, border: `1px solid ${color}40` }}
                    >
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-medium leading-snug">{item.caption}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
            <span
              className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{
                background: `${categoryColors[selected.category] ?? "#0ea5e9"}25`,
                color: categoryColors[selected.category] ?? "#0ea5e9",
                border: `1px solid ${categoryColors[selected.category] ?? "#0ea5e9"}40`,
              }}
            >
              {selected.category}
            </span>
            <p className="text-white/80 text-sm mt-2">{selected.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
