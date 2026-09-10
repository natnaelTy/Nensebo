"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import data from "./data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function WhatWeOffer() {
  const offers = data as any[];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
            What We Offer
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-2xl mx-auto">
            Crafted for Every Roaster Profile
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Three distinct processing methods — each delivering a unique
            expression of Tade Coffee terroir.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {offers.map((offer: any, i: number) => {
            const title =
              offer.title || offer.name || offer.processType || `Offering ${i + 1}`;
            const desc =
              offer.description || offer.desc || offer.about || "";
            const img =
              offer.image || offer.img || offer.coverImage || offer.imageUrl || "/images/coffeebag.jpg";
            const process =
              offer.process || offer.processLabel || offer.type || "";
            const tags: string[] = offer.tags || offer.features || offer.notes || [];

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <Card className="group h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden bg-muted">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {process && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="default" className="shadow-md">
                          {process}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="flex-1 flex flex-col p-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                      {desc}
                    </p>

                    {/* Flavor tags */}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {tags.slice(0, 4).map((tag: string) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/70 transition-colors group/link"
                    >
                      Request Samples
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        className="transition-transform group-hover/link:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
