"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import images from "./ImagesData";

interface SlideContent {
  origin: string;
  title: string;
  highlight: string;
  description: string;
}

export default function Hero() {
  const progressRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const active: SlideContent =
    (images as unknown as SlideContent[])[activeIndex] ?? (images as unknown as SlideContent[])[0];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        speed={1200}
        className="absolute inset-0 h-full w-full"
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex ?? 0);
        }}
        onSlideChange={(swiper: SwiperType) => {
          setActiveIndex(swiper.realIndex ?? 0);
          if (progressRef.current) {
            progressRef.current.style.width = "0%";
          }
        }}
        onAutoplayTimeLeft={(_, __, progress) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${(1 - progress) * 100}%`;
          }
        }}
      >
        {(images as unknown as { imageUrl?: string; src?: string; image?: string; url?: string; alt?: string; title?: string }[]).map((img, i: number) => {
          const src =
            typeof img === "string"
              ? img
              : img.imageUrl || img.src || img.image || img.url || "";
          const alt =
            typeof img === "string"
              ? "Tade coffee"
              : img.alt || img.title || "Tade coffee";
          if (!src) return null;
          return (
            <SwiperSlide key={i} className="relative h-full w-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover scale-105"
                priority={i === 0}
                sizes="100vw"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-30">
        <div
          ref={progressRef}
          className="h-full bg-accent transition-none"
          style={{ width: "0%", transition: "width 100ms linear" }}
        />
      </div>

      {/* Main content */}
      <div className="absolute inset-0 z-20 flex h-full flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto ">
        {/* Text block — visible by default; hero-rise replays on slide change via key */}
        <div key={`slide-${activeIndex}`}>
          {/* Subtitle label */}
          <div
            className="hero-rise flex items-center justify-center gap-3 mb-5"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-px w-8 bg-accent/60" />
            <span className="text-accent text-xs uppercase tracking-[0.22em] font-semibold">
              {active.origin}
            </span>
            <span className="h-px w-8 bg-accent/60" />
          </div>

          {/* Main title */}
          <h1
            className="hero-rise font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-[1.1] mb-4 max-w-3xl"
            style={{ animationDelay: "0.25s" }}
          >
            {active.title}
            <br />
            <em className="not-italic text-accent">{active.highlight}</em>
          </h1>

          {/* Subtitle / tagline */}
          <p
            className="hero-rise text-white/70 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed font-light"
            style={{ animationDelay: "0.4s" }}
          >
            {active.description}
          </p>

          {/* CTA buttons */}
          <div
            className="hero-rise flex flex-col items-center sm:flex-row sm:justify-center gap-4"
            style={{ animationDelay: "0.55s" }}
          >
            <Link
              href="/oursites"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Our Sites
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white/60 text-white rounded-full font-semibold text-sm hover:bg-white hover:text-foreground transition-all duration-200 backdrop-blur-sm"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators (01 / 02 / 03) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-end gap-5">                {(images as readonly SlideContent[]).map((_, i: number) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group flex items-center gap-2.5"
            >
              <span
                className={`h-px transition-all duration-300 ${
                  isActive
                    ? "w-10 bg-accent"
                    : "w-5 bg-white/30 group-hover:bg-white/60"
                }`}
              />
              <span
                className={`text-xs font-medium tracking-[0.2em] transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-white/40 group-hover:text-white/80"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 right-12 z-20 hidden lg:flex flex-col items-center">
        <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] rotate-90 origin-center mb-4">
          Scroll
        </p>
        <div className="hero-bounce w-px h-14 bg-gradient-to-b from-white/50 to-transparent" />
      </div>

      {/* Bottom metadata strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {[
              { label: "Altitude", value: "1,800–2,200m" },
              { label: "Region", value: "Oromia, Ethiopia" },
              { label: "Process", value: "Washed · Natural · Anaerobic" },
            ].map((item) => (
              <div key={item.label} className="hidden md:block">
                <p className="text-white/40 text-[10px] uppercase tracking-widest">
                  {item.label}
                </p>
                <p className="text-white/80 text-xs font-medium mt-0.5">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-accent text-xs font-medium uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1.5"
          >
            Export Inquiry
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
