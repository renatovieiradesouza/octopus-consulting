import { site } from "@/content/site";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Differential() {
  return (
    <section
      id="diferencial"
      className="bg-gradient-to-br from-paper-50 via-white to-paper-50 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeader
              tag={site.diferencial.tag}
              title={site.diferencial.title}
              description={site.diferencial.description}
              align="left"
              className="mx-0"
            />
          </Reveal>

          <ul className="mt-10 space-y-4">
            {site.diferencial.bullets.map((text) => (
              <Reveal key={text}>
                <li className="flex items-start gap-4 rounded-2xl border border-paper-200 bg-white p-5 shadow-soft transition hover:translate-x-1 hover:shadow-lift">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                    ✓
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-slate-700">
                    {text}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {site.diferencial.cards.map((card) => (
            <Reveal key={card.label}>
              <div className="rounded-2xl border border-paper-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="font-display text-3xl font-extrabold text-ink-900">
                  {card.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-600">{card.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

