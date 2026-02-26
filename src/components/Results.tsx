import { site } from "@/content/site";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Results() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-600/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            tag={site.results.tag}
            title={site.results.title}
            description={site.results.description}
            className="text-white [&_h2]:text-white [&_p]:text-white/75 [&>div]:bg-white/10 [&>div]:text-white/80"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.results.metrics.map((m) => (
            <Reveal key={m.label}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center shadow-soft transition hover:-translate-y-1 hover:bg-white/10">
                <div className="font-display text-4xl font-extrabold tracking-tight text-accent-600">
                  {m.value}
                </div>
                <div className="mt-3 text-sm font-medium text-white/85">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

