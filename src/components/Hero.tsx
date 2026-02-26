import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-paper-50 via-white to-accent-50/60 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-50 blur-2xl sm:h-96 sm:w-96" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <Reveal className="max-w-xl">
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl">
            {site.hero.title.before}{" "}
            <span className="text-accent-700">{site.hero.title.highlight}</span>
            {site.hero.title.after}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            {site.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={site.hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ink-900/90"
            >
              {site.hero.primaryCta.label}
            </a>
            <a
              href={site.hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-xl border border-paper-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-sm transition hover:bg-paper-50"
            >
              {site.hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
          {site.hero.stats.map((stat, idx) => (
            <Reveal key={stat.label} className={cn(idx === 0 && "md:mt-10")}>
              <div className="rounded-2xl border border-paper-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="font-display text-3xl font-extrabold text-ink-900">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-600">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

