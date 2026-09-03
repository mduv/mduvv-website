export interface ExperienceEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
  bullets?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Software Engineer",
    organization: "Toga Software · San Jose, CA",
    period: "June 2025 – Present",
    description:
      "Building FrontIQ, an AI voice assistant platform that automates inbound business calls with LLM-driven conversational workflows.",
    bullets: [
      "Built FrontIQ with ~1s p50 application response latency for real-time voice conversations",
      "Integrated Twilio Voice APIs for streaming audio, call routing, and interruption-aware flows",
      "Built Promptfoo-based evals with simulated users and LLM-as-judge to catch prompt regressions",
      "Designed multi-step onboarding that cut new user setup from ~30 minutes to under 5 minutes",
      "Built a RAG-based business knowledge system, then migrated to LLM-generated summaries for better quality and lower retrieval overhead",
    ],
  },
  {
    title: "Software Engineer",
    organization: "Techvox · Palo Alto, CA",
    period: "June 2024 – June 2025",
    description:
      "Collaborated on data management features and marketing site improvements for a polished user experience.",
    bullets: [
      "Implemented data management features that enhanced user experience",
      "Used Statamic and Tailwind CSS to organize pages and streamline marketing efforts",
      "Fixed 100+ web-based UI issues from marketing for a polished frontend",
    ],
  },
  {
    title: "B.S. Computer Science",
    organization: "UC Santa Cruz · Santa Cruz, CA",
    period: "Graduated December 2024",
    description:
      "Completed a B.S. in Computer Science with a 3.6 GPA. Member of the Division III UCSC Men's Volleyball team.",
  },
];
