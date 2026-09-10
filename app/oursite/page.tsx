"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import data from "./data";
import { Badge } from "@/components/ui/badge";

export default function OurSitesPreview() {
  const sites = (data as Array<{ name?: string; siteName?: string; title?: string; description?: string; desc?: string; about?: string; image?: string; img?: string; coverImage?: string; imageUrl?: string; images?: string[]; location?: string; woreda?: string; area?: string; processes?: string[]; process?: string[]; id?: string | number; _id?: string | number }>).slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
              Our Sites
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-lg">
              Coffee Origins, <em className="italic text-primary not-italic">Precisely Traced</em>
            </h2>
          </div>
          <Link
            href="/oursites"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors shrink-0"
          >
            View all sites
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[320px]">
          {sites.map((site, i: number) => {
            const name = site.name || site.siteName || site.title || `Site ${i + 1}`;
            const desc = site.description || site.desc || site.about || "";
            const img = site.image || site.img || site.coverImage || site.imageUrl || site.images?.[0] || "/images/coffeeSite.JPG";
            const location = site.location || site.woreda || site.area || "West Arsi, Oromia, Ethiopia";
            const processes: string[] = site.processes || site.process || [];
            const id = site.id || site._id || String(i + 1);
            const isLarge = i === 0;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer bg-muted ${isLarge ? "md:row-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2" : ""}`}
              >
                <Link href={`/oursites/${id}`} className="block h-full">
                  {/* Image */}
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {processes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {processes.slice(0, 2).map((p: string) => (
                          <Badge key={p} variant="secondary" className="text-[10px] py-0.5">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <h3 className="font-display text-xl font-bold text-white leading-tight mb-1">
                      {name}
                    </h3>
                    <p className="text-white/60 text-xs font-medium flex items-center gap-1">
                      <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {location}
                    </p>
                    {isLarge && desc && (
                      <p className="text-white/70 text-sm mt-2 line-clamp-2 leading-relaxed">
                        {desc}
                      </p>
                    )}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                    <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-3xl bg-primary flex flex-col items-center justify-center text-center p-8 text-primary-foreground"
          >
            <p className="text-5xl mb-4">☕</p>
            <h3 className="font-display text-2xl font-bold mb-3">
              Discover All Origins
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-[180px]">
              Explore every farm, process, and flavor note.
            </p>
            <Link
              href="/oursites"
              className="px-6 py-2.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              View All Sites
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
