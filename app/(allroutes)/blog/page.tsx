import Link from "next/link";
import Image from "next/image";
import CommonBanner from "../CommenBanner";
import { posts } from "./data";
import { SITE_NAME } from "@/lib/site";

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="bg-background">
      <CommonBanner title="Journal & Guides" subtitle="Blog" />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
                From the Highlands
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Notes on Ethiopian Coffee
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-md md:text-right">
              Field notes, processing guides and origin stories from our
              washing and drying stations in West Arsi.
            </p>
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-12"
          >
            <article className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 lg:h-auto min-h-[280px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    Featured
                  </span>
                  {featured.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                  <time dateTime={featured.date}>
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="text-primary text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read article
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </Link>

          {/* Remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <article className="rounded-2xl border border-border bg-card overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border text-xs text-muted-foreground">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Curious about our coffees?
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore the sites behind every lot, or get in touch for current
            crop availability and lot sheets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/oursites"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              View Our Sites
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            {SITE_NAME} — traceable specialty coffee from West Arsi, Ethiopia
          </p>
        </div>
      </section>
    </div>
  );
}
