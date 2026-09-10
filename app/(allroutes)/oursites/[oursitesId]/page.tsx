"use client";
import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import OurSite from "../data";

const processIcons: Record<string, { icon: string; label: string; color: string }> = {
  "washing station": { icon: "💧", label: "Washed", color: "bg-blue-50 text-blue-700 border-blue-200" },
  "sun dried station": { icon: "☀️", label: "Natural / Sun Dried", color: "bg-amber-50 text-amber-700 border-amber-200" },
  "anarobic station": { icon: "🧪", label: "Anaerobic", color: "bg-purple-50 text-purple-700 border-purple-200" },
  "anaerobic station": { icon: "🧪", label: "Anaerobic", color: "bg-purple-50 text-purple-700 border-purple-200" },
};

function getProcess(raw: string) {
  const key = raw?.toLowerCase().trim();
  return (
    processIcons[key] ?? { icon: "☕", label: raw, color: "bg-secondary text-secondary-foreground border-border" }
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } }),
};

export default function SiteDetailPage({
  params,
}: {
  params: Promise<{ oursitesId: string }>;
}) {
  const { oursitesId } = use(params);
  const sites = OurSite;
  const site = sites.find((s) => s.id === oursitesId);
  if (!site) notFound();

  const process = getProcess(site.Process);

  const specs = [
    { label: "Origin", value: site.origin },
    { label: "Region", value: site.Region },
    { label: "Species", value: site.Species },
    { label: "Variety", value: site.Variety },
    { label: "Altitude", value: site.Altitude },
    { label: "Process", value: process.label },
    { label: "Harvest Period", value: site.Harvest_period },
    { label: "Harvest Type", value: site.Type_of_harvest },
    { label: "Drying Method", value: site.Drying },
    { label: "Packaging", value: site.Packaging },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* ── Full-bleed Hero ── */}
      <div className="lg:col-span-2">
        <div className="relative h-[60vh] md:h-[75vh] overflow-hidden">
          <Image
            src={site.imageUrl}
            alt={site.siteName}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          {/* Back nav */}
          <div className="absolute top-0 left-0 right-0 pt-24 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href="/oursites"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors backdrop-blur-sm bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                All Sites
              </Link>
            </div>
          </div>

          {/* Hero text */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Process badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${process.color}`}
                >
                  <span>{process.icon}</span>
                  {process.label}
                </span>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3">
                  {site.siteName}
                </h1>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/65 text-sm">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {site.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8L3 21" />
                    </svg>
                    {site.Region}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                    {site.Altitude}
                  </span>
                </div>
              </motion.div>
            </div>          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 xl:gap-16">
          {/* ── Main column ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* Short intro */}

            {site.shortDescription && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0}
              >
                <p className="text-xl md:text-2xl font-display text-primary font-medium leading-relaxed border-l-4 border-accent pl-6 italic">
                  &ldquo;{site.shortDescription}&rdquo;
                </p>
              </motion.div>
            )}

            {/* Full description */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
                About {site.siteName}
              </h2>
              <div className="prose prose-stone max-w-none">
                {site.fullDescription.split(". ").reduce<string[][]>((acc, s, i) => {
                  const para = Math.floor(i / 4);
                  if (!acc[para]) acc[para] = [];
                  acc[para].push(s);
                  return acc;
                }, []).map((sentences, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-base mb-4">
                    {sentences.join(". ").trim()}{sentences.length > 0 && !sentences[sentences.length - 1].endsWith(".") ? "." : ""}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Processing method deep-dive */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Processing Method
              </h2>

              <div className="rounded-3xl border border-border bg-card overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-border flex items-center gap-4">
                  <span className="text-4xl">{process.icon}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {process.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">{site.Process}</p>
                  </div>
                </div>

                {/* Steps */}
                <div className="p-6 grid sm:grid-cols-3 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Selective Harvest",
                      desc: `${site.Type_of_harvest} picking — only the ripest cherries selected at peak sweetness.`,
                    },
                    {
                      step: "2",
                      title: "Processing",
                      desc:
                        site.Process.toLowerCase().includes("wash")
                          ? "Cherries pulped and fermented in fresh water, then thoroughly washed for a clean, bright cup."
                          : site.Process.toLowerCase().includes("anaer") || site.Process.toLowerCase().includes("anaer")
                          ? "Sealed in oxygen-free tanks for controlled anaerobic fermentation, developing exotic, layered flavors."
                          : "Whole cherries dried intact on raised beds under the Ethiopian sun for natural sweetness and fruit character.",
                    },
                    {
                      step: "3",
                      title: "Drying",
                      desc: `${site.Drying} — carefully monitored drying to ensure ideal moisture content and flavor preservation.`,
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                        {s.step}
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{s.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Terroir & farming */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Terroir &amp; Farming
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🌿",
                    title: "Species & Variety",
                    value: `${site.Species} — ${site.Variety}`,
                  },
                  {
                    icon: "⛰️",
                    title: "High Altitude Growing",
                    value: site.Altitude,
                  },
                  {
                    icon: "✋",
                    title: "Harvest Method",
                    value: site.Type_of_harvest,
                  },
                  {
                    icon: "📅",
                    title: "Harvest Window",
                    value: site.Harvest_period,
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-border bg-secondary/40 p-5"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl shrink-0">{card.icon}</span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                          {card.title}
                        </p>
                        <p className="font-display font-bold text-foreground text-lg leading-snug">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Packaging & logistics */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={4}
              className="rounded-3xl bg-[#0a2910] text-white p-8"
            >
              <h2 className="font-display text-2xl font-bold mb-6">
                Packaging &amp; Export
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Packaging</p>
                  <p className="text-white font-semibold">{site.Packaging}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Origin</p>
                  <p className="text-white font-semibold">{site.origin}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-semibold">{site.location}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">
                  Ready to source this coffee? Contact our export team for pricing, availability, and shipping details.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
                >
                  Request Export Quote
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">
            {/* Full specs card — scrolls normally */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <div className="px-6 py-4 bg-secondary border-b border-border">
                <p className="font-display font-bold text-foreground text-lg">
                  Coffee Specs
                </p>
              </div>
              <div className="divide-y divide-border">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between gap-3 px-6 py-3.5">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium shrink-0">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="p-6 space-y-3 border-t border-border">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200"
                >
                  Request Samples
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
                >
                  Export Inquiry
                </Link>
              </div>
            </motion.div>

            {/* Other sites suggestion — sticky, pins below the specs card */}
            <div className="rounded-2xl border border-border bg-card p-5 sticky top-[8.25rem]">
              <p className="font-semibold text-foreground text-sm mb-4">Explore Other Sites</p>
              <div className="space-y-3">
                {sites
                  .filter((s) => s.id !== site.id)
                  .slice(0, 3)
                  .map((s) => (
                    <Link
                      key={s.id}
                      href={`/oursites/${s.id}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-muted shrink-0">
                        <Image
                          src={s.imageUrl}
                          alt={s.siteName}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="48px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">
                          {s.siteName}
                        </p>
                        <p className="text-xs text-muted-foreground">{s.Altitude} · {getProcess(s.Process).label}</p>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link
                href="/oursites"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-4 hover:text-primary/70 transition-colors"
              >
                View all sites
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
