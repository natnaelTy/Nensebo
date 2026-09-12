import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Sites", href: "/oursites" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallary" },
    { label: "FAQ", href: "/FAQ" },
    { label: "Contact", href: "/contact" },
  ],
  offerings: [
    { label: "Washed Process", href: "/oursites" },
    { label: "Natural Process", href: "/oursites" },
    { label: "Anaerobic Process", href: "/oursites" },
    { label: "Export Inquiry", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a2910] text-white">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/favicon.png"
                alt="Tade Coffee"
                width={192}
                height={192}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Single-origin specialty coffee from the highland farms of the
              Nensebo Woreda, West Arsi — cultivated with care, processed with
              precision, and exported with pride.
            </p>

            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-5">
              Offerings
            </p>
            <ul className="space-y-3">
              {footerLinks.offerings.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:export@tadecoffee.com"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm break-all"
                >
                  <svg
                    className="w-4 h-4 shrink-0 text-accent/70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  export@tadecoffee.com
                </a>
              </li>
              <li>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:+251912345678"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <svg
                    className="w-4 h-4 shrink-0 text-accent/70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +251911828573
                </a>
              </li>
              <li>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
                  Address
                </p>
                <p className="flex items-start gap-2 text-white/70 text-sm">
                  <svg
                    className="w-4 h-4 shrink-0 text-accent/70 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nensebo Woreda,
                  <br />
                  West Arsi Zone, Oromia,
                  <br />
                  Ethiopia
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Tade Coffee Export. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Specialty Coffee · Traceable Origin · Ethical Export
          </p>
        </div>
      </div>
    </footer>
  );
}
