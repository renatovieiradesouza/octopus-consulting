import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-paper-200 bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="font-display text-xl font-extrabold tracking-[0.18em] text-ink-900">
              {site.brand.name}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent-700/90">
              {site.brand.subtitle}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{site.footer.description}</p>
            <p className="mt-4 text-xs text-slate-500">{site.brand.legalName}</p>
          </div>

          {site.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold text-ink-900">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-600 transition hover:text-ink-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-paper-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.brand.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

