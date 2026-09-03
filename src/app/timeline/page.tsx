import type { Metadata } from "next";
import { TimelineEntry } from "@/components/timeline/TimelineEntry";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function TimelinePage() {
  return (
    <div className="px-6 pt-28 pb-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-heading mb-16 text-center text-4xl font-bold text-charcoal">
          My Journey
        </h1>
        <div className="relative space-y-8 border-l-2 border-accent/20 pl-0">
          {experience.map((entry, i) => (
            <TimelineEntry key={entry.title} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
