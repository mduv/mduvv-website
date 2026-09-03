export interface SkillCategory {
  title: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: ["React", "React Native", "Expo", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "AI & Data",
    items: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector Search",
      "PostgreSQL",
      "Promptfoo",
    ],
  },
  {
    title: "Tools & APIs",
    items: [
      "Twilio",
      "Google APIs",
      "Supabase",
      "Anthropic API",
      "Cursor",
      "Claude Code",
    ],
  },
];
