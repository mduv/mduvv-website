import { ScrollReveal } from "@/components/ScrollReveal";
import { interests } from "@/data/interests";

export function Interests() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-heading mb-8 text-center text-2xl font-bold text-charcoal">
            Beyond Code
          </h2>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <ScrollReveal key={interest.label} delay={i * 0.08}>
                <div className="flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-5 py-2.5 shadow-sm transition-colors hover:border-accent/30">
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-charcoal">
                    {interest.label}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
