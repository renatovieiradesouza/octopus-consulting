import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="leading-tight">
            <div className="font-display text-2xl font-extrabold tracking-[0.18em] text-ink-900">
              {site.brand.name}
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent-700/90">
              {site.brand.subtitle}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Navegação principal">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-ink-900/90"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}

