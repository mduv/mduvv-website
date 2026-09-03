"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  prefix: string;
  phrases: readonly string[];
}

export function TypewriterText({ prefix, phrases }: TypewriterTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const isComplete = displayedText === currentPhrase;
    const isEmpty = displayedText === "";

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && !isComplete) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, 60);
    } else if (!isDeleting && isComplete) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && !isEmpty) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
      }, 30);
    } else if (isDeleting && isEmpty) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex, phrases]);

  return (
    <p className="text-lg text-charcoal/70 md:text-xl">
      {prefix}{" "}
      <span className="text-accent font-medium">{displayedText}</span>
      <span className="animate-pulse text-accent">|</span>
    </p>
  );
}
