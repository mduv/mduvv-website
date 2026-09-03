import type { ExperienceEntry } from "@/data/experience";
import { ScrollReveal } from "@/components/ScrollReveal";

interface TimelineEntryProps {
  entry: ExperienceEntry;
  index: number;
}

export function TimelineEntry({ entry, index }: TimelineEntryProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative pl-8">
        <div className="absolute top-2 left-0 h-3 w-3 rounded-full bg-accent ring-4 ring-accent-light" />
        <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-heading text-lg font-semibold text-charcoal">
              {entry.title}
            </h3>
            <span className="text-xs text-charcoal/50">{entry.period}</span>
          </div>
          <p className="mb-3 text-sm font-medium text-accent">
            {entry.organization}
          </p>
          <p className="text-sm leading-relaxed text-charcoal/60">
            {entry.description}
          </p>
          {entry.bullets && entry.bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {entry.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2 text-sm leading-relaxed text-charcoal/60"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
