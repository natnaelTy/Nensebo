"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CommonBanner from "../CommenBanner";
import images from "./Image";

const categories = ["All", "Farm", "Processing", "Sites", "People"];

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const allImages = images as Array<{ src?: string; image?: string; url?: string; alt?: string; title?: string } | string>;
  type ArrayItem = Extract<typeof allImages[number], { src?: string; image?: string; url?: string; alt?: string; title?: string }>;

  return (
    <div className="bg-background">
      <CommonBanner title="Gallery" subtitle="Visual Story" />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Tade Through the Lens
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From highland farm to export facility — a visual journey through
              every step of our coffee&apos;s life.
            </p>
          </motion.div>

          {/* Category filter */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {allImages.map((img, i: number) => {
              const src =
                typeof img === "string"
                  ? `/images/${img}`
                  : (img as ArrayItem).src || (img as ArrayItem).image || (img as ArrayItem).url || `/images/site${(i % 7) + 1}.jpg`;
              const alt =
                typeof img === "string" ? img : (img as ArrayItem).alt || (img as ArrayItem).title || "Tade coffee";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group bg-muted"
                  onClick={() => setSelected(src)}
                >
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: `${60 + (i % 3) * 15}%` }}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full" style={{ minHeight: "300px", maxHeight: "80vh" }}>
                <Image
                  src={selected}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
              >
                Close
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
