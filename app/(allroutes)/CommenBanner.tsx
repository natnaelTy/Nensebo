"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CommonBannerProps {
  title?: string;
  subtitle?: string;
}

export default function CommonBanner({ title, subtitle }: CommonBannerProps) {
  return (
    <div className="relative h-[340px] md:h-[400px] overflow-hidden">
      <Image
        src="/images/headerimage.jpg"
        fill
        priority
        alt="Nensebo coffee highlands"
        className="object-cover"
      />
      {/* Layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Decorative coffee-colored stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent/60" />

      {/* Content — always centred; subtitle + title are required for inner pages */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/25 border border-accent/40 text-accent text-xs uppercase tracking-[0.18em] font-semibold mb-5"
          >
            {subtitle}
          </motion.span>
        )}
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>
        )}
        {/* Decorative underline */}
        {title && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 h-0.5 w-16 bg-accent rounded-full origin-center"
          />
        )}
      </div>
    </div>
  );
}
