import Link from "next/link";
import { TypewriterText } from "@/components/TypewriterText";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <h1 className="font-heading mb-6 text-5xl font-bold tracking-tight text-charcoal md:text-7xl">
        Hi, I&apos;m Mohan
      </h1>
      <div className="mb-10 max-w-xl">
        <TypewriterText
          prefix={siteConfig.taglinePrefix}
          phrases={siteConfig.typewriterPhrases}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/projects"
          className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-charcoal/20 px-8 py-3 text-sm font-medium text-charcoal transition-colors hover:border-accent hover:text-accent"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
