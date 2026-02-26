import { site } from "@/content/site";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            tag={site.services.tag}
            title={site.services.title}
            description={site.services.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.services.items.map((service) => (
            <Reveal key={service.title}>
              <article className="group relative overflow-hidden rounded-2xl border border-paper-200 bg-paper-50 p-7 shadow-soft transition hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-accent-600 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl transition group-hover:bg-accent-50/70">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent-600/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

