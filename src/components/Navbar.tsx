"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 bg-off-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tight text-charcoal"
          >
            {siteConfig.initials}
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="text-charcoal transition-colors hover:text-accent"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-off-white p-8 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold text-charcoal">
                Menu
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal transition-colors hover:text-accent"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="mb-6 text-sm text-charcoal/60">Connect with me</p>

            <nav className="flex flex-col gap-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-2xl font-semibold text-charcoal transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
