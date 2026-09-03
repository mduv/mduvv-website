import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="px-6 pt-28 pb-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-heading mb-4 text-center text-4xl font-bold text-charcoal">
          Get In Touch
        </h1>
        <p className="mb-16 text-center text-charcoal/60">
          Have a question or want to work together? I&apos;d love to hear from
          you.
        </p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading mb-6 text-xl font-semibold text-charcoal">
              Let&apos;s Connect
            </h2>
            <div className="space-y-5">
              <a
                href={siteConfig.social.email}
                className="flex items-center gap-3 text-charcoal/70 transition-colors hover:text-accent"
              >
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-charcoal/50">Email</p>
                  <p className="text-sm">{siteConfig.email}</p>
                </div>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                className="flex items-center gap-3 text-charcoal/70 transition-colors hover:text-accent"
              >
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-charcoal/50">Phone</p>
                  <p className="text-sm">{siteConfig.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-charcoal/70">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-charcoal/50">Location</p>
                  <p className="text-sm">{siteConfig.location}</p>
                </div>
              </div>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-charcoal/70 transition-colors hover:text-accent"
              >
                <GitHubIcon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-charcoal/50">GitHub</p>
                  <p className="text-sm">github.com/mduv</p>
                </div>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-charcoal/70 transition-colors hover:text-accent"
              >
                <LinkedInIcon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-charcoal/50">LinkedIn</p>
                  <p className="text-sm">linkedin.com/in/mohan-duvvuri</p>
                </div>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
