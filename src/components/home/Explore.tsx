import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Explore() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading mb-4 text-3xl font-bold text-charcoal md:text-4xl">
            Explore
          </h2>
          <p className="mb-10 text-charcoal/60">
            Take a look at my timeline to see my experience and journey, or
            browse through my projects.
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4">
          <ScrollReveal delay={0.1}>
            <Link
              href="/timeline"
              className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              View Timeline
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/projects"
              className="group flex items-center gap-2 rounded-full border border-charcoal/20 px-8 py-3 text-sm font-medium text-charcoal transition-colors hover:border-accent hover:text-accent"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
