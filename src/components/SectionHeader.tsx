import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={cn(alignClass, "mx-auto max-w-3xl", className)}>
      <div className="inline-flex items-center rounded-full bg-accent-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent-700">
        {tag}
      </div>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

