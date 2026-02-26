import { site } from "@/content/site";

import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-accent-50/70 via-white to-paper-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              {site.cta.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {site.cta.description}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={site.cta.primary.href}
                className="inline-flex items-center justify-center rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ink-900/90"
              >
                {site.contact.email}
              </a>
              <a
                href={site.cta.secondary.href}
                className="inline-flex items-center justify-center rounded-xl border border-paper-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-sm transition hover:bg-paper-50"
              >
                {site.cta.secondary.label}
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-600">{site.contact.serviceArea}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

