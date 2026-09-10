"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/oursites", label: "Our Sites" },
  { href: "/gallary", label: "Gallery" },
  { href: "/FAQ", label: "FAQ" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/tadecoffeelogo-no-bg.png"
                alt="Tade Coffee"
                width={192}
                height={192}
                className={cn(
                  "h-20 w-auto object-contain transition-colors",
                  scrolled ? "text-foreground" : "text-white"
                )}
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full group",
                    scrolled
                      ? "text-foreground hover:text-primary hover:bg-secondary"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={cn(
                  "ml-3 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                  scrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white text-primary hover:bg-white/90"
                )}
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col pt-20 px-6 pb-8 gap-1">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
              Navigation
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-4 rounded-xl text-foreground font-medium hover:bg-secondary hover:text-primary transition-colors group"
              >
                {link.label}
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
            <div className="mt-auto pt-6 border-t border-border">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
