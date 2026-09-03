import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-accent-light text-4xl font-bold text-accent">
            MD
          </div>
          <h2 className="font-heading mb-6 text-3xl font-bold text-charcoal md:text-4xl">
            About Me
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-charcoal/70">
            {siteConfig.bio}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {siteConfig.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-charcoal/10 bg-off-white p-6">
                <p className="font-heading text-3xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-charcoal/60">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
