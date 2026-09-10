"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CommonBanner from "../CommenBanner";
import OurSite from "./data";
import { Badge } from "@/components/ui/badge";

const processMap: Record<string, { label: string; icon: string }> = {
  "washing station":    { label: "Washed",   icon: "💧" },
  "sun dried station":  { label: "Natural",   icon: "☀️" },
  "anarobic station":   { label: "Anaerobic", icon: "🧪" },
  "anaerobic station":  { label: "Anaerobic", icon: "🧪" },
};

function getProcessLabel(raw: string) {
  return processMap[raw?.toLowerCase().trim()] ?? { label: raw, icon: "☕" };
}

const filters = ["All", "Washed", "Natural", "Anaerobic"];

export default function OurSitesPage() {
  const [filter, setFilter] = useState("All");

  const filtered = OurSite.filter((s) => {
    if (filter === "All") return true;
    const { label } = getProcessLabel(s.Process);
    return label.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="bg-background">
      <CommonBanner title="Our Coffee Sites" subtitle="Origins" />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
                All Origins
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Every Site, Every Story
              </h2>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === f
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-border"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((site, i) => {
              const process = getProcessLabel(site.Process);
              return (
                <motion.div
                  key={site.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
                >
                  <Link href={`/oursites/${site.id}`} className="group block h-full">
                    <div className="rounded-2xl border border-border bg-card overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden bg-muted">
                        <Image
                          src={site.imageUrl}
                          alt={site.siteName}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        {/* Process badge */}
                        <div className="absolute bottom-3 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-foreground shadow">
                            {process.icon} {process.label}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col p-5">
                        <h3 className="font-display text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                          {site.siteName}
                        </h3>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {site.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                            {site.Altitude}
                          </span>
                          <span>{site.Variety}</span>
                        </div>

                        {site.shortDescription && (
                          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-2">
                            {site.shortDescription}
                          </p>
                        )}

                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                          <div className="flex gap-1.5">
                            <Badge variant="secondary" className="text-[10px]">
                              {site.Species}
                            </Badge>
                            <Badge variant="outline" className="text-[10px]">
                              {site.Harvest_period}
                            </Badge>
                          </div>
                          <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Details
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-muted-foreground font-medium">
                No sites match &ldquo;{filter}&rdquo; — try a different filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
