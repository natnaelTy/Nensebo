"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommonBanner from "../CommenBanner";
import faqData from "./FAQ";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = faqData as Array<{ question?: string; q?: string; title?: string; answer?: string; a?: string; content?: string }>;

  return (
    <div className="bg-background">
      <CommonBanner title="Frequently Asked Questions" subtitle="FAQ" />

      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about sourcing Tade coffee.
              Can&apos;t find an answer?{" "}
              <a href="/contact" className="text-primary hover:underline font-medium">
                Contact us.
              </a>
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((item, i: number) => {
              const question =
                item.question || item.q || item.title || `Question ${i + 1}`;
              const answer = item.answer || item.a || item.content || "";
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-primary/30 bg-card shadow-sm"
                      : "border-border bg-card hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-foreground text-base leading-snug">
                      {question}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-primary text-primary-foreground rotate-180"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5">
                          <div className="h-px bg-border mb-4" />
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 p-8 rounded-3xl bg-secondary border border-border text-center"
          >
            <p className="font-display text-2xl font-bold text-foreground mb-3">
              Still have questions?
            </p>
            <p className="text-muted-foreground mb-6 text-sm">
              Our team is ready to help with any export or sourcing questions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Contact Our Team
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
