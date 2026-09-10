"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CommonBanner from "../CommenBanner";
import Link from "next/link";

const timeline = [
  {
    year: "2008",
    title: "Founded",
    desc: "Tade Coffee was established with a mission to bring the highlands' finest beans to the world.",
  },
  {
    year: "2012",
    title: "First International Export",
    desc: "Our first container was shipped to a specialty roaster in Japan — the beginning of our global journey.",
  },
  {
    year: "2016",
    title: "Direct Trade Partnerships",
    desc: "We formalized direct partnerships with over 500 farming families, ensuring fair prices and traceability.",
  },
  {
    year: "2019",
    title: "Anaerobic Processing Introduced",
    desc: "Invested in anaerobic fermentation infrastructure to diversify our processing catalog.",
  },
  {
    year: "2022",
    title: "12 Countries Reached",
    desc: "Nensebo coffees now reach roasters across Asia, Europe, and the Americas.",
  },
  {
    year: "Today",
    title: "Growing Together",
    desc: "2,000+ farming families, 500+ tons exported annually, with a commitment to continuous improvement.",
  },
];

const values = [
  {
    icon: "🌱",
    title: "Farmer First",
    desc: "Every decision begins with the wellbeing of the farming families who grow our coffee.",
  },
  {
    icon: "🔍",
    title: "Radical Transparency",
    desc: "Full traceability from GPS-mapped farms to export documentation.",
  },
  {
    icon: "☕",
    title: "Quality Obsession",
    desc: "Every lot is cup-scored and rejected if it doesn't meet our 84+ SCA standard.",
  },
  {
    icon: "🌍",
    title: "Sustainable Futures",
    desc: "Shade-grown, organic-forward farming that protects the West Arsi ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <CommonBanner title="Our Story" subtitle="About Tade" />

      {/* Mission section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
                Who We Are
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Rooted in West Arsi,
                <br />
                <span className="text-primary italic">Reaching the World</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Tade Coffee is an Ethiopian specialty coffee export company
                born from a belief that the world deserves to taste the
                extraordinary coffees growing in the Nensebo highlands — and
                that the farmers who grow them deserve recognition and fair
                reward.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We operate our own washing stations and drying beds, work
                directly with smallholder farmers, and maintain rigorous quality
                standards at every step. The result: coffees with a story,
                flavor, and provenance that sets them apart in any cupping.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-md"
              >
                Partner with Us
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden bg-muted">
                  <Image src="/images/onsite.jpg" alt="Coffee farm" fill className="object-cover" />
                </div>
                <div className="relative h-64 mt-8 rounded-2xl overflow-hidden bg-muted">
                  <Image src="/images/coffeeSite2.JPG" alt="Processing station" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden bg-muted">
                  <Image src="/images/dried.jpg" alt="Drying beds" fill className="object-cover" />
                </div>
                <div className="relative h-48 -mt-8 rounded-2xl overflow-hidden bg-muted">
                  <Image src="/images/coffeeplant.png" alt="Coffee plant" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Milestones That Shaped Us
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-8 pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background" />

                  <div>
                    <span className="inline-block px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
