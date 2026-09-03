import { ScrollReveal } from "@/components/ScrollReveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="bg-charcoal px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-heading mb-6 text-center text-3xl font-bold md:text-4xl">
            Education
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/70">
            {education.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-heading mb-4 text-xl font-semibold">
                Focus Areas
              </h3>
              <ul className="space-y-2">
                {education.interests.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-white/70"
                  >
                    <span className="text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="font-heading mb-2 text-xl font-semibold">
                {education.highlights.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-accent">
                {education.degree} &middot; {education.school} &middot; GPA{" "}
                {education.gpa}
              </p>
              <p className="mb-2 text-xs text-white/50">{education.period}</p>
              <p className="mb-4 text-sm text-white/70">
                {education.highlights.description}
              </p>
              <p className="text-xs text-white/50">
                {education.highlights.note}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
