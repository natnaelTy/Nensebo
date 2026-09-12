"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(stepValue * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Years of Excellence", value: 15, suffix: "+" },
  { label: "Tons Exported / Year", value: 500, suffix: "+" },
  { label: "Partner Countries", value: 12, suffix: "" },
  { label: "Farming Families", value: 2000, suffix: "+" },
];

const highlights = [
  {
    icon: "🌿",
    title: "Direct Trade",
    desc: "Working hand-in-hand with smallholder farming families.",
  },
  {
    icon: "☀️",
    title: "Sun-Dried Excellence",
    desc: "Multiple processing methods for diverse flavor profiles.",
  },
  {
    icon: "📦",
    title: "Export Ready",
    desc: "Wholesale green coffee lots, compliant with international export standards.",
  },
];

export default function ShortAbout() {
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative h-[480px] lg:h-[580px] rounded-3xl overflow-hidden bg-muted">
              <Image
                src="/images/tade-1.jpg"
                alt="Tade coffee farm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle green tint overlay */}
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary text-primary-foreground px-7 py-5 rounded-2xl shadow-2xl"
            >
              <p className="font-display text-4xl font-bold leading-none">
                <AnimatedCounter target={15} suffix="+" />
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1.5 font-medium">
                Years of Excellence
              </p>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full border-2 border-accent/30 -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-accent/10 -z-10" />
          </motion.div>

          {/* ── Content column ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
              About Tade
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Where Ethiopia&apos;s Finest
              <br />
              <span className="text-primary italic">Coffee Begins</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
              Nestled in the highlands of West Arsi in Oromia, Nensebo is where
              exceptional coffee is born. As an Ethiopian green coffee exporter,
              we work directly with local farming families to cultivate, process,
              and ship some of Ethiopia&apos;s most sought-after specialty coffee
              beans — with full traceability from farm to roaster.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-secondary rounded-2xl border border-border/50"
                >
                  <p className="font-display text-3xl font-bold text-primary">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-muted-foreground text-xs mt-1 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-10">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5 shrink-0">{h.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {h.title}
                    </p>
                    <p className="text-muted-foreground text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn Our Story
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
