import { ScrollReveal } from "@/components/ScrollReveal";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="bg-off-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-heading mb-12 text-center text-3xl font-bold text-charcoal md:text-4xl">
            Skills &amp; Expertise
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-charcoal/10 bg-white p-6 transition-colors hover:border-accent/40">
                <h3 className="font-heading mb-4 text-lg font-semibold text-charcoal">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/60">
                  {category.items.join(", ")}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
